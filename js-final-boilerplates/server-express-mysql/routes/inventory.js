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

module.exports = router;