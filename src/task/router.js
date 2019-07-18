const express = require('express');


const router = express.Router({// eslint-disable-line new-cap
  mergeParams: true,
});

router.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
