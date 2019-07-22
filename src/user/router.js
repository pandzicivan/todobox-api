const express = require('express');

const router = express.Router({// eslint-disable-line new-cap
  mergeParams: true,
});

router.post('/login', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
