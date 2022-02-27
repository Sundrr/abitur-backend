const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const studentRouter = require('./routes/student');
const eventRouter = require('./routes/event');
const responsibleRouter = require('./routes/responsible');

const app = express();
const mongoose = require('mongoose');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8082');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/', indexRouter);
app.use('/student', studentRouter);
app.use('/event', eventRouter);
app.use('/responsible', responsibleRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log('in error handler');
  return res.status(err.status || 500).json({ message: err.message, error: err });
});

mongoose.connect('mongodb://localhost:27017/abitur');
// mongoose.connect('mongodb+srv://evgeniy:okByNvKWpIOHJgrc@abiturcluster.fu9aq.mongodb.net/abitur?retryWrites=true&w=majority');

module.exports = app;
