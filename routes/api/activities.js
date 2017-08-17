var router = require('express').Router();
var Activities = require('../../models').Activity;


router.get('/', function(req,res,next) {
  Activities.findAll()
  .then(function(activities) {
    res.send(activities);
  });
});

module.exports = router;
