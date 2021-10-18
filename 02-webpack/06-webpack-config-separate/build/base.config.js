const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 图片大小大于该值, 使用 file-loader 加载, 小于该值使用 base64
              limit: 20 * 1024,
              name: "img/[name].[hash:8].[ext]"
            },
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new webpack.BannerPlugin("最终版权归wzy所有"),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
};