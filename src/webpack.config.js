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
        exclude: [/node_modules/, /bundle/, /__stackery/],
        options: {
          "presets": [
            [ "@babel/env", {
                "targets": {
                  "node": "8.10"
                }
              }
            ]
          ],
          "plugins": [
            [
              "js-logger",
              {
                "format": {
                  "level": 1,
                  "separator": ".",
                  "extensions": [ ".js", ".jsx" ],
                  "project": false
                }
              }
            ]
          ]
        }
        
      },
    ],
  },
};
