const express = require('express');
const controller = require('./controller');
const router = express.Router({// eslint-disable-line new-cap
  mergeParams: true,
});

router.post('/login', (req, res) => {
  controller.login(req, res);
});

router.post('/register', (req, res) => {
  controller.register(req, res);
});

module.exports = router;
