var path              = require('path');
var webpack           = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './index.js'
  ],
  output: {
    library: 'OctobluDeviceSchemaTransmogrifier',
    path: path.join(__dirname, 'dist'),
    filename: 'transmogrifier.js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee" }
    ]
  },
  plugins: [
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
   ]
};
