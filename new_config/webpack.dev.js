const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", //项目入口文件
  output: {
    path: path.resolve(__dirname, "dist"), //出口目录
    filename: "bundle.js", //出口文件名
  },
  module: {
    //配置loader
    rules: [
      {
        test: /\.jsx?$/, // 匹配以 .js 或 .jsx 结尾的文件
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // 使用 babel-loader
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    //配置插件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    //配置开发服务器
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
