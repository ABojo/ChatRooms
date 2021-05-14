var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const setupPassport = require('./passport.config');

var indexRouter = require('./routes/index');
const registerRouter = require('./routes/registerRoutes');
const logoutRouter = require('./routes/logoutRoutes');

var app = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//logging requests
app.use(logger('dev'));

//Parsing request data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Serves static files
app.use(express.static(path.join(__dirname, 'public')));

//Session middleware
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_CONNECTION_STRING }),
  })
);

//Setup Passport
setupPassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// add user to locals so its accesible in all views
app.use((req, res, next) => {
  if (req.user) res.locals.currentUser = req.user;
  next();
});

//Routers to direct requests to the proper handlers
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const startServer = () => {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is listening for incoming requests!`);
  });
};

module.exports = startServer;
