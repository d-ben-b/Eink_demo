const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // 加載環境變量

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/upload', require('./routes/upload'));

// 根路由
app.get('/', (req, res) => {
    res.send('Welcome to the File Upload API');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
