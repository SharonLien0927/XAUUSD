import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface DailyVolatility {
  date: string
  highPoint: number
  lowPoint: number
}

export interface VolatilityState {
  dailyVolatilities: DailyVolatility[]
  breakoutHigh: number
  breakoutLow: number
  costRange: number
  moduleTemplate: string
  sellLimit: {
    quantity: number
    stopLoss: number
    cost: number
    price: number
    takeProfit: number
  }
}

export const useVolatilityStore = defineStore('volatility', () => {
  // 生成最近5個工作日的日期
  const generateWorkingDays = (): string[] => {
    const dates: string[] = []
    let current = new Date()
    
    while (dates.length < 5) {
      const dayOfWeek = current.getDay()
      // 跳過星期六(6)和星期日(0)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.unshift(current.toISOString().split('T')[0])
      }
      current.setDate(current.getDate() - 1)
    }
    
    return dates
  }

  // 五日波幅數據
  const dailyVolatilities = ref<DailyVolatility[]>(
    generateWorkingDays().map(date => ({
      date,
      highPoint: 0,
      lowPoint: 0
    }))
  )

  // 掛單範圍設置
  const breakoutHigh = ref(0)
  const breakoutLow = ref(0)
  const moduleTemplate = ref('')

  // Sell Limit 設置
  const sellLimit = ref({
    quantity: 0,
    stopLoss: 0,
    cost: 0,
    price: 0,
    takeProfit: 0
  })

  // 計算平均波幅
  const averageVolatility = computed(() => {
    if (dailyVolatilities.value.length === 0) return 0
    const sum = dailyVolatilities.value.reduce((acc, day) => {
      return acc + (day.highPoint - day.lowPoint)
    }, 0)
    return sum / dailyVolatilities.value.length
  })

  // 計算成本&領域範圍 (平均波幅的10%)
  const costRange = computed(() => {
    return averageVolatility.value * 0.1
  })

  // 計算價格 = 止損 - 成本
  const calculatePrice = () => {
    sellLimit.value.price = sellLimit.value.stopLoss - sellLimit.value.cost
    calculateTakeProfit()
  }

  // 計算止盈 = 價格 - 成本
  const calculateTakeProfit = () => {
    sellLimit.value.takeProfit = sellLimit.value.price - sellLimit.value.cost
  }

  // 更新日期
  const updateDate = (index: number, date: string) => {
    if (dailyVolatilities.value[index]) {
      dailyVolatilities.value[index].date = date
    }
  }

  // 更新波幅
  const updateVolatility = (index: number, highPoint: number, lowPoint: number) => {
    if (dailyVolatilities.value[index]) {
      dailyVolatilities.value[index].highPoint = highPoint
      dailyVolatilities.value[index].lowPoint = lowPoint
    }
  }

  // 批量更新
  const updateSellLimit = (data: Partial<typeof sellLimit.value>) => {
    Object.assign(sellLimit.value, data)
  }

  return {
    dailyVolatilities,
    breakoutHigh,
    breakoutLow,
    moduleTemplate,
    sellLimit,
    averageVolatility,
    costRange,
    calculatePrice,
    calculateTakeProfit,
    updateDate,
    updateVolatility,
    updateSellLimit
  }
})
