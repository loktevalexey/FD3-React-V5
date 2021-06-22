import Config from 'webpack-config';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
})
const extractLess = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

export default new Config().merge({
  entry: ["babel-polyfill",'./App.js'],
  output: {
    path: __dirname + '/public',
    publicPath:'/',
  },
  devtool:'source-map',
  module: {
        rules:[
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { 
                  loader: "babel-loader",
                  options: {
                    presets: [['env', {modules: false}], 'stage-0', 'react']
                  },
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            {
              test: /\.scss$/,
              use: ExtractSass.extract({
                use: [{
                  loader: "css-loader"
                }, {
                  loader: "sass-loader"
                }],
                fallback: "style-loader"
              })
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "less-loader"
                        }
                    ]
                })
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [{
                loader: "file-loader",
                options: {
                  context: './src',
                  useRelativePath: true,
                  name: '[name].[ext]'
                }
              }]
            }
        ]
  },
  plugins: [
    new ExtractTextPlugin("[name].bundle.[hash].css"),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: "body"
    })]
});
