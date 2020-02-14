var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Woop woop woop !!!' });
});
router.get('/wow/', function(req, res, next){
res.send(`wow wow wow hi${req.query.name} blah blah`);
});
module.exports = router;
