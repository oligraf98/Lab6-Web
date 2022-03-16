const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main-[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules:[
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader", "sass-loader"]
      }
      ,

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "eva.html",
      template: "./eva.html"
    }),
    new HtmlWebpackPlugin({
      filename: "miprimera.html",
      template: "./miprimera.html"
    }),
    new HtmlWebpackPlugin({
      filename: "pablo.html",
      template: "./pablo.html"
    }),
    new HtmlWebpackPlugin({
      filename: "sneakpeek.html",
      template: "./sneakpeek.html"
    }),
    new HtmlWebpackPlugin({
      filename: "wodibear.html",
      template: "./wodibear.html"
    }),
    new CleanWebpackPlugin()
  ]
};
