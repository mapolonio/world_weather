var express = require('express');
var router = express.Router();

router.get('/update/:lat/:lng', function(req, res) {
  res.send({
    lat: req.params.lat,
    lng: req.params.lng,
    temperature: 125,
    time: '18:12'
  });
});

module.exports = router;
