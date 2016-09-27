var express = require('express')
  , chalk = require('chalk')
  , app = express()
  
var  webpack =require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('./webpack.config')

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: 'src' });
})

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server started at %s port', chalk.green(port));
});
