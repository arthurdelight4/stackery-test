// webpack.config.js
const path = require('path');

module.exports = {
  target: 'node',
  externals: [
    'aws-sdk', // aws-sdk included in Lambda
  ],
  entry: './index.js',
  output: {
    filename: '../bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
