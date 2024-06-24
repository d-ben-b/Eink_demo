const express = require('express');
const multer = require('multer');
const router = express.Router();
const Upload = require('../models/Upload');

const upload = multer({ dest: 'uploads/' });

// @route   POST /api/upload
// @desc    Upload a file
router.post('/', upload.single('file'), async (req, res) => {
    const { fileName, uploader, campus, announcementTime } = req.body;
    try {
        const newUpload = new Upload({
            fileName,
            uploader,
            campus,
            announcementTime: new Date(announcementTime)
        });
        const savedUpload = await newUpload.save();
        res.json(savedUpload);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// @route   GET /api/upload
// @desc    Get all uploads
router.get('/', async (req, res) => {
    try {
        const uploads = await Upload.find();
        res.json(uploads);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
