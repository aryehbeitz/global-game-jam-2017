var express = require('express')
var app = express()

app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.static('/dist/index.html');
});

app.listen(8080, function () {
  console.log('Listen on port 8080!')
});