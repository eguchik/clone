const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async function(req, res) {
  const tweets = await db.tweets.findAll();
  res.render('index', { title: 'ホーム', tweets: tweets, loginUser: req.user});
});

module.exports = router;
