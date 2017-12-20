var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;


var routes = require('./routes/index');
var users = require('./routes/users');


// init app
var app = express();

//  view engines
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view-engine', 'handlebars');

// body-parser + cookie-paarser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));