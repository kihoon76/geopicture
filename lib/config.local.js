var config = require('./config.global');

config.log = {
	appenders: {geopicture: {type:'console'}},
	categories: {default: {appenders: ['geopicture'], level: 'debug'}}
};
module.exports = config;