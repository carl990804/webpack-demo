const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webconfig.config.bass.js')

module.exports = {
  mode: 'production',
  ...base,
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css",
    })
  ],
  module: {

    rules: [
    ...base.module.rules,
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader,
          "css-loader"],
      },
    ],
  },

};

