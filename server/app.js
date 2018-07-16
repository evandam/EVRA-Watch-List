const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const Raven = require('raven');

const app = express();

if (process.env.SENTRY_DSN) {
    // Must configure Raven before doing anything else with it
    Raven.config(process.env.SENTRY_DSN).install();
    // The request handler must be the first middleware on the app
    app.use(Raven.requestHandler());
    // The error handler must be before any other error middleware
    app.use(Raven.errorHandler());
}

app.use(logger('dev'));
app.use(express.static(path.join('..', 'client', 'dist')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/movies', require('./routes/movies'));

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
  res.json({message: 'Error!!'});
});



module.exports = app;
