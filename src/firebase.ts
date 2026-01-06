import { initializeApp } from 'firebase/app'
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'

// Firebase 配置 - 使用你的 Firebase 專案信息
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// 初始化 Firebase
const app = initializeApp(firebaseConfig)

// 初始化 Firestore
export const db = getFirestore(app)

// 啟用離線持久化
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('多個標籤頁開啟，無法啟用持久化')
  } else if (err.code === 'unimplemented') {
    console.warn('瀏覽器不支援持久化')
  }
})

export default app
