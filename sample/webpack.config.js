const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'eval',
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
      test: /\.(sc|sa|c)ss$/,
      use: [
        isProd ?
            MiniCssExtractPlugin.loader : 'vue-style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
            },
          },
        },
      ],
    }, {
      test: /\.(gif|jpe?g|png|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          esModule: false,
          name(_) {
            if (isProd) {
              return 'images/[name].[ext]?[hash]';
            }
            return '[path][name].[ext]?[hash]';
          },
        },
      }],
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
      minify: {
        collapseWhitespace: true,
      },
    }),
    ...(isProd ?
            [new MiniCssExtractPlugin({ filename: '[hash].[name].css' })] :
            []
    ),
  ],
  output: {
    filename: '[hash].[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://192.168.10.1:8080',
        pathRewrite: { '^/api': '' },
      },
      changeOrigin: true,
      secure: false,
    },
  },
};