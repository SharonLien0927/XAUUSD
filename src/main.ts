import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/styles.css'
import { useVolatilityStore } from './stores/volatility'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// 應用啟動時加載 Firebase 資料
app.mount('#app')

const store = useVolatilityStore()

// 嘗試從 Firebase 加載資料，如果失敗則使用 localStorage
store.loadFromFirebase().then((loaded) => {
  if (loaded) {
    console.log('✓ Data loaded from Firebase')
    // 啟動實時監聽器進行多裝置同步
    store.startFirebaseListener()
  } else {
    console.log('⚠ No Firebase data found, using localStorage')
  }
}).catch((error) => {
  console.error('Firebase loading failed:', error)
})

