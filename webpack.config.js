const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
require('dotenv').config();

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          'less-loader'
        ],
        include: /\.module\.less$/
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
        exclude: /\.module\.less$/
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  devServer: {
    port: 3000,
    stats: 'minimal',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.ejs',
    }),
    new MiniCssExtractPlugin(),
    new DotenvWebpackPlugin(),
  ],
};
