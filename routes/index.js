var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.collection('YT-videos').find().toArray(function(err, results) {
    return res.render('index', { ytPP: results });
  })
});

router.post('/puzzles/PPs/add', function(req, res, next) {
  const db = req.db;  
  db.collection('YT-videos').save(req.body, (err, result) => {
    if (err) return console.log(err)
  
    console.log('Saved to database')
    
    return res.redirect('/');
  })
});

module.exports = router;
