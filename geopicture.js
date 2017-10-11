/**
 * 
 */
var env		    = process.env.NODE_ENV || 'local';
var express   	= require('express'),
	 fs		    = require('fs'),
	 handlebars	= require('express3-handlebars'),
	 bodyParser	= require('body-parser'),
	 path		= require('path'),
	 log4js		= require('log4js'),
     helmet		= require('helmet'),
     config		= require('./lib/config.' + env);

log4js.configure(config.log);

var app 		= express(),
   viewsPath	= path.join(__dirname, 'views'),
	logger		= log4js.getLogger('geopicture');
	 
app.engine('handlebars', handlebars({
	defaultLayout : 'main',
	extname : 'handlebars',
	layoutsDir: viewsPath + '/layouts'
})); 

app.set('view engine', 'handlebars');
app.set('views', viewsPath);
app.set('port', process.env.GEOPICTURE_PORT || 20000);
//app.disable('x-powered-by');
app.disable('etag');

app.use(express.static(path.join(__dirname, 'public/dist')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(helmet());

app.use('/', require('./routes/index'));

/*app.use(function(err, req, res, next) {
	res.status(500).render('error');
});

app.use(function(err, req, res, next) {
	res.status(404).render('not-found');
});*/

app.listen(app.get('port'), function() {
	logger.debug('Listening on port ' + app.get('port'));
});



