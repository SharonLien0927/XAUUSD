<template>
  <div>
    <!-- 五日平均波幅 -->
    <div class="card">
      <div class="card-title">五日平均波幅</div>
      
      <!-- 五天的波幅輸入 -->
      <div class="volatility-row-header">
        <div class="vol-header-date">日期</div>
        <div class="vol-header-item">最高點</div>
        <div class="vol-header-item">最低點</div>
      </div>
      <div v-for="(day, index) in getFilteredVolatilities()" :key="index" class="volatility-row">
        <div class="vol-item-date">
          <input 
            v-model="day.date"
            type="date"
            class="form-input date-input"
            @change="volatilityStore.updateDate(index, day.date)"
          />
          <div class="weekday-display">{{ getWeekday(day.date) }}</div>
        </div>
        <div class="vol-item">
          <input 
            v-model.number="day.highPoint"
            type="number"
            step="0.01"
            class="form-input"
            @input="volatilityStore.updateVolatility(volatilityStore.dailyVolatilities.indexOf(day), day.highPoint, day.lowPoint)"
            placeholder="0"
          />
        </div>
        <div class="vol-item">
          <input 
            v-model.number="day.lowPoint"
            type="number"
            step="0.01"
            class="form-input"
            @input="volatilityStore.updateVolatility(volatilityStore.dailyVolatilities.indexOf(day), day.highPoint, day.lowPoint)"
            placeholder="0"
          />
        </div>
      </div>

      <!-- 平均波幅統計行 -->
      <div class="data-row highlight">
        <div class="data-item">
          <span class="data-label">五日平均波幅</span>
          <span class="data-value highlight">
            {{ volatilityStore.averageVolatility.toFixed(2) }}
          </span>
        </div>
        <div class="data-item">
          <span class="data-label">成本&領域範圍 (10%)</span>
          <span class="data-value highlight">
            {{ volatilityStore.costRange.toFixed(2) }}
          </span>
        </div>
      </div>
    </div>

    <!-- 掛單範圍 -->
    <div class="card">
      <div class="card-title">掛單範圍</div>

      <!-- 突破口和成本設置 -->
      <div class="grid-3">
        <div class="form-group">
          <label>突破口高點(or 美盤回調高點)</label>
          <input 
            v-model.number="volatilityStore.breakoutHigh"
            type="number"
            step="0.01"
            class="form-input"
            placeholder="輸入價格"
          />
        </div>
        <div class="form-group">
          <label>突破口低點(or 美盤回調低點)</label>
          <input 
            v-model.number="volatilityStore.breakoutLow"
            type="number"
            step="0.01"
            class="form-input"
            placeholder="輸入價格"
          />
        </div>
        <div class="form-group">
          <label>成本&領域範圍</label>
          <input 
            v-model.number="sellLimit.costDisplay"
            type="number"
            step="0.01"
            class="form-input"
            placeholder="自動計算或手動輸入"
          />
        </div>
      </div>

      <!-- 模組設置 -->
      <div class="form-group" style="margin-top: 12px;">
        <label>套用模組</label>
        <input 
          v-model="volatilityStore.moduleTemplate"
          type="text"
          class="form-input"
          placeholder="輸入模組名稱"
        />
      </div>

      <!-- Sell Limit 設置 -->
      <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-border);">
        <div class="data-label" style="margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">
          Sell Limit 配置
        </div>

        <div class="grid-3" style="margin-bottom: 12px;">
          <div class="form-group">
            <label>手數</label>
            <input 
              v-model.number="sellLimit.quantity"
              type="number"
              step="0.01"
              class="form-input"
              placeholder="0.01"
              @input="validateSellLimit"
            />
          </div>
          <div class="form-group">
            <label>成本 (USD)</label>
            <input 
              v-model.number="sellLimit.cost"
              type="number"
              step="0.01"
              class="form-input"
              placeholder="例如 5"
              @input="sellLimitCalculate"
            />
          </div>
        </div>

        <!-- 計算結果 -->
        <div class="data-row highlight" style="margin-bottom: 12px;">
          <div class="data-item">
            <span class="data-label">止損</span>
            <span class="data-value highlight">
              {{ calculateSellLimitStopLoss().toFixed(2) }}
            </span>
          </div>
        </div>

        <div class="data-row highlight" style="margin-bottom: 12px;">
          <div class="data-item">
            <span class="data-label">價格</span>
            <span class="data-value highlight">
              {{ sellLimit.price.toFixed(2) }}
            </span>
          </div>
          <div class="data-item">
            <span class="data-label">止盈</span>
            <span class="data-value highlight">
              {{ sellLimit.takeProfit.toFixed(2) }}
            </span>
          </div>
        </div>

        <div style="font-size: 12px; color: var(--color-text-tertiary); padding: 8px; background-color: rgba(212, 175, 55, 0.05); border-radius: 6px;">
          <strong>計算說明：</strong><br>
          • 價格 = 止損 - 成本<br>
          • 止盈 = 價格 - 成本
        </div>
      </div>

      <!-- Buy Limit 設置 -->
      <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-border);">
        <div class="data-label" style="margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">
          Buy Limit 配置
        </div>

        <div class="grid-3" style="margin-bottom: 12px;">
          <div class="form-group">
            <label>手數</label>
            <input 
              v-model.number="buyLimit.quantity"
              type="number"
              step="0.01"
              class="form-input"
              placeholder="0.01"
              @input="validateBuyLimit"
            />
          </div>
          <div class="form-group">
            <label>成本 (USD)</label>
            <input 
              v-model.number="buyLimit.cost"
              type="number"
              step="0.01"
              class="form-input"
              placeholder="例如 5"
              @input="buyLimitCalculate"
            />
          </div>
        </div>

        <!-- 計算結果 -->
        <div class="data-row highlight" style="margin-bottom: 12px;">
          <div class="data-item">
            <span class="data-label">止損</span>
            <span class="data-value highlight">
              {{ calculateBuyLimitStopLoss().toFixed(2) }}
            </span>
          </div>
        </div>

        <div class="data-row highlight" style="margin-bottom: 12px;">
          <div class="data-item">
            <span class="data-label">價格</span>
            <span class="data-value highlight">
              {{ buyLimit.price.toFixed(2) }}
            </span>
          </div>
          <div class="data-item">
            <span class="data-label">止盈</span>
            <span class="data-value highlight">
              {{ buyLimit.takeProfit.toFixed(2) }}
            </span>
          </div>
        </div>

        <div style="font-size: 12px; color: var(--color-text-tertiary); padding: 8px; background-color: rgba(212, 175, 55, 0.05); border-radius: 6px;">
          <strong>計算說明：</strong><br>
          • 價格 = 止損 + 成本<br>
          • 止盈 = 價格 + 成本
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'
import { useVolatilityStore } from '../stores/volatility'

