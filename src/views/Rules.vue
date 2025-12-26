<template>
  <div>
    <!-- 守則列表 -->
    <div class="card">
      <div class="card-title">交易守則</div>
      
      <div v-if="rules.length === 0" style="text-align: center; padding: 32px; color: var(--color-text-secondary);">
        <p style="font-size: 14px;">還沒有守則，點擊下方按鈕新增</p>
      </div>

      <div v-for="(rule, index) in rules" :key="index" class="data-row" style="flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div style="flex: 1;">
            <span class="data-label">規則 #{{ index + 1 }}</span>
            <p style="font-size: 14px; margin-top: 6px; color: var(--color-text-primary);">{{ rule.content }}</p>
          </div>
          <button class="btn btn-danger" @click="removeRule(index)" style="margin-left: 12px;">刪除</button>
        </div>
        <div style="margin-top: 8px;">
          <span class="data-label">優先級</span>
          <span 
            class="data-value"
            :class="rule.priority === '高' ? 'negative' : rule.priority === '中' ? 'highlight' : 'positive'"
          >
            {{ rule.priority }}
          </span>
        </div>
      </div>
    </div>

    <!-- 新增守則 -->
    <div class="card">
      <div class="card-title">新增守則</div>

      <div class="form-group" style="margin-bottom: 12px;">
        <label>守則內容</label>
        <textarea 
          v-model="newRule.content"
          class="form-input"
          rows="3"
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

      <button class="btn btn-primary" @click="addRule">新增守則</button>
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

  newRule.value = {
    content: '',
    priority: '高'
  }
}

function removeRule(index: number) {
  rules.value.splice(index, 1)
  saveRulesToStorage()
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
</style>
