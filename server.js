var express = require('express');
var app		= express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(8000, function() {
  console.log("listening on port 8000");
})