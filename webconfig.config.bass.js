const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'carl',
      template: 'src/assets/index.html'
    }),

  ],
  module: {
    rules: [
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:['file-loader']
      },
      {
        test: /\.styl$/,
        use: [
 
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
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

