<template>
  <div>
    <!-- 平均波幅 -->
    <div class="card">
      <div class="card-title">平均波幅</div>
      
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
            inputmode="decimal"
            step="0.01"
            class="form-input"
            @input="volatilityStore.updateVolatility(index, day.highPoint, day.lowPoint)"
            placeholder="0"
          />
        </div>
        <div class="vol-item">
          <input 
            v-model.number="day.lowPoint"
            type="number"
            inputmode="decimal"
            step="0.01"
            class="form-input"
            @input="volatilityStore.updateVolatility(index, day.highPoint, day.lowPoint)"
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

      <!-- 單日波幅選擇 -->
      <div class="data-row highlight" style="margin-top: 12px;">
        <div class="form-group" style="flex: 1;">
          <label style="display: block; margin-bottom: 8px; font-size: 14px;">單日波幅</label>
          <select 
            v-model="selectedDayIndex"
            class="form-input"
            style="width: 100%;"
          >
            <option value="" disabled>選擇一天的資料</option>
            <option 
              v-for="(day, index) in volatilityStore.dailyVolatilities" 
              :key="index"
              :value="index"
            >
              {{ day.date }} - 波幅: {{ (day.highPoint - day.lowPoint).toFixed(2) }}
            </option>
          </select>
        </div>
        <div class="data-item" style="margin-left: 12px;">
          <span class="data-label">波幅值</span>
          <span class="data-value highlight">
            {{ selectedDayIndex !== '' ? (volatilityStore.dailyVolatilities[parseInt(selectedDayIndex)].highPoint - volatilityStore.dailyVolatilities[parseInt(selectedDayIndex)].lowPoint).toFixed(2) : '0.00' }}
          </span>
        </div>
      </div>
    </div>

    <!-- 策略分析 -->
    <div class="card">
      <div class="card-title">策略分析</div>

      <!-- 一、波幅、領域與成本 -->
      <div style="margin-bottom: 24px;">
        <div style="font-weight: 600; color: var(--color-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border);">一、波幅、領域與成本</div>
        
        <!-- 單日波幅選擇 -->
        <div class="form-group" style="margin-bottom: 12px;">
          <label>單日波幅選擇</label>
          <select v-model="strategy.singleDayIndex" class="form-input" @change="updateStrategyData">
            <option value="" disabled>選擇一天</option>
            <option v-for="(day, index) in volatilityStore.dailyVolatilities" :key="index" :value="index">
              {{ formatDateShort(day.date) }} - {{ (day.highPoint - day.lowPoint).toFixed(2) }}
            </option>
          </select>
        </div>

        <!-- 單日波幅顯示 -->
        <div class="data-row" style="margin-bottom: 12px;">
          <div class="data-item">
            <span class="data-label">單日波幅</span>
            <span class="data-value">{{ roundCustom(strategy.singleDayVolatility) }}U</span>
          </div>
          <div class="data-item">
            <span class="data-label">5日均波幅(5Avg)</span>
            <span class="data-value">{{ roundCustom(volatilityStore.averageVolatility) }}U</span>
          </div>
        </div>

        <!-- 領域 -->
        <div class="data-row" style="margin-bottom: 12px;">
          <div class="data-item">
            <span class="data-label">領域(5Avg10%)</span>
            <span class="data-value highlight">{{ roundCustom(volatilityStore.averageVolatility * 0.1) }}U</span>
          </div>
        </div>

        <!-- 成本佈局 -->
        <div style="margin-top: 16px; padding: 12px; background-color: rgba(212, 175, 55, 0.05); border-radius: 6px;">
          <div class="data-label" style="margin-bottom: 12px;">成本佈局</div>
          <div class="data-row" style="margin-bottom: 8px;">
            <div class="data-item">
              <span class="data-label">10%(5Avg10%)</span>
              <span class="data-value">{{ roundCustom(volatilityStore.averageVolatility * 0.1) }}U</span>
            </div>
            <div class="data-item">
              <span class="data-label">8%(5Avg8%)</span>
              <span class="data-value">{{ roundCustom(volatilityStore.averageVolatility * 0.08) }}U</span>
            </div>
          </div>
          <div class="data-row" style="margin-bottom: 8px;">
            <div class="data-item">
              <span class="data-label">5%(5Avg5%)</span>
              <span class="data-value">{{ roundCustom(volatilityStore.averageVolatility * 0.05) }}U</span>
            </div>
            <div class="data-item">
              <span class="data-label">3%(5Avg3%)</span>
              <span class="data-value">{{ roundCustom(volatilityStore.averageVolatility * 0.03) }}U</span>
            </div>
          </div>
          <div class="data-row">
            <div class="data-item">
              <span class="data-label">日波幅10% (不超過前項)</span>
              <span class="data-value">{{ getMinCost() }}U</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 二、保本與反轉 -->
      <div style="margin-bottom: 24px; padding-top: 16px; border-top: 1px solid var(--color-border);">
        <div style="font-weight: 600; color: var(--color-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border);">二、保本與反轉</div>
        <div class="grid-2">
          <div class="form-group">
            <label>保本開啟條件: (5Avg10%) > ?</label>
            <input v-model.number="strategy.breakEvenThreshold" type="number" inputmode="decimal" step="0.1" class="form-input" placeholder="輸入數值U" />
          </div>
          <div class="form-group">
            <label>反轉引線: (5Avg3.5%) > ?</label>
            <input v-model.number="strategy.reverseThreshold" type="number" inputmode="decimal" step="0.1" class="form-input" placeholder="輸入小點數" />
          </div>
        </div>
        <div style="margin-top: 12px; padding: 12px; background-color: rgba(212, 175, 55, 0.05); border-radius: 6px; font-size: 12px;">
          <div>保本開啟: {{ volatilityStore.averageVolatility * 0.1 > strategy.breakEvenThreshold ? '✓ 符合條件' : '✗ 不符合' }}</div>
          <div>反轉引線: {{ roundCustom(volatilityStore.averageVolatility * 0.035) }}小點 > {{ strategy.reverseThreshold }}?</div>
        </div>
      </div>

      <!-- 三、關鍵突破口 -->
      <div style="margin-bottom: 24px; padding-top: 16px; border-top: 1px solid var(--color-border);">
        <div style="font-weight: 600; color: var(--color-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border);">三、關鍵突破口</div>
        <div class="grid-2">
          <div class="form-group">
            <label>選擇日期 (突破口高點)</label>
            <select v-model="strategy.highPointDateIndex" class="form-input" @change="updateStrategyData">
              <option value="" disabled>選擇一天</option>
              <option v-for="(day, index) in volatilityStore.dailyVolatilities" :key="index" :value="index">
                {{ formatDateShort(day.date) }}
              </option>
            </select>
          </div>
          <div class="data-item" style="padding-top: 8px;">
            <span class="data-label">突破口高點</span>
            <span class="data-value highlight">{{ strategy.selectedHighPoint.toFixed(2) }}</span>
          </div>
        </div>
        <div class="data-row" style="margin-top: 12px; margin-bottom: 12px;">
          <div class="data-item">
            <span class="data-label">止損(高點+1)</span>
            <span class="data-value highlight">{{ roundCustom(strategy.selectedHighPoint + 1) }}</span>
          </div>
        </div>

        <div class="grid-2" style="margin-top: 12px;">
          <div class="form-group">
            <label>選擇日期 (突破口低點)</label>
            <select v-model="strategy.lowPointDateIndex" class="form-input" @change="updateStrategyData">
              <option value="" disabled>選擇一天</option>
              <option v-for="(day, index) in volatilityStore.dailyVolatilities" :key="index" :value="index">
                {{ formatDateShort(day.date) }}
              </option>
            </select>
          </div>
          <div class="data-item" style="padding-top: 8px;">
            <span class="data-label">突破口低點</span>
            <span class="data-value highlight">{{ strategy.selectedLowPoint.toFixed(2) }}</span>
          </div>
        </div>
        <div class="data-row" style="margin-top: 12px;">
          <div class="data-item">
            <span class="data-label">止損(低點-0.5)</span>
            <span class="data-value highlight">{{ roundCustom(strategy.selectedLowPoint - 0.5) }}</span>
          </div>
        </div>
      </div>

      <!-- 四、實盤與細節 -->
      <div style="margin-bottom: 24px; padding-top: 16px; border-top: 1px solid var(--color-border);">
        <div style="font-weight: 600; color: var(--color-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border);">四、實盤與細節</div>
        
        <div class="form-group" style="margin-bottom: 12px;">
          <label>關盤價</label>
          <input v-model.number="strategy.closingPrice" type="number" inputmode="decimal" step="0.01" class="form-input" placeholder="輸入關盤價" />
        </div>

        <div class="grid-2" style="margin-bottom: 12px;">
          <div class="form-group">
            <label>關盤是否接近突破口</label>
            <select v-model="strategy.closingNearBreakout" class="form-input">
              <option value="">選擇</option>
              <option value="yes">是</option>
              <option value="no">否</option>
            </select>
          </div>
          <div class="form-group">
            <label>是否有特殊盤型</label>
            <select v-model="strategy.specialPattern" class="form-input">
              <option value="">選擇</option>
              <option value="yes">是</option>
              <option value="no">否</option>
            </select>
          </div>
        </div>

        <div style="margin-bottom: 12px; padding: 12px; background-color: rgba(212, 175, 55, 0.05); border-radius: 6px;">
          <div class="data-label" style="margin-bottom: 12px;">趨勢</div>
          <div class="grid-3">
            <div class="form-group">
              <label style="font-size: 12px;">D1</label>
              <input v-model="strategy.trendD1" type="text" class="form-input" placeholder="如：上漲、下跌" />
            </div>
            <div class="form-group">
              <label style="font-size: 12px;">H4</label>
              <input v-model="strategy.trendH4" type="text" class="form-input" placeholder="如：上漲、下跌" />
            </div>
            <div class="form-group">
              <label style="font-size: 12px;">H1</label>
              <input v-model="strategy.trendH1" type="text" class="form-input" placeholder="如：上漲、下跌" />
            </div>
          </div>
        </div>

        <div style="margin-bottom: 12px;">
          <label>區間計算：單日波幅({{ roundCustom(strategy.singleDayVolatility) }}) - 領域×2({{ roundCustom(volatilityStore.averageVolatility * 0.1 * 2) }}) = 中間</label>
          <input v-model.number="strategy.middleValue" type="number" inputmode="decimal" step="0.01" class="form-input" placeholder="由使用者自行填寫" />
          <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-tertiary);">
            計算值: {{ (strategy.singleDayVolatility - (volatilityStore.averageVolatility * 0.1 * 2)).toFixed(2) }}
          </div>
        </div>

        <div class="form-group">
          <label>損益比 (格式: X:X=1:X)</label>
          <input v-model="strategy.profitRatio" type="text" class="form-input" placeholder="如: 500:500=1:1" />
        </div>
      </div>

      <!-- 五、今日模組 -->
      <div style="padding-top: 16px; border-top: 1px solid var(--color-border);">
        <div style="font-weight: 600; color: var(--color-text-primary); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border);">五、今日模組</div>
        <div class="form-group">
          <label>模組名稱</label>
          <select v-model="strategy.moduleType" class="form-input">
            <option value="">選擇模組</option>
            <option value="B1up">B1上漲</option>
            <option value="B1down">B1下跌</option>
            <option value="B2up">B2上漲</option>
            <option value="B2down">B2下跌</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 掛單範圍 -->
    <div class="card">
      <div class="card-title">掛單範圍</div>

      <!-- 突破口和成本設置 -->
