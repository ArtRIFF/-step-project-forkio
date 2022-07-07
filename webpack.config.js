const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode:"development",
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
},
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory:path.resolve(__dirname, '')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback:true,
  },
  module: {
    rules: [{
      test:/\.(s*)css$/,
      use: [
         miniCss.loader,
         'css-loader',
         'sass-loader',
      ]
   },
   { test: /\.(js)$/, use: 'babel-loader' }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/fonts", to: "fonts" }
      ],
    }),
    new miniCss({
       filename: 'style.css',
    }),
 ]
}