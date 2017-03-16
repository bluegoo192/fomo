var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.post('/api/friends', function(req, res, next) {
  res.send('stub friends data');
});

router.post('/api/feed', function(req, res, next) {
  res.send('stub feed');
});

router.post('/api/nearby', function(req, res, next) {
  res.send('stub nearby eventslist');
});