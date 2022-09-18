const router = require('express').Router();
const patients = require('./routes');

router.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the patients API'
  });
});

router.use('/patients', patients);

module.exports = router;
