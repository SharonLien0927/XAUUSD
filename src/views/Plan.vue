<template>
  <div>
    <!-- 策略分析 -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">黃金策略分析</div>
        <div class="button-group">
          <button 
            v-if="!isDeleteMode" 
            class="btn-floating btn-delete-floating" 
            @click="toggleDeleteMode" 
            title="刪除策略"
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
          <button class="btn-floating btn-edit-floating" v-if="selectedStrategyIndex !== null && !isDeleteMode" @click="openEditModal" title="編輯策略">
            ✎
          </button>
          <button class="btn-floating btn-export-floating" v-if="!isDeleteMode" @click="toggleExportMode" title="輸出策略">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block;">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
          <button class="btn-floating" v-if="!isDeleteMode" @click="openModal">+</button>
        </div>
      </div>
      
      <div v-if="strategies.length === 0" style="text-align: center; padding: 32px; color: var(--color-text-secondary);">
        <p style="font-size: 14px;">還沒有策略，點擊右上角"+"新增</p>
      </div>

      <!-- 策略日期按鈕列表 -->
      <div v-if="strategies.length > 0" class="strategy-buttons">
        <button 
          v-for="(strategy, index) in strategies" 
          :key="index"
          class="strategy-button"
          :class="{ 
            active: selectedStrategyIndex === index && !isDeleteMode && !isExportMode,
            'delete-selected': isDeleteMode && selectedForDeletion.includes(index),
            'export-selected': isExportMode && selectedForExport.includes(index)
          }"
          @click="handleStrategyButtonClick(index)"
        >
          <template v-if="isExportMode">
            <input 
              type="checkbox" 
              :checked="selectedForExport.includes(index)"
              @change="toggleStrategyForExport(index)"
              @click.stop
              style="margin-right: 6px; width: 16px; height: 16px; cursor: pointer;"
            />
          </template>
          {{ strategy.date }}<br/>
          <span style="font-size: 12px;">{{ getWeekday(strategy.date) }}</span>
        </button>
      </div>

      <!-- 輸出確認按鈕 -->
      <div v-if="isExportMode && selectedForExport.length > 0" style="display: flex; gap: 8px; margin-bottom: 16px;">
        <button class="btn btn-primary" @click="exportStrategies">確認輸出 ({{ selectedForExport.length }})</button>
        <button class="btn btn-secondary" @click="cancelExport">取消</button>
      </div>

      <!-- 策略詳細內容 -->
      <div v-if="strategies.length > 0 && selectedStrategyIndex !== null" class="strategy-details">
        <div class="data-row" style="margin-bottom: 8px;">
          <div class="data-item">
            <span class="data-label">日期</span>
            <span class="data-value">{{ strategies[selectedStrategyIndex].date }} ({{ getWeekday(strategies[selectedStrategyIndex].date) }})</span>
          </div>
        </div>
        <div class="data-row" style="margin-bottom: 8px;">
          <div class="data-item">
            <span class="data-label">突破口高點</span>
            <span class="data-value">{{ strategies[selectedStrategyIndex].breakoutHigh }}</span>
          </div>
          <div class="data-item">
            <span class="data-label">突破口低點</span>
            <span class="data-value">{{ strategies[selectedStrategyIndex].breakoutLow }}</span>
          </div>
        </div>
        <div class="data-row" style="margin-bottom: 8px;">
          <div class="data-item">
            <span class="data-label">美盤回調</span>
            <span class="data-value">{{ strategies[selectedStrategyIndex].usRetrace }}</span>
          </div>
          <div class="data-item">
            <span class="data-label">點</span>
            <span class="data-value">{{ strategies[selectedStrategyIndex].points }}</span>
          </div>
        </div>
        <div class="data-row" style="margin-bottom: 8px;">
          <div class="data-item">
            <span class="data-label">模組</span>
            <span class="data-value">{{ strategies[selectedStrategyIndex].module }}</span>
          </div>
        </div>
        <div class="data-row">
          <div class="data-item" style="flex-direction: column; align-items: flex-start;">
            <span class="data-label">策略</span>
            <span class="data-value" style="white-space: pre-wrap; margin-top: 8px;">{{ strategies[selectedStrategyIndex].description }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 新增策略彈窗 -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h2>新增策略</h2>
          <button class="modal-close" @click="closeModal">×</button>
        </div>
        
        <div class="modal-body">
          <div class="form-group" style="margin-bottom: 12px;">
            <label>日期</label>
            <input 
              v-model="newStrategy.date"
              type="date"
              class="form-input"
            />
            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">
              {{ newStrategy.date ? `星期${getWeekday(newStrategy.date)}` : '請選擇日期' }}
            </div>
          </div>

          <div class="grid-2" style="margin-bottom: 12px;">
            <div class="form-group">
              <label>突破口高點</label>
              <input 
                v-model.number="newStrategy.breakoutHigh"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如：2700"
              />
            </div>
            <div class="form-group">
              <label>突破口低點</label>
              <input 
                v-model.number="newStrategy.breakoutLow"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如：2650"
              />
            </div>
          </div>

          <div class="grid-2" style="margin-bottom: 12px;">
            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label>美盤回調點</label>
                <div class="radio-group-inline">
                  <label class="radio-label">
                    <input 
                      v-model="newStrategy.usRetrace"
                      type="radio"
                      value="高"
                    />
                    <span>高</span>
                  </label>
                  <label class="radio-label">
                    <input 
                      v-model="newStrategy.usRetrace"
                      type="radio"
                      value="低"
                    />
                    <span>低</span>
                  </label>
                </div>
              </div>
              <input 
                v-model.number="newStrategy.points"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如：50"
              />
            </div>
            <div class="form-group">
              <label>模組</label>
              <input 
                v-model="newStrategy.module"
                type="text"
                class="form-input"
                placeholder="例如：模組A"
              />
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label>策略</label>
            <textarea 
              v-model="newStrategy.description"
              class="form-input"
              rows="5"
              placeholder="詳細說明策略內容..."
              style="resize: vertical;"
            ></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeModal">取消</button>
          <button class="btn btn-primary" @click="addStrategy">新增策略</button>
        </div>
      </div>
    </div>

    <!-- 編輯策略彈窗 -->
    <div v-if="showEditModal" class="modal-overlay" @click="closeEditModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h2>編輯策略</h2>
          <button class="modal-close" @click="closeEditModal">×</button>
        </div>
        
        <div class="modal-body">
          <div class="form-group" style="margin-bottom: 12px;">
            <label>日期</label>
            <input 
              v-model="editStrategy.date"
              type="date"
              class="form-input"
            />
            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">
              {{ editStrategy.date ? `星期${getWeekday(editStrategy.date)}` : '請選擇日期' }}
            </div>
          </div>

          <div class="grid-2" style="margin-bottom: 12px;">
            <div class="form-group">
              <label>突破口高點</label>
              <input 
                v-model.number="editStrategy.breakoutHigh"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如：2700"
              />
            </div>
            <div class="form-group">
              <label>突破口低點</label>
              <input 
                v-model.number="editStrategy.breakoutLow"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如：2650"
              />
            </div>
          </div>

          <div class="grid-2" style="margin-bottom: 12px;">
            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label>美盤回調點</label>
                <div class="radio-group-inline">
                  <label class="radio-label">
                    <input 
                      v-model="editStrategy.usRetrace"
                      type="radio"
                      value="高"
                    />
                    <span>高</span>
                  </label>
                  <label class="radio-label">
                    <input 
                      v-model="editStrategy.usRetrace"
                      type="radio"
                      value="低"
                    />
                    <span>低</span>
                  </label>
                </div>
              </div>
              <input 
                v-model.number="editStrategy.points"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如：50"
              />
            </div>
            <div class="form-group">
              <label>模組</label>
              <input 
                v-model="editStrategy.module"
                type="text"
                class="form-input"
                placeholder="例如：模組A"
              />
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label>策略</label>
            <textarea 
              v-model="editStrategy.description"
              class="form-input"
              rows="5"
              placeholder="詳細說明策略內容..."
              style="resize: vertical;"
            ></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeEditModal">取消</button>
          <button class="btn btn-primary" @click="updateStrategy">保存修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Strategy {
  date: string
  breakoutHigh: number
  breakoutLow: number
  usRetrace: string
  points: number
  module: string
  description: string
  createdAt: string
}

const strategies = ref<Strategy[]>(loadStrategiesFromStorage())
const selectedStrategyIndex = ref<number | null>(null)
const showModal = ref(false)
const showEditModal = ref(false)
const isDeleteMode = ref(false)
const selectedForDeletion = ref<number[]>([])
const isExportMode = ref(false)
const selectedForExport = ref<number[]>([])

const newStrategy = ref({
  date: new Date().toISOString().split('T')[0],
  breakoutHigh: 0,
  breakoutLow: 0,
  usRetrace: '高',
  points: 0,
  module: '',
  description: ''
})

const editStrategy = ref({
  date: '',
  breakoutHigh: 0,
  breakoutLow: 0,
  usRetrace: '高',
  points: 0,
  module: '',
  description: ''
})

function getWeekday(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  return weekdays[date.getDay()]
}

function openModal() {
  newStrategy.value = {
    date: new Date().toISOString().split('T')[0],
    breakoutHigh: 0,
    breakoutLow: 0,
    usRetrace: '高',
    points: 0,
    module: '',
    description: ''
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function addStrategy() {
  if (!newStrategy.value.date) {
    alert('請選擇日期')
    return
  }

  const strategy: Strategy = {
    ...newStrategy.value,
    createdAt: new Date().toISOString()
  }

  strategies.value.push(strategy)
  saveStrategiesFromStorage()
  closeModal()
  selectedStrategyIndex.value = strategies.value.length - 1
}

function removeStrategy() {
  // 已廢棄，使用新的刪除模式
}

function toggleDeleteMode() {
  isDeleteMode.value = !isDeleteMode.value
  selectedForDeletion.value = []
}

function cancelDelete() {
  isDeleteMode.value = false
  selectedForDeletion.value = []
}

function toggleStrategyForDeletion(index: number) {
  if (selectedForDeletion.value.includes(index)) {
    selectedForDeletion.value = selectedForDeletion.value.filter(i => i !== index)
  } else {
    selectedForDeletion.value.push(index)
  }
}

function confirmDelete() {
  if (selectedForDeletion.value.length === 0) return
  
  if (confirm(`確定要刪除選中的 ${selectedForDeletion.value.length} 個策略嗎？`)) {
    // 從大到小排序，避免刪除時索引變亂
    const sortedIndices = selectedForDeletion.value.sort((a, b) => b - a)
    sortedIndices.forEach(index => {
      strategies.value.splice(index, 1)
    })
    
    saveStrategiesFromStorage()
    isDeleteMode.value = false
    selectedForDeletion.value = []
    selectedStrategyIndex.value = null
  }
}

function toggleExportMode() {
  isExportMode.value = !isExportMode.value
  selectedForExport.value = []
}

function toggleStrategyForExport(index: number) {
  if (selectedForExport.value.includes(index)) {
    selectedForExport.value = selectedForExport.value.filter(i => i !== index)
  } else {
    selectedForExport.value.push(index)
  }
}

function cancelExport() {
  isExportMode.value = false
  selectedForExport.value = []
}

function handleStrategyButtonClick(index: number) {
  if (isDeleteMode.value) {
    toggleStrategyForDeletion(index)
  } else if (isExportMode.value) {
    // Export mode: handled by checkbox
  } else {
    selectedStrategyIndex.value = index
  }
}

function exportStrategies() {
  if (selectedForExport.value.length === 0) return
  
  const selectedStrategies = selectedForExport.value.map(i => strategies.value[i])
  const htmlContent = generateHTML(selectedStrategies)
  
  // 創建 blob 並下載
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `XAUUSD_策略_${new Date().toISOString().split('T')[0]}.html`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  isExportMode.value = false
  selectedForExport.value = []
}

function generateHTML(strategies: Strategy[]): string {
  const styleCSS = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
      background-color: #0f1419;
      color: #e8eef7;
      padding: 20px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #d4af37;
      font-size: 32px;
    }
    
    .strategy-card {
      background-color: #1a1f26;
      border: 1px solid #2d3748;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      page-break-inside: avoid;
    }
    
    .strategy-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #d4af37;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    
    .strategy-date {
      font-size: 18px;
      font-weight: bold;
      color: #d4af37;
    }
    
    .strategy-weekday {
      color: #a0a9b8;
      font-size: 14px;
    }
    
    .strategy-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .strategy-field {
      display: flex;
      flex-direction: column;
    }
    
    .strategy-label {
      font-size: 12px;
      color: #a0a9b8;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    
    .strategy-value {
      font-size: 16px;
      font-weight: 600;
      color: #e8eef7;
    }
    
    .strategy-description {
      grid-column: 1 / -1;
      background-color: #252d36;
      padding: 12px;
      border-radius: 8px;
      border-left: 3px solid #d4af37;
    }
    
    .strategy-description-label {
      font-size: 12px;
      color: #a0a9b8;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    
    .strategy-description-text {
      white-space: pre-wrap;
      line-height: 1.6;
      color: #e8eef7;
    }
    
    .export-date {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #2d3748;
      color: #a0a9b8;
      font-size: 12px;
    }
    
    @media print {
      body {
        background-color: #fff;
        color: #000;
      }
      
      .strategy-card {
        background-color: #fff;
        border: 1px solid #ccc;
      }
      
      .strategy-header {
        border-bottom: 2px solid #000;
      }
      
      .strategy-date {
        color: #000;
      }
      
      h1 {
        color: #000;
      }
    }
  `
  
  let strategiesHTML = ''
  strategies.forEach(s => {
    strategiesHTML += `
      <div class="strategy-card">
        <div class="strategy-header">
          <div>
            <div class="strategy-date">${s.date}</div>
            <div class="strategy-weekday">星期${getWeekday(s.date)}</div>
          </div>
        </div>
        
        <div class="strategy-content">
          <div class="strategy-field">
            <span class="strategy-label">突破口高點</span>
            <span class="strategy-value">${s.breakoutHigh.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">突破口低點</span>
            <span class="strategy-value">${s.breakoutLow.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">美盤回調點</span>
            <span class="strategy-value">${s.points.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">美盤回調</span>
            <span class="strategy-value">${s.usRetrace}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">模組</span>
            <span class="strategy-value">${s.module || '—'}</span>
          </div>
          <div class="strategy-field"></div>
          
          <div class="strategy-description">
            <div class="strategy-description-label">策略說明</div>
            <div class="strategy-description-text">${s.description || '無'}</div>
          </div>
        </div>
      </div>
    `
  })
  
  return `
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>XAUUSD 黃金策略分析</title>
      <style>${styleCSS}</style>
    </head>
    <body>
      <div class="container">
        <h1>🏆 XAUUSD 黃金策略分析</h1>
        ${strategiesHTML}
        <div class="export-date">生成時間：${new Date().toLocaleString('zh-TW')}</div>
      </div>
    </body>
    </html>
  `
}function saveStrategiesFromStorage() {
  localStorage.setItem('xauusd_strategies', JSON.stringify(strategies.value))
}

function loadStrategiesFromStorage(): Strategy[] {
  const stored = localStorage.getItem('xauusd_strategies')
  return stored ? JSON.parse(stored) : []
}

function openEditModal() {
  if (selectedStrategyIndex.value === null) return
  const strategy = strategies.value[selectedStrategyIndex.value]
  editStrategy.value = {
    date: strategy.date,
    breakoutHigh: strategy.breakoutHigh,
    breakoutLow: strategy.breakoutLow,
    usRetrace: strategy.usRetrace,
    points: strategy.points,
    module: strategy.module,
    description: strategy.description
  }
  showEditModal.value = true
}

function closeEditModal() {
  showEditModal.value = false
}

function updateStrategy() {
  if (selectedStrategyIndex.value === null) return
  if (!editStrategy.value.date) {
    alert('請選擇日期')
    return
  }

  strategies.value[selectedStrategyIndex.value] = {
    ...editStrategy.value,
    createdAt: strategies.value[selectedStrategyIndex.value].createdAt
  }
  
  saveStrategiesFromStorage()
  closeEditModal()
}
</script>

<style scoped>
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

.btn-delete-floating,
.btn-edit-floating {
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

.strategy-button.delete-selected {
  border: 3px solid var(--color-red);
  background-color: rgba(239, 68, 68, 0.1);
}

.strategy-button.export-selected {
  border: 3px solid var(--color-gold);
  background-color: rgba(212, 175, 55, 0.1);
}

.btn-export-floating {
  background-color: var(--color-gold);
  font-size: 18px;
}

.strategy-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.strategy-button {
  padding: 8px 12px;
  background-color: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
  line-height: 1.4;
}

.strategy-button:hover {
  background-color: var(--color-bg-tertiary);
}

.strategy-button.active {
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%);
  border-color: var(--color-gold);
  color: #0f1419;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.strategy-details {
  background-color: var(--color-bg-secondary);
  padding: 16px;
  border-radius: 8px;
  margin-top: 12px;
}

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

.radio-group {
  display: flex;
  gap: 16px;
}

.radio-group-inline {
  display: flex;
  gap: 12px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: var(--color-text-primary);
}

.radio-label input[type="radio"] {
  cursor: pointer;
  width: 16px;
  height: 16px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 768px) {
  .modal {
    width: 95%;
  }

  .grid-2 {
    grid-template-columns: 1fr;
  }

  .strategy-buttons {
    gap: 6px;
  }

  .strategy-button {
    padding: 6px 10px;
    font-size: 11px;
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
