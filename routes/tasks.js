var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var tasklist = db.get('tasklist');
  res.render('tasks', { title: 'Tasks' });
  tasklist.find({},{},function(e, docs){
    res.render('tasklist', {
      "tasklist" : docs
    });
  });
});

module.exports = router;
