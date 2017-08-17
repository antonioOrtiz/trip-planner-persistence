var Promise = require('bluebird');
var router = require('express').Router();
// var Hotel = require('../models').Hotel;
// var Restaurant = require('../models').Restaurant;
// var Activity = require('../models').Activity;

// var Restaurant = require('../models').Restaurant;


router.use('/api/restaurants', require('./api/restaurants'));
router.use('/api/hotels', require('./api/hotels'));
router.use('/api/activities', require('./api/activities'));


router.get('/', function(req, res, next) {

    res.render('index');

});

module.exports = router;


