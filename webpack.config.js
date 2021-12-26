
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
  
};

