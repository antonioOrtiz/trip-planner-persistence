var router = require('express').Router();
var Restaurant = require('../../models').Restaurant;



// $.get('/api/restaurants')
// .then(function (restaurants) {
//   restaurants.forEach(function(restaurant){
//     console.log(restaurant.name);
//   });
// })
// .catch( console.error.bind(console) );

router.get('/', function(req,res,next) {
  Restaurant.findAll()
  .then(function(restaurants) {
    res.send(restaurants);
  });
});

module.exports = router;
