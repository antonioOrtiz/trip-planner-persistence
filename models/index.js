var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Day = require('./day');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

// New Associations

Day.belongsToMany(Restaurant, {through: 'day_restaurant'});
// Restaurant.belongsToMany(Day, {through: 'day_activity'});

Day.belongsTo(Hotel, {as: 'hotel'});
// Hotel.belongsTo(Day);

Day.belongsToMany(Activity, {through: 'day_activity'});
// Activity.belongsToMany(Day, {through: 'day_activity'});

module.exports = {
	db,
	Place,
	Hotel,
	Restaurant,
	Activity,
	Day
};
