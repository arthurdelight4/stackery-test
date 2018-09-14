// webpack.config.js

module.exports = {
  target: 'node',
  externals: [
    'aws-sdk', // aws-sdk included in Lambda
  ],
  entry: './index.js',
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
