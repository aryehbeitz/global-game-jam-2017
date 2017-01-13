var express = require('express')
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('dist'))

app.get('/*', function (req, res) {
  res.static('/dist/index.html');
});

app.listen(port, function () {
  console.log('Listen on port' + port)
});