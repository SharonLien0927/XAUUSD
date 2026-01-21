import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/styles.css'
import { useVolatilityStore } from './stores/volatility'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')

const store = useVolatilityStore()

// 應用啟動時初始化 Firebase 同步
console.log('🚀 Initializing Firebase sync...')

// 嘗試從 Firebase 加載計算數據
store.loadFromFirebase().then((loaded) => {
  if (loaded) {
    console.log('✓ Volatility data loaded from Firebase')
  } else {
    console.log('ℹ Using localStorage for volatility data')
  }
  
  // 無論如何都啟動監聽器進行實時同步
  store.startFirebaseListener()
  console.log('✓ Firebase listener started for volatility data')
}).catch((error) => {
  console.error('⚠ Firebase initialization error:', error)
  // 繼續使用 localStorage，即使 Firebase 失敗
  store.startFirebaseListener()
})

