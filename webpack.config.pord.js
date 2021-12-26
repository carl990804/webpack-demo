const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'carl',
        template:'src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, 
            "css-loader"],
      },
    ],
  },
  
};

