var express = require('express');
var app = express();
require('dotenv').config();


// app.use(express.static('bower_components'));

app.get('/', function (req, res) {
  res.sendFile("index.html", {"root": __dirname});
  console.log('New log'+process.env.ACCESS_TOKEN);
});
app.use("/js", express.static(__dirname + '/js'));
app.use("/bower_components", express.static(__dirname + '/bower_components'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
