const router = require('express').Router();
const heroes = require('./routes');

router.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the heroes API'
  });
});

router.use('/heroes', heroes);

module.exports = router;
