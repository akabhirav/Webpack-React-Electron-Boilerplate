const webpack = require('webpack');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  /** app should have dev server if you want hot reload*/
  entry: {
    app: ["webpack/hot/dev-server", "./app/js/src/index.js"]
  },
  /** target needs to be set to `electron-render` if you want electron inside react to communicate to main process*/
  target: 'electron-renderer',
  /** define output path and filename and public path if you want to set it to some thing other than the actual output file path*/
  output: {
    path: path.join(__dirname, 'app/js/dist'),
    filename: "bundle.js",
    publicPath: "/"
  },
  /** path for bundle js*/
  devServer: {
    publicPath: path.join(__dirname, 'app/js/dist'),
    compress: true
  },
  /** Plugin required for react hot reloading*/
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /** Write a physical file so we don't have to rely on http for bundle js*/
    new WriteFilePlugin()
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
