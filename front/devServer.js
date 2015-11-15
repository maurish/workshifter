var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var proxy = require('express-http-proxy');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/web/index.html'));
});


app.listen(8888, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8888');
});

