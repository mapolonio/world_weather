var express = require('express');
var router = express.Router();

router.use('/api', require('./api'));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
