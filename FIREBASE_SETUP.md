# Firebase 配置指南

## 步驟 1：在 Firebase Console 創建專案

1. 訪問 https://console.firebase.google.com/
2. 點擊「建立專案」
3. 輸入專案名稱（如 `XAUUSD`）
4. 選擇位置（推薦選擇靠近你的地區）
5. 等待專案建立完成

## 步驟 2：設置 Firestore Database

1. 在左側菜單點擊「Firestore Database」
2. 點擊「建立資料庫」
3. 選擇「在測試模式下啟動」（開發時使用）
   - **重要**：生產環境前改為安全規則
4. 選擇資料庫位置
5. 點擊「建立」

## 步驟 3：設置 Firestore 安全規則

在 **Rules** 標籤中，改為以下規則（允許驗證使用者讀寫）：

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 允許驗證使用者讀寫自己的資料
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // 公開讀取規則（選擇性）
    match /{document=**} {
      allow read: if true;
    }
  }
}
```

## 步驟 4：取得 Firebase 配置

1. 點擊左上角「專案設定」（齒輪圖標）
2. 找到「你的應用」區域
3. 點擊「Web」應用
4. 複製以下配置：

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 步驟 5：填入應用的環境變數

編輯項目根目錄的 `.env.local` 文件，填入上面複製的配置：

```
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

## 步驟 6：本地測試

```bash
npm run dev
```

開啟應用，輸入一些資料。你應該會看到：
- ✓ Data loaded from Firebase
- 資料會自動保存到 Firestore

## 步驟 7：檢查 Firestore 中的資料

1. 回到 Firebase Console
2. 進入 Firestore Database
3. 應該會看到 `users` 集合下有 `user_data` 文件
4. 展開查看你保存的所有資料

## 步驟 8：多裝置同步

因為應用啟用了 `startFirebaseListener()`，當你在另一個裝置/瀏覽器修改資料時，
這個頁面會實時同步更新。

## 故障排除

- **"Firebase is not configured"** → 檢查 `.env.local` 是否正確填入
- **"Permission denied"** → 檢查 Firestore 規則是否設置正確
- **資料未保存** → 檢查瀏覽器控制台是否有 JavaScript 錯誤

## 下一步

- 集成 Firebase Authentication（用戶登入）
- 設置更細粒度的權限管理
- 配置離線支援和快取策略
