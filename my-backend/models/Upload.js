const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    uploader: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    campus: {
        type: String,
        required: true
    },
    announcementTime: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Upload', UploadSchema);
