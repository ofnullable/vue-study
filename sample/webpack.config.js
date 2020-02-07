const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, 'src/main.js'),
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: { minimize: true },
      }],
    }, {
      test: /\.vue$/,
      use: 'vue-loader',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.css$/,
      use: [
        isProd ?
            MiniCssExtractPlugin.loader : 'vue-style-loader',
        'css-loader',
      ],
    }, {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: { fiber: require('fibers') },
          },
        },
      ],
    }],
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    ...(isProd ?
            [new MiniCssExtractPlugin({ filename: '[name].css' })] :
            []
    ),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};