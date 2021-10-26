var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/blackShirt', function (req, res, next){
    models.stock.findOne({
        where: {
          ItemType: "BlackShirt"
        }
      })
      .then(item => {
          console.log(item)
          res.send(item)
      })
})

router.get('/whiteShirt', function (req, res, next){
    models.stock.findOne({
        where: {
          ItemType: "WhiteShirt"
        }
      })
      .then(item => {
          console.log(item)
          res.send(item)
      })
})

router.post('/addProduct', function (req, res, next){
  models.product
    .findOrCreate({
      where: {
        title: req.body.title
      },
      defaults: {
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.send('User successfully created');
      } else {
        res.send('This user already exists');
      }
    });
})

module.exports = router;