import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { db } from '@/firebase'
import { doc, setDoc, getDoc, onSnapshot, Timestamp } from 'firebase/firestore'

const STORAGE_KEY = 'volatility_store_data'
const FIREBASE_DOC_ID = 'user_data' // 用戶資料文件 ID

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

  // 從 localStorage 讀取資料或使用預設值
  const loadFromStorage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        return JSON.parse(stored)
      }
    } catch (error) {
      console.error('Failed to load data from localStorage:', error)
    }
    return null
  }

  const initialData = loadFromStorage()

  // 五日波幅數據
  const dailyVolatilities = ref<DailyVolatility[]>(
    initialData?.dailyVolatilities || generateWorkingDays().map(date => ({
      date,
      highPoint: 0,
      lowPoint: 0
    }))
  )

  // 掛單範圍設置
  const breakoutHigh = ref(initialData?.breakoutHigh || 0)
  const breakoutLow = ref(initialData?.breakoutLow || 0)
  const moduleTemplate = ref(initialData?.moduleTemplate || '')

  // Sell Limit 設置
  const sellLimit = ref({
    quantity: initialData?.sellLimit?.quantity || 0,
    stopLoss: initialData?.sellLimit?.stopLoss || 0,
    cost: initialData?.sellLimit?.cost || 0,
    price: initialData?.sellLimit?.price || 0,
    takeProfit: initialData?.sellLimit?.takeProfit || 0
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

  // 保存到 localStorage
  const saveToStorage = () => {
    const state: VolatilityState = {
      dailyVolatilities: dailyVolatilities.value,
      breakoutHigh: breakoutHigh.value,
      breakoutLow: breakoutLow.value,
      costRange: costRange.value,
      moduleTemplate: moduleTemplate.value,
      sellLimit: sellLimit.value
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (error) {
      console.error('Failed to save data to localStorage:', error)
    }
  }

  // 保存到 Firebase
  const saveToFirebase = async () => {
    try {
      const state: VolatilityState = {
        dailyVolatilities: dailyVolatilities.value,
        breakoutHigh: breakoutHigh.value,
        breakoutLow: breakoutLow.value,
        costRange: costRange.value,
        moduleTemplate: moduleTemplate.value,
        sellLimit: sellLimit.value
      }
      
      const userDocRef = doc(db, 'users', FIREBASE_DOC_ID)
      await setDoc(userDocRef, {
        ...state,
        updatedAt: Timestamp.now()
      }, { merge: true })
    } catch (error) {
      console.error('Failed to save data to Firebase:', error)
    }
  }

  // 從 Firebase 加載資料
  const loadFromFirebase = async () => {
    try {
      const userDocRef = doc(db, 'users', FIREBASE_DOC_ID)
      const docSnap = await getDoc(userDocRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        dailyVolatilities.value = data.dailyVolatilities || dailyVolatilities.value
        breakoutHigh.value = data.breakoutHigh || 0
        breakoutLow.value = data.breakoutLow || 0
        moduleTemplate.value = data.moduleTemplate || ''
        if (data.sellLimit) {
          sellLimit.value = { ...sellLimit.value, ...data.sellLimit }
        }
        return true
      }
    } catch (error) {
      console.error('Failed to load data from Firebase:', error)
    }
    return false
  }

  // 監聽 Firebase 實時更新（用於多裝置同步）
  const startFirebaseListener = () => {
    try {
      const userDocRef = doc(db, 'users', FIREBASE_DOC_ID)
      onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data()
          // 只有當本地沒在編輯時才更新（避免衝突）
          if (!isLocalEditing.value) {
            dailyVolatilities.value = data.dailyVolatilities || dailyVolatilities.value
            breakoutHigh.value = data.breakoutHigh || 0
            breakoutLow.value = data.breakoutLow || 0
            moduleTemplate.value = data.moduleTemplate || ''
            if (data.sellLimit) {
              sellLimit.value = { ...sellLimit.value, ...data.sellLimit }
            }
          }
        }
      })
    } catch (error) {
      console.error('Failed to start Firebase listener:', error)
    }
  }

  // 標記是否正在本地編輯
  const isLocalEditing = ref(false)

  // 監控所有狀態變化，自動保存到 localStorage（不自動保存到 Firebase）
  watch(
    [dailyVolatilities, breakoutHigh, breakoutLow, moduleTemplate, sellLimit],
    async () => {
      saveToStorage()
      // 注意：Firebase 的保存應該由「策略」和「紀錄」分頁主動調用，而不是自動同步
    },
    { deep: true }
  )

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
    updateSellLimit,
    saveToStorage,
    saveToFirebase,
    loadFromFirebase,
    startFirebaseListener,
    isLocalEditing
  }
})