<div class="grid-3" style="margin-bottom: 12px;">
          <div class="form-group">
            <label>突破口高點(or 美盤回調高點)</label>
            <input 
              v-model.number="volatilityStore.breakoutHigh"
              type="number"
              inputmode="decimal"
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
              inputmode="decimal"
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
              inputmode="decimal"
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
              inputmode="decimal"
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
              inputmode="decimal"
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
              inputmode="decimal"
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
              inputmode="decimal"
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

// 單日波幅選擇
const selectedDayIndex = ref('')

// 策略分析對象
const strategy = reactive({
  singleDayIndex: '',
  singleDayVolatility: 0,
  highPointDateIndex: '',
  lowPointDateIndex: '',
  selectedHighPoint: 0,
  selectedLowPoint: 0,
  breakEvenThreshold: 0,
  reverseThreshold: 0,
  closingPrice: 0,
  closingNearBreakout: '',
  specialPattern: '',
  trendD1: '',
  trendH4: '',
  trendH1: '',
  middleValue: 0,
  profitRatio: '',
  moduleType: ''
})

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

// 自定義四捨五入函數：超過小數點後5，取整數；否則保留小數點後一位
const roundCustom = (value: number) => {
  const decimal = value - Math.floor(value)
  // 如果小數部分 >= 0.5，則進位到整數
  if (decimal >= 0.5) {
    return Math.ceil(value)
  } else if (decimal === 0) {
    return value
  } else {
    // 否則保留小數點後一位
    return Math.round(value * 10) / 10
  }
}

