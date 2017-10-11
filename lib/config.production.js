var config = require('./config.global');

config.log = {
	appenders: {geopicture: {
		type:'dateFile',
		filename: '/home/khnam/apis/onnara/logs/onnara.log',
		pattern: '-yyyy-MM-dd',
		alwaysIncludePattern: true
	}},
	categories: {default: {appenders: ['geopicture'], level: 'debug'}}
};
module.exports = config;