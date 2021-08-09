const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async function(req, res) {
  const users = await db.user.findAll();
  res.render('index', { title: 'ホーム', users: users });
});

module.exports = router;