// 獲取日波幅10%和5Avg10%的最小值
const getMinCost = () => {
  const dailyVolatility10 = strategy.singleDayVolatility * 0.1
  const fiveAvg10 = volatilityStore.averageVolatility * 0.1
  return roundCustom(Math.min(dailyVolatility10, fiveAvg10))
}

// 更新策略數據
const updateStrategyData = () => {
  if (strategy.singleDayIndex !== '') {
    const dayIndex = parseInt(strategy.singleDayIndex)
    if (dayIndex >= 0 && dayIndex < volatilityStore.dailyVolatilities.length) {
      const day = volatilityStore.dailyVolatilities[dayIndex]
      strategy.singleDayVolatility = day.highPoint - day.lowPoint
    }
  }

  if (strategy.highPointDateIndex !== '') {
    const dayIndex = parseInt(strategy.highPointDateIndex)
    if (dayIndex >= 0 && dayIndex < volatilityStore.dailyVolatilities.length) {
      strategy.selectedHighPoint = volatilityStore.dailyVolatilities[dayIndex].highPoint
    }
  }

  if (strategy.lowPointDateIndex !== '') {
    const dayIndex = parseInt(strategy.lowPointDateIndex)
    if (dayIndex >= 0 && dayIndex < volatilityStore.dailyVolatilities.length) {
      strategy.selectedLowPoint = volatilityStore.dailyVolatilities[dayIndex].lowPoint
    }
  }
}

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
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
}
</style>
