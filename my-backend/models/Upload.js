const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  uploader: { type: String, required: true },
  campus: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
