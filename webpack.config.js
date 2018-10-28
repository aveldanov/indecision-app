// entry point -> output

const path = require('path');
//USE - allows to load an array of loaders
//console.log(path.join(__dirname, 'public'));
module.exports = {
  entry: './src/app.js',
  output:
    {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
