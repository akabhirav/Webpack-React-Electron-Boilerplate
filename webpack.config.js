const webpack = require('webpack');
const path = require('path');

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
  devServer: {
    contentBase: './app/js/dist',
    publicPath: '/'
  },
  /** Plugin required for react hot reloading*/
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
