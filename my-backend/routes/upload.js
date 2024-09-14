const express = require("express");
const multer = require("multer");
const router = express.Router();
const Upload = require("../models/Upload"); // 确保已定义模型

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// 文件上传的 POST 路由
router.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const upload = new Upload({
    fileName: req.file.filename,
    uploader: req.body.uploader || "Anonymous",
    campus: req.body.campus,
    uploadDate: new Date(req.body.announcementTime) || new Date(),
  });
  try {
    await upload.save();
    res.status(201).json(upload);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取所有上传的文件
router.get("/uploads", async (req, res) => {
  try {
    const uploads = await Upload.find();
    res.json(uploads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
