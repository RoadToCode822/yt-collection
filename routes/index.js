var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var YouTube = require('youtube-node');
var YT = new YouTube();

YT.setKey('AIzaSyDbpr3FzddtbOLSpaZaCMMqNzV2IutIx2Y')


// How do I take users' youtube URL and send a request to the youtube API
// and save some of the data from the object that youtube gives me and
// pass it to the index.ejs view?


/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.collection('YT-videos').find().toArray(function(err, results) {
    console.log(results);
    res.render('index', { ytPP: results });
    /*

    YT.getById('pU9Q6oiQNd0', function(err, YTres) {
      if (err) console.log(err)
      ytData = YTres.items[0];
      return res.render('index', { ytPP: results, ytData });
    })    
    */
  })
});

router.post('/puzzles/PPs/add', function(req, res, next) {
  const db = req.db;
  const ytURL = req.body.ytURL;

  //Take the id out of the youtube URL

  
  YT.getById('pU9Q6oiQNd0', function(err, YTres) {
      if (err) console.log(err)

      const ytData = YTres.items[0];
      console.log(ytData);
      req.body.thumb = ytData.snippet.thumbnails.default.url;
      console.log(req.body.thumb);
      
      db.collection('YT-videos').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('Saved to database')
        return res.redirect('/');
  })
    })    
  
});

module.exports = router;
