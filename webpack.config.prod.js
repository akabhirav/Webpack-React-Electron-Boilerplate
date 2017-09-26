const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: ["./app/js/src/index.js"]
  },
  /** target needs to be set to `electron-render` if you want electron inside react to communicate to main process*/
  target: 'electron-renderer',
  /** define output path and filename and public path if you want to set it to some thing other than the actual output file path*/
  output: {
    path: path.join(__dirname, 'app/js/dist'),
    filename: "bundle.js",
    publicPath: "/"
  },
  /** Minify js file for production*/
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};
