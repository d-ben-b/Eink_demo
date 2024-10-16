const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // 加载环境变量

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// 引入上传路由模块
const uploadRouter = require("./routes/upload");

// 使用 uploadRouter 处理所有 "/api/upload" 开头的请求
app.use("/api", uploadRouter); // 修改这里，用以正确挂载和分发上传路由

// 根路由
app.get("/", (req, res) => {
  res.send("Welcome to the File Upload API");
});

// 监听端口
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
