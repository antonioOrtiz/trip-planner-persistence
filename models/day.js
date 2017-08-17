var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Restaurant = require('./restaurant');
var Hotel = require('./hotel');
var Activity = require('./activity');

var Day = db.define('day', {
  number: Sequelize.INTEGER
});



module.exports = Day;
