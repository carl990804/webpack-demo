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
    // ...base.module.rules,

    // rules: [
    //   {
    //     test: /\.css$/i,
    //     // use: ["style-loader", "css-loader"],
    //     use: [MiniCssExtractPlugin.loader,
    //       "css-loader"],
    //   },
    // ],
        rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('dart-sass'),
            }
          },
        ],
      },
    ],
  },

};

