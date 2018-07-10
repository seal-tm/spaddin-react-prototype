const path = require('path');


module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
     test: /\.tsx$/,
     use: 'ts-loader',
     exclude: /node_modules/
    },
    {
      test: /\.scss/,
      use: 'sass-loader',
      exclude: /node_modules/
    }

    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.tsx']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};