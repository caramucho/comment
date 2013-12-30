
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var MongoStore = require('connect-mongo')(express);
var settings=require('./settings');
var flash = require('connect-flash');

var app = express();

// all environments

app.configure(function(){ 
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs'); 
  app.use(express.favicon());
  app.use(express.json());
  app.use(express.logger('dev'));
  app.use(express.urlencoded());
  app.use(express.bodyParser()); 
  app.use(express.methodOverride()); 
  app.use(flash());
  app.use(express.cookieParser()); 
  app.use(express.session({ 
    secret: settings.cookieSecret, 
    store: new MongoStore({ 
      db: settings.db 
    }) 
  })); 
  app.use(app.router); 
  app.use(express.static(path.join(__dirname, 'public')));
}); 

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/',function(req, res){
  res.render('index', { title: 'Express' });
});
app.get('/users', function(req, res) {
});
app.get('/u/:user',function(req, res) {
});
app.post('/post', function(req, res) {
});
app.get('/reg', function(req, res) {
  res.render('reg', { title: 'Express' });
}); 
app.post('/reg', routes.signin);

app.get('/login',function(req, res) {
  res.render('login', { title: 'Express' });
}); 
app.post('/login',routes.login);
app.get('/logout', function(req, res) {
  res.render('logout', { title: 'Express' });
}); 
app.get('/demo',function(req, res) {
  res.render('demo', { title: 'Express' });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
