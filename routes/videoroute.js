const path = require('path')

const express = require('express')

const videoController = require('../controllers/videoController')

const router = express.Router()

app.get('/', (req, res) => {
    res.render('upload');
  });
  
app.post('/upload', upload.single('video'), uploadVideo);