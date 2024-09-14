const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  fileName: String,
  uploader: String,
  campus: String,
  uploadDate: { type: Date, default: Date.now },
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
