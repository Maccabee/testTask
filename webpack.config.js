var webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  devServer: {
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/,
              include: __dirname,
              query: {
                  presets: ['react', 'es2015' ]
              }
          }
      ]
  }
};