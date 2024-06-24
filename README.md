
# 電子紙檔案上傳系統

這是一個簡單的成大校區檔案上傳系統，使用 HTML、CSS、JavaScript 建立前端，使用 Node.js、Express 和 MongoDB 建立後端。

## 目錄結構

```plaintext
your-repo-name/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── my-backend/
    ├── models/
    │   └── Upload.js
    ├── routes/
    │   └── upload.js
    ├── server.js
    ├── .env
    └── package.json
```

## 前端部分

### `frontend/index.html`

這個文件包含檔案上傳表單和校區選擇按鈕，還有顯示上傳狀態和已上傳資料的部分。

### `frontend/styles.css`

這個文件包含基本的樣式設置，用於美化網頁。

### `frontend/script.js`

這個文件包含前端的 JavaScript 邏輯，包括表單提交、校區選擇和從後端獲取已上傳資料的功能。

## 後端部分

### `my-backend/models/Upload.js`

這個文件定義了 MongoDB 的上傳資料模型，包括上傳者名稱、檔案名、上傳日期和校區。

### `my-backend/routes/upload.js`

這個文件定義了上傳和獲取上傳資料的路由，使用 multer 處理檔案上傳。

### `my-backend/server.js`

這個文件設置了 Express 伺服器，連接到 MongoDB 並啟用 CORS 和 JSON 解析中間件。

### `my-backend/.env`

這個文件包含環境變量，例如 MongoDB 的連接字串和伺服器端口。

### `my-backend/package.json`

這個文件定義了後端的依賴包和啟動腳本。

## 安裝與運行

### 前置條件

確保你已安裝以下軟件：

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### 步驟

1. 克隆這個倉庫到本地：

   ```sh
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. 設置後端：

   ```sh
   cd my-backend
   npm install
   ```

3. 配置 MongoDB 連接：

   在 `my-backend` 資料夾內創建 `.env` 文件，並填寫你的 MongoDB 連接字串：

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. 啟動後端伺服器：

   ```sh
   npm start
   ```

5. 開啟前端：

   使用任何 HTTP 伺服器打開 `frontend` 資料夾。例如，可以使用 `live-server`：

   ```sh
   npx live-server frontend
   ```

   或者使用 Python 提供的簡單 HTTP 伺服器：

   ```sh
   cd frontend
   python -m http.server 8000
   ```

   然後在瀏覽器中訪問 `http://localhost:8000`。

### 使用 tmux 確保後端持續運行

如果你想使用 `tmux` 來確保後端伺服器持續運行，可以按照以下步驟：

1. 啟動 tmux 會話：

   ```sh
   tmux new -s my-backend-session
   ```

2. 在 tmux 會話中啟動後端伺服器：

   ```sh
   npm start
   ```

3. 分離 tmux 會話：

   按下 `Ctrl+b` 然後按 `d`。

4. 你可以隨時重新連接到 tmux 會話：

   ```sh
   tmux attach -t my-backend-session
   ```

這樣你就可以確保後端伺服器在 tmux 會話中持續運行，即使你關閉了終端窗口。

---

如果有任何疑問或需要進一步的幫助，請隨時聯繫我。
