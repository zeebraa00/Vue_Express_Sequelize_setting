var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const history = require('connect-history-api-fallback')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/rest', indexRouter);
app.use('/rest/users', usersRouter);

// ************* 개중요
app.use(history())
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/../dist')));
} else {
  app.use(express.static(path.join(__dirname, '/../dist_dev')));
}
// ************* 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/**** DB 구조 생성 ****/

const models = require('./models');

models.sequelize.sync({
  force: true
});