const volatilityStore = useVolatilityStore()

const sellLimit = reactive({
  quantity: 0,
  stopLoss: 0,
  cost: 0,
  price: 0,
  takeProfit: 0,
  costDisplay: 0
})

const buyLimit = reactive({
  quantity: 0,
  stopLoss: 0,
  cost: 0,
  price: 0,
  takeProfit: 0
})

// 計算Sell Limit止損 = 突破口高點 + 1，如果有小數點第二位自動進位到第一位
const calculateSellLimitStopLoss = () => {
  const value = volatilityStore.breakoutHigh + 1
  // 檢查小數點第二位，如果有則進位
  const decimal = Math.round((value - Math.floor(value)) * 100) / 100
  if (decimal > 0) {
    return Math.ceil(value * 10) / 10
  }
  return value
}

// 計算Buy Limit止損 = 突破口低點 - 0.5，如果有小數點第二位自動進位到第一位
const calculateBuyLimitStopLoss = () => {
  const value = volatilityStore.breakoutLow - 0.5
  // 檢查小數點第二位，如果有則進位
  const decimal = Math.round((value - Math.floor(value)) * 100) / 100
  if (decimal > 0) {
    return Math.ceil(value * 10) / 10
  }
  return value
}

// Sell Limit 計算：價格 = 止損 - 成本
const sellLimitCalculate = () => {
  const stopLoss = calculateSellLimitStopLoss()
  sellLimit.price = stopLoss - sellLimit.cost
  sellLimit.takeProfit = sellLimit.price - sellLimit.cost
  volatilityStore.updateSellLimit({
    quantity: sellLimit.quantity,
    stopLoss: stopLoss,
    cost: sellLimit.cost,
    price: sellLimit.price,
    takeProfit: sellLimit.takeProfit
  })
}

// Buy Limit 計算：價格 = 止損 + 成本
const buyLimitCalculate = () => {
  const stopLoss = calculateBuyLimitStopLoss()
  buyLimit.stopLoss = stopLoss
  buyLimit.price = stopLoss + buyLimit.cost
  buyLimit.takeProfit = buyLimit.price + buyLimit.cost
}

// 監聽突破口高點變化，自動更新Sell Limit
const watchBreakoutHigh = computed(() => volatilityStore.breakoutHigh)
const unwatchHigh = watch(watchBreakoutHigh, () => {
  sellLimitCalculate()
})

// 監聽突破口低點變化，自動更新Buy Limit
const watchBreakoutLow = computed(() => volatilityStore.breakoutLow)
const unwatchLow = watch(watchBreakoutLow, () => {
  buyLimitCalculate()
})

// 監聽成本變化，自動更新計算結果
watch(() => sellLimit.cost, () => {
  sellLimitCalculate()
})

watch(() => buyLimit.cost, () => {
  buyLimitCalculate()
})

// 驗證
const validateSellLimit = () => {
  volatilityStore.updateSellLimit({
    quantity: sellLimit.quantity
  })
  sellLimitCalculate()
}

const validateBuyLimit = () => {
  buyLimitCalculate()
}

// 獲取星期幾 (顯示所有星期)
const getWeekday = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const dayOfWeek = date.getDay()
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return weekdays[dayOfWeek]
}

// 格式化日期為 YYYY/MM/DD
const formatDateShort = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}/${month}/${day}`
}

// 顯示所有波幅數據（不過濾）
const getFilteredVolatilities = () => {
  return volatilityStore.dailyVolatilities
}


</script>

<style scoped>
</style>
