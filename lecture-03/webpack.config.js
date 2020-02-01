const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// webpack -> script를 하나로 만들어주는 모듈
module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    // webpack의 핵심
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
};
