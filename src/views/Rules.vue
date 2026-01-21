<template>
  <div>
    <!-- 守則列表 -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">交易守則</div>
        <div class="button-group">
          <button 
            v-if="!isDeleteMode" 
            class="btn-floating btn-delete-floating" 
            @click="toggleDeleteMode" 
            title="刪除守則"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #0f1419;">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
          <button 
            v-if="isDeleteMode && selectedForDeletion.length > 0"
            class="btn-floating btn-confirm-delete"
            @click="confirmDelete"
            title="確認刪除"
          >
            ✓
          </button>
          <button 
            v-if="isDeleteMode"
            class="btn-floating btn-cancel-delete"
            @click="cancelDelete"
            title="取消刪除"
          >
            ✕
          </button>
          <button class="btn-floating" @click="openModal">+</button>
        </div>
      </div>
      
      <div v-if="rules.length === 0" style="text-align: center; padding: 32px; color: var(--color-text-secondary);">
        <p style="font-size: 14px;">還沒有守則，點擊右上角"+"新增</p>
      </div>

      <!-- 守則卡片列表（兩欄佈局） -->
      <div v-if="rules.length > 0" class="rules-grid">
        <div 
          v-for="(rule, index) in rules" 
          :key="index" 
          class="rule-card"
          :class="{ 'delete-selected': isDeleteMode && selectedForDeletion.includes(index) }"
          @click="handleRuleClick(index)"
        >
          <div class="rule-content">
            <div class="rule-header">
              <div class="rule-priority" :class="'priority-' + rule.priority">{{ rule.priority }}優先級</div>
              <div v-if="isDeleteMode" class="delete-checkbox">
                <input 
                  type="checkbox"
                  :checked="selectedForDeletion.includes(index)"
                  @change="toggleRuleForDeletion(index)"
                  @click.stop
                />
              </div>
            </div>
            <p class="rule-text">{{ rule.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 新增守則彈窗 -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h2>新增守則</h2>
          <button class="modal-close" @click="closeModal">×</button>
        </div>
        
        <div class="modal-body">
          <div class="form-group" style="margin-bottom: 12px;">
            <label>守則內容</label>
            <textarea 
              v-model="newRule.content"
              class="form-input"
              rows="4"
              placeholder="例如：不能超過資本金的2%風險，必須等待確認信號..."
              style="resize: vertical;"
            ></textarea>
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label>優先級</label>
            <select v-model="newRule.priority" class="form-select">
              <option value="高">高 (必須遵守)</option>
              <option value="中">中 (重要)</option>
              <option value="低">低 (參考)</option>
            </select>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeModal">取消</button>
          <button class="btn btn-primary" @click="addRule">新增守則</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Rule {
  content: string
  priority: string
  createdAt: string
}

const rules = ref<Rule[]>(loadRulesFromStorage())
const newRule = ref({
  content: '',
  priority: '高'
})
const showModal = ref(false)
const isDeleteMode = ref(false)
const selectedForDeletion = ref<number[]>([])

function openModal() {
  newRule.value = {
    content: '',
    priority: '高'
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function addRule() {
  if (!newRule.value.content) {
    alert('請填寫守則內容')
    return
  }

  const rule: Rule = {
    content: newRule.value.content,
    priority: newRule.value.priority,
    createdAt: new Date().toISOString()
  }

  rules.value.push(rule)
  saveRulesToStorage()
  closeModal()

  newRule.value = {
    content: '',
    priority: '高'
  }
}

function toggleDeleteMode() {
  isDeleteMode.value = !isDeleteMode.value
  selectedForDeletion.value = []
}

function cancelDelete() {
  isDeleteMode.value = false
  selectedForDeletion.value = []
}

function toggleRuleForDeletion(index: number) {
  if (selectedForDeletion.value.includes(index)) {
    selectedForDeletion.value = selectedForDeletion.value.filter(i => i !== index)
  } else {
    selectedForDeletion.value.push(index)
  }
}

function handleRuleClick(index: number) {
  if (isDeleteMode.value) {
    toggleRuleForDeletion(index)
  }
}

function confirmDelete() {
  if (selectedForDeletion.value.length === 0) return
  
  if (confirm(`確定要刪除選中的 ${selectedForDeletion.value.length} 個守則嗎？`)) {
    const sortedIndices = selectedForDeletion.value.sort((a, b) => b - a)
    sortedIndices.forEach(index => {
      rules.value.splice(index, 1)
    })
    
    saveRulesToStorage()
    isDeleteMode.value = false
    selectedForDeletion.value = []
  }
}

function saveRulesToStorage() {
  localStorage.setItem('xauusd_rules', JSON.stringify(rules.value))
}

function loadRulesFromStorage(): Rule[] {
  const stored = localStorage.getItem('xauusd_rules')
  return stored ? JSON.parse(stored) : []
}
</script>

<style scoped>
textarea {
  font-family: inherit;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.button-group {
  display: flex;
  gap: 8px;
  align-items: center;
}

.btn-floating {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--color-gold);
  color: #0f1419;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.btn-floating:hover {
  background-color: var(--color-gold-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(212, 175, 55, 0.4);
}

.btn-floating:active {
  transform: translateY(0);
}

.btn-delete-floating {
  background-color: var(--color-gold);
  font-size: 16px;
}

.btn-confirm-delete {
  background-color: var(--color-green);
  color: white;
}

.btn-confirm-delete:hover {
  background-color: var(--color-green-light);
}

.btn-cancel-delete {
  background-color: var(--color-red);
  color: white;
}

.btn-cancel-delete:hover {
  background-color: var(--color-red-light);
}

/* 守則卡片網格佈局 */
.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.rule-card {
  background-color: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.rule-card:hover {
  background-color: var(--color-bg-tertiary);
  border-color: var(--color-gold);
}

.rule-card.delete-selected {
  border: 3px solid var(--color-red);
  background-color: rgba(239, 68, 68, 0.1);
}

.rule-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.rule-priority {
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
}

.rule-priority.priority-高 {
  background-color: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.rule-priority.priority-中 {
  background-color: rgba(212, 175, 55, 0.2);
  color: var(--color-gold);
}

.rule-priority.priority-低 {
  background-color: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.delete-checkbox {
  display: flex;
  align-items: center;
}

.delete-checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.rule-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.rule-text {
  font-size: 14px;
  color: var(--color-text-primary);
  line-height: 1.6;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
}

/* 彈窗樣式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: var(--color-bg-primary);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--color-border);
}

.modal-header h2 {
  margin: 0;
  font-size: 18px;
  color: var(--color-text-primary);
}

.modal-close {
  background: none;
  border: none;
  font-size: 28px;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: var(--color-text-primary);
}

.modal-body {
  padding: 16px;
}

.modal-footer {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-top: 1px solid var(--color-border);
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .modal {
    width: 95%;
  }

  .rules-grid {
    grid-template-columns: 1fr;
  }

  .button-group {
    gap: 6px;
  }

  .btn-floating {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
}
</style>
