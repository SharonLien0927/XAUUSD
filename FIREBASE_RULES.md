# Firebase Firestore 規則設置

為了讓手機和電腦同步所有數據，你需要在 Firebase Console 設置正確的 Firestore 規則。

## 設置步驟

1. 進入 [Firebase Console](https://console.firebase.google.com)
2. 選擇你的 XAUUSD 專案
3. 點擊左側「Firestore Database」
4. 點擊頂部「Rules」標籤

## 複製以下規則

將下面的規則複製到 Firestore Rules 編輯器中：

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // 允許所有使用者讀寫 users 集合下的所有文件
    match /users/{document=**} {
      allow read, write: if true;
    }
    
  }
}
```

## ⚠️ 重要說明

這個規則允許**任何人**讀寫資料，適合開發和測試階段。
生產環境應該改為需要身份驗證的規則。

## 發布規則

1. 複製上面的規則到編輯器
2. 點擊「Publish」或「保存」按鈕
3. 確認發布成功

## 驗證同步

設置完成後：
1. 在手機上打開應用
2. 在計算分頁輸入波幅數據
3. 在電腦上刷新頁面或等待數秒
4. 應該會看到手機上輸入的數據

🎯 所有分頁的數據（計算、策略、紀錄）都應該同步！
