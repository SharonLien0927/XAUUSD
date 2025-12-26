<template>
  <div>
    <!-- 紀錄列表 -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">交易紀錄</div>
        <div class="button-group">
          <button 
            v-if="!isDeleteMode" 
            class="btn-floating btn-delete-floating" 
            @click="toggleDeleteMode" 
            title="刪除紀錄"
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
          <button class="btn-floating btn-edit-floating" v-if="selectedRecordIndex !== null && !isDeleteMode && !isExportMode" @click="openEditModal" title="編輯紀錄">
            ✎
          </button>
          <button class="btn-floating btn-export-floating" v-if="!isDeleteMode" @click="toggleExportMode" title="下載紀錄">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block;">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
          <button class="btn-floating" v-if="!isDeleteMode && !isExportMode" @click="openModal">+</button>
        </div>
      </div>
      
      <div v-if="records.length === 0" style="text-align: center; padding: 32px; color: var(--color-text-secondary);">
        <p style="font-size: 14px;">還沒有交易紀錄，點擊右上角"+"新增</p>
      </div>

      <!-- 紀錄日期按鈕列表 -->
      <div v-if="records.length > 0" class="record-buttons">
        <button 
          v-for="(record, index) in filteredRecords" 
          :key="index"
          class="record-button"
          :class="{ 
            active: selectedRecordIndex === records.indexOf(record) && !isDeleteMode,
            'delete-selected': isDeleteMode && selectedForDeletion.includes(records.indexOf(record))
          }"
          @click="isDeleteMode ? toggleRecordForDeletion(records.indexOf(record)) : selectedRecordIndex = records.indexOf(record)"
        >
          {{ formatDateTime(record.timestamp) }}<br/>
          <span style="font-size: 11px;">{{ record.type }}</span>
        </button>
      </div>

      <!-- 紀錄詳細內容 -->
      <div v-if="records.length > 0 && selectedRecordIndex !== null" class="record-details">
        <div class="data-row" style="margin-bottom: 8px;">
          <div class="data-item">
            <span class="data-label">日期時間</span>
            <span class="data-value">{{ formatDateTime(records[selectedRecordIndex].timestamp) }}</span>
          </div>
        </div>
        <div class="data-row" style="margin-bottom: 8px;">
          <div class="data-item">
            <span class="data-label">交易類型</span>
            <span class="data-value" :class="records[selectedRecordIndex].type.includes('Buy') ? 'positive' : 'negative'">
              {{ records[selectedRecordIndex].type }}
            </span>
          </div>
          <div class="data-item">
            <span class="data-label">價格</span>
            <span class="data-value highlight">{{ records[selectedRecordIndex].price.toFixed(2) }}</span>
          </div>
        </div>
        <div class="data-row" style="margin-bottom: 8px;">
          <div class="data-item">
            <span class="data-label">手數</span>
            <span class="data-value">{{ records[selectedRecordIndex].quantity }}</span>
          </div>
          <div class="data-item">
            <span class="data-label">損益</span>
            <span class="data-value" :class="parseFloat(records[selectedRecordIndex].profitLoss) >= 0 ? 'positive' : 'negative'">
              {{ parseFloat(records[selectedRecordIndex].profitLoss).toFixed(2) }} USD
            </span>
          </div>
        </div>
        <div class="data-row" v-if="records[selectedRecordIndex].notes">
          <div class="data-item" style="flex-direction: column; align-items: flex-start;">
            <span class="data-label">備註</span>
            <span class="data-value" style="white-space: pre-wrap; margin-top: 8px;">{{ records[selectedRecordIndex].notes }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 新增紀錄彈窗 -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h2>新增交易紀錄</h2>
          <button class="modal-close" @click="closeModal">×</button>
        </div>
        
        <div class="modal-body">
          <div class="grid-2" style="margin-bottom: 12px;">
            <div class="form-group">
              <label>日期時間</label>
              <input 
                v-model="newRecord.timestamp"
                type="datetime-local"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>交易類型</label>
              <select v-model="newRecord.type" class="form-select">
                <option value="空單 Sell Limit">空單 Sell Limit</option>
                <option value="多單 Buy Limit">多單 Buy Limit</option>
              </select>
            </div>
          </div>

          <div class="grid-2" style="margin-bottom: 12px;">
            <div class="form-group">
              <label>價格</label>
              <input 
                v-model.number="newRecord.price"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如 4200.50"
              />
            </div>
            <div class="form-group">
              <label>手數</label>
              <input 
                v-model.number="newRecord.quantity"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如 0.01"
              />
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label>損益 (USD)</label>
            <input 
              v-model.number="newRecord.profitLoss"
              type="number"
              step="0.01"
              class="form-input"
              placeholder="例如 50.00 或 -10.00"
            />
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label>備註</label>
            <textarea 
              v-model="newRecord.notes"
              class="form-input"
              rows="3"
              placeholder="記錄交易詳情、策略等..."
              style="resize: vertical;"
            ></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeModal">取消</button>
          <button class="btn btn-primary" @click="addRecord">新增紀錄</button>
        </div>
      </div>
    </div>

    <!-- 編輯紀錄彈窗 -->
    <div v-if="showEditModal" class="modal-overlay" @click="closeEditModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h2>編輯交易紀錄</h2>
          <button class="modal-close" @click="closeEditModal">×</button>
        </div>
        
        <div class="modal-body">
          <div class="grid-2" style="margin-bottom: 12px;">
            <div class="form-group">
              <label>日期時間</label>
              <input 
                v-model="editRecord.timestamp"
                type="datetime-local"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>交易類型</label>
              <select v-model="editRecord.type" class="form-select">
                <option value="空單 Sell Limit">空單 Sell Limit</option>
                <option value="多單 Buy Limit">多單 Buy Limit</option>
              </select>
            </div>
          </div>

          <div class="grid-2" style="margin-bottom: 12px;">
            <div class="form-group">
              <label>價格</label>
              <input 
                v-model.number="editRecord.price"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如 4200.50"
              />
            </div>
            <div class="form-group">
              <label>手數</label>
              <input 
                v-model.number="editRecord.quantity"
                type="number"
                step="0.01"
                class="form-input"
                placeholder="例如 0.01"
              />
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label>損益 (USD)</label>
            <input 
              v-model.number="editRecord.profitLoss"
              type="number"
              step="0.01"
              class="form-input"
              placeholder="例如 50.00 或 -10.00"
            />
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label>備註</label>
            <textarea 
              v-model="editRecord.notes"
              class="form-input"
              rows="3"
              placeholder="記錄交易詳情、策略等..."
              style="resize: vertical;"
            ></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeEditModal">取消</button>
          <button class="btn btn-primary" @click="updateRecord">保存修改</button>
        </div>
      </div>
    </div>

    <!-- 統計摘要 -->
    <div class="card" v-if="records.length > 0">
      <div class="card-title">交易統計</div>
      
      <!-- 月份篩選按鈕 -->
      <div class="month-buttons" style="margin-bottom: 16px;">
        <button 
          class="month-button"
          :class="{ active: selectedMonth === null }"
          @click="selectedMonth = null"
        >
          全部
        </button>
        <button 
          v-for="month in allMonths"
          :key="month"
          class="month-button"
          :class="{ active: selectedMonth === month }"
          @click="selectedMonth = month"
        >
          {{ month }}
        </button>
      </div>

      <!-- 導出模式提示 -->
      <div v-if="isExportMode && filteredRecords.length > 0" style="display: flex; gap: 8px; margin-bottom: 16px; align-items: center;">
        <span style="color: var(--color-text-secondary); font-size: 14px;">已選擇 {{ filteredRecords.length }} 筆紀錄</span>
        <button class="btn btn-primary" @click="exportRecords" style="flex: 1;">
          下載為 HTML
        </button>
        <button class="btn btn-secondary" @click="cancelExport">
          取消
        </button>
      </div>
      
      <div class="grid-3">
        <div class="data-row">
          <div class="data-item">
            <span class="data-label">總交易筆數</span>
            <span class="data-value highlight">{{ filteredRecords.length }}</span>
          </div>
        </div>
        <div class="data-row">
          <div class="data-item">
            <span class="data-label">總損益</span>
            <span class="data-value" :class="filteredTotalProfitLoss >= 0 ? 'positive' : 'negative'">
              {{ filteredTotalProfitLoss.toFixed(2) }} USD
            </span>
          </div>
        </div>
        <div class="data-row">
          <div class="data-item">
            <span class="data-label">勝率</span>
            <span class="data-value highlight">{{ filteredWinRate.toFixed(1) }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Record {
  timestamp: string
  type: string
  price: number
  quantity: number
  profitLoss: string
  notes: string
}

const records = ref<Record[]>(loadRecordsFromStorage())
const selectedRecordIndex = ref<number | null>(null)
const selectedMonth = ref<string | null>(null)
const showModal = ref(false)
const showEditModal = ref(false)
const isDeleteMode = ref(false)
const isExportMode = ref(false)
const selectedForDeletion = ref<number[]>([])

const newRecord = ref({
  timestamp: new Date().toISOString().slice(0, 16),
  type: '空單 Sell Limit',
  price: 0,
  quantity: 0,
  profitLoss: 0,
  notes: ''
})

const editRecord = ref({
  timestamp: '',
  type: '',
  price: 0,
  quantity: 0,
  profitLoss: 0,
  notes: ''
})

const totalProfitLoss = computed(() => {
  return records.value.reduce((sum, record) => sum + parseFloat(record.profitLoss), 0)
})

const winRate = computed(() => {
  if (records.value.length === 0) return 0
  const wins = records.value.filter(r => parseFloat(r.profitLoss) > 0).length
  return (wins / records.value.length) * 100
})

const recordMonths = computed(() => {
  if (records.value.length === 0) return ''
  const months = new Set<string>()
  records.value.forEach(r => {
    const date = new Date(r.timestamp)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    months.add(`${year}年${month}月`)
  })
  return Array.from(months).reverse().join(', ')
})

const allMonths = computed(() => {
  const months = new Set<string>()
  records.value.forEach(r => {
    const date = new Date(r.timestamp)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    months.add(`${year}年${month}月`)
  })
  return Array.from(months).reverse()
})

const filteredRecords = computed(() => {
  if (!selectedMonth.value) return records.value
  return records.value.filter(r => {
    const date = new Date(r.timestamp)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    return `${year}年${month}月` === selectedMonth.value
  })
})

const filteredTotalProfitLoss = computed(() => {
  return filteredRecords.value.reduce((sum, record) => sum + parseFloat(record.profitLoss), 0)
})

const filteredWinRate = computed(() => {
  if (filteredRecords.value.length === 0) return 0
  const wins = filteredRecords.value.filter(r => parseFloat(r.profitLoss) > 0).length
  return (wins / filteredRecords.value.length) * 100
})

function openModal() {
  newRecord.value = {
    timestamp: new Date().toISOString().slice(0, 16),
    type: '空單 Sell Limit',
    price: 0,
    quantity: 0,
    profitLoss: 0,
    notes: ''
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function addRecord() {
  if (!newRecord.value.price || !newRecord.value.quantity) {
    alert('請填寫價格和手數')
    return
  }

  const record: Record = {
    timestamp: newRecord.value.timestamp,
    type: newRecord.value.type,
    price: newRecord.value.price,
    quantity: newRecord.value.quantity,
    profitLoss: newRecord.value.profitLoss.toString(),
    notes: newRecord.value.notes
  }

  records.value.push(record)
  saveRecordsToStorage()
  closeModal()
  selectedRecordIndex.value = records.value.length - 1
}

function toggleDeleteMode() {
  isDeleteMode.value = !isDeleteMode.value
  selectedForDeletion.value = []
}

function cancelDelete() {
  isDeleteMode.value = false
  selectedForDeletion.value = []
}

function toggleRecordForDeletion(index: number) {
  if (selectedForDeletion.value.includes(index)) {
    selectedForDeletion.value = selectedForDeletion.value.filter(i => i !== index)
  } else {
    selectedForDeletion.value.push(index)
  }
}

function confirmDelete() {
  if (selectedForDeletion.value.length === 0) return
  
  if (confirm(`確定要刪除選中的 ${selectedForDeletion.value.length} 筆紀錄嗎？`)) {
    const sortedIndices = selectedForDeletion.value.sort((a, b) => b - a)
    sortedIndices.forEach(index => {
      records.value.splice(index, 1)
    })
    
    saveRecordsToStorage()
    isDeleteMode.value = false
    selectedForDeletion.value = []
    selectedRecordIndex.value = null
  }
}

function openEditModal() {
  if (selectedRecordIndex.value === null) return
  const record = records.value[selectedRecordIndex.value]
  editRecord.value = {
    timestamp: record.timestamp,
    type: record.type,
    price: record.price,
    quantity: record.quantity,
    profitLoss: parseFloat(record.profitLoss),
    notes: record.notes
  }
  showEditModal.value = true
}

function closeEditModal() {
  showEditModal.value = false
}

function updateRecord() {
  if (selectedRecordIndex.value === null) return
  if (!editRecord.value.price || !editRecord.value.quantity) {
    alert('請填寫價格和手數')
    return
  }

  records.value[selectedRecordIndex.value] = {
    timestamp: editRecord.value.timestamp,
    type: editRecord.value.type,
    price: editRecord.value.price,
    quantity: editRecord.value.quantity,
    profitLoss: editRecord.value.profitLoss.toString(),
    notes: editRecord.value.notes
  }
  
  saveRecordsToStorage()
  closeEditModal()
}

function formatDateTime(dateTimeString: string): string {
  try {
    const date = new Date(dateTimeString)
    return date.toLocaleString('zh-TW', { 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    return dateTimeString
  }
}

function toggleExportMode() {
  isExportMode.value = !isExportMode.value
}

function cancelExport() {
  isExportMode.value = false
}

function exportRecords() {
  if (filteredRecords.value.length === 0) return
  
  const htmlContent = generateRecordsHTML(filteredRecords.value)
  
  // 創建 blob 並下載
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `XAUUSD_交易紀錄_${new Date().toISOString().split('T')[0]}.html`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  isExportMode.value = false
}

function generateRecordsHTML(recordsToExport: Record[]): string {
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
    
    .summary {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 30px;
      background-color: #1a1f26;
      padding: 16px;
      border-radius: 12px;
    }
    
    .summary-item {
      display: flex;
      flex-direction: column;
    }
    
    .summary-label {
      font-size: 12px;
      color: #a0a9b8;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    
    .summary-value {
      font-size: 20px;
      font-weight: bold;
      color: #d4af37;
    }
    
    .summary-value.positive {
      color: #60a5fa;
    }
    
    .summary-value.negative {
      color: #f87171;
    }
    
    .record-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      background-color: #1a1f26;
      border-radius: 12px;
      overflow: hidden;
    }
    
    .record-table th {
      background-color: #252d36;
      color: #d4af37;
      padding: 12px;
      text-align: left;
      font-size: 14px;
      font-weight: 600;
      border-bottom: 2px solid #d4af37;
    }
    
    .record-table td {
      padding: 12px;
      border-bottom: 1px solid #2d3748;
      color: #e8eef7;
    }
    
    .record-table tr:last-child td {
      border-bottom: none;
    }
    
    .record-table .type-cell {
      font-weight: 600;
    }
    
    .type-buy {
      color: #60a5fa;
    }
    
    .type-sell {
      color: #f87171;
    }
    
    .profit-positive {
      color: #60a5fa;
      font-weight: 600;
    }
    
    .profit-negative {
      color: #f87171;
      font-weight: 600;
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
      
      .container {
        background-color: #fff;
      }
      
      .summary {
        background-color: #f5f5f5;
      }
      
      h1 {
        color: #000;
      }
      
      .summary-label {
        color: #666;
      }
      
      .summary-value {
        color: #000;
      }
      
      .summary-value.positive {
        color: #0066cc;
      }
      
      .summary-value.negative {
        color: #cc0000;
      }
      
      .record-table {
        background-color: #fff;
      }
      
      .record-table th {
        background-color: #e0e0e0;
        color: #000;
        border-bottom: 2px solid #000;
      }
      
      .record-table td {
        border-bottom: 1px solid #ccc;
        color: #000;
      }
      
      .type-buy {
        color: #0066cc;
      }
      
      .type-sell {
        color: #cc0000;
      }
      
      .profit-positive {
        color: #0066cc;
      }
      
      .profit-negative {
        color: #cc0000;
      }
    }
  `
  
  const totalProfit = recordsToExport.reduce((sum, r) => sum + parseFloat(r.profitLoss), 0)
  const wins = recordsToExport.filter(r => parseFloat(r.profitLoss) > 0).length
  const winRate = recordsToExport.length > 0 ? (wins / recordsToExport.length * 100) : 0
  
  let recordsTableHTML = '<table class="record-table"><thead><tr><th>日期時間</th><th>交易類型</th><th>價格</th><th>手數</th><th>損益 (USD)</th><th>備註</th></tr></thead><tbody>'
  
  recordsToExport.forEach(record => {
    const profitValue = parseFloat(record.profitLoss)
    const profitClass = profitValue >= 0 ? 'profit-positive' : 'profit-negative'
    const typeClass = record.type.includes('Buy') ? 'type-buy' : 'type-sell'
    recordsTableHTML += `<tr>
      <td>${formatDateTime(record.timestamp)}</td>
      <td><span class="type-cell ${typeClass}">${record.type}</span></td>
      <td>${record.price.toFixed(2)}</td>
      <td>${record.quantity}</td>
      <td><span class="${profitClass}">${profitValue.toFixed(2)}</span></td>
      <td>${record.notes || '-'}</td>
    </tr>`
  })
  
  recordsTableHTML += '</tbody></table>'
  
  const summaryValueClass = totalProfit >= 0 ? 'positive' : 'negative'
  
  const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>XAUUSD 交易紀錄</title>
  <style>
    ${styleCSS}
  </style>
</head>
<body>
  <div class="container">
    <h1>🏆 XAUUSD 交易紀錄</h1>
    
    <div class="summary">
      <div class="summary-item">
        <div class="summary-label">總交易筆數</div>
        <div class="summary-value">${recordsToExport.length}</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">總損益</div>
        <div class="summary-value ${summaryValueClass}">${totalProfit.toFixed(2)} USD</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">勝率</div>
        <div class="summary-value">${winRate.toFixed(1)}%</div>
      </div>
    </div>
    
    ${recordsTableHTML}
    
    <div class="export-date">
      導出於 ${new Date().toLocaleString('zh-TW')}
    </div>
  </div>
</body>
</html>`
  
  return html
}

function saveRecordsToStorage() {
  localStorage.setItem('xauusd_records', JSON.stringify(records.value))
}

function loadRecordsFromStorage(): Record[] {
  const stored = localStorage.getItem('xauusd_records')
  return stored ? JSON.parse(stored) : []
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

.record-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
  background-color: var(--color-bg-tertiary);
  border-radius: 8px;
}

.record-button {
  padding: 8px 12px;
  background-color: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 11px;
  transition: all 0.3s ease;
  line-height: 1.4;
  white-space: nowrap;
}

.record-button:hover {
  background-color: var(--color-bg-secondary);
}

.record-button.active {
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%);
  border-color: var(--color-gold);
  color: #0f1419;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.record-button.delete-selected {
  border: 3px solid var(--color-red);
  background-color: rgba(239, 68, 68, 0.1);
}

.record-details {
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

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-bottom: 6px;
  font-weight: 500;
}

.form-input,
.form-select {
  padding: 8px 12px;
  background-color: var(--color-bg-input);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-primary);
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--color-gold);
  background-color: var(--color-bg-tertiary);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-select {
  cursor: pointer;
}

.data-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.data-row:last-child {
  border-bottom: none;
}

.data-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.data-label {
  font-size: 11px;
  color: var(--color-text-secondary);
  margin-bottom: 4px;
  text-transform: uppercase;
  font-weight: 500;
}

.data-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.data-value.highlight {
  color: var(--color-gold);
  font-weight: 700;
}

.data-value.positive {
  color: var(--color-green);
}

.data-value.negative {
  color: var(--color-red);
}

.btn {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%);
  color: #0f1419;
}

.btn-primary:hover {
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  background-color: var(--color-bg-secondary);
}

textarea {
  font-family: inherit;
}

@media (max-width: 768px) {
  .modal {
    width: 95%;
  }

  .grid-2,
  .grid-3 {
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

  .record-buttons {
    max-height: 150px;
  }
}
</style>

