const express = require('express');
const path = require('path');
const friends = require('../data/friends.js');

let router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
})

router.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/survey.html'));
})

module.exports = router;
