//tell knex what environment I'm in 
var env = process.env.NODE_ENV || 'developement';

//need to use [] when you want to eval key name
var config = require('../knexfile')[env];

//call function with () closure
module.exports = require('knex')(config);