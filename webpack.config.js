const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let isProduction = process.env.NODE_ENV === 'production';
let mode = isProduction ? 'production' : 'development';

const getRule = function(regex){
  return {
    test: regex,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: !isProduction,
        },
      },
      'css-loader',
      'sass-loader',
    ],
  };
};

const getPlugin = function(name){
  return new MiniCssExtractPlugin({
    filename: name + '.css',
  });
};

module.exports = {
  mode: mode,
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'video-player.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    getPlugin('video-player'),
    getPlugin('demo'),
    getPlugin('youtube-play'),
    getPlugin('vimeo-play'),
    new HtmlWebpackPlugin({
      title: 'Video Player',
      template: './src/html/index.html',
      minify: false,
    })
  ],
  module: {
    rules: [
      getRule(/video-player\.scss$/),
      getRule(/demo\.scss$/),
      getRule(/youtube-play\.scss$/),
      getRule(/vimeo-play\.scss$/),
    ],
  },
};
