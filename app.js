var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/testapi'); //add our custom api file

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://anirudh:angel%4012345@cluster0.l87fs.mongodb.net/anirudh?authSource=admin&replicaSet=atlas-10we0o-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdatabase");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("anirudh").find({}).toArray(function(err,result){
    if(err){
      throw err;
    }
    else{
      console.log(result);
    }db.close();
  });
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
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
