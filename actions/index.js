function getYTbyId(req, res, YT) {
  return YT.getById('pU9Q6oiQNd0', function(err, YTres) {
      if (err) {
        console.log(err);
      }
      const db = req.db;
      const ytURL = req.body.ytURL;
      const ytData = YTres.items[0];
      console.log(ytData);
      req.body.thumb = ytData.snippet.thumbnails.default.url;
      
      console.log(req.body.thumb);
      
      db.collection('YT-videos').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('Saved to database')
        return res.redirect('/');
      });
    }); 
}

module.exports = {
  getYTbyId
}