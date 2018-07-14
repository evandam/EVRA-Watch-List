const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const Rollbar = require('rollbar');

const app = express();

if (process.env.ROLLBAR_ACCESS_TOKEN) {
    const rollbar = new Rollbar({
        accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
        captureUncaught: true,
        captureUnhandledRejections: true
    });
    app.use(rollbar.errorHandler());
    rollbar.log('Initialized Rollbar!');
}

app.use(logger('dev'));
app.use(express.static(path.join('..', 'client', 'build')));
app.use(express.static(path.join('..', 'client', 'public')));
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
