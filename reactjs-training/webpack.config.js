const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "../reactjs-training/src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../reactjs-training/build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "../reactjs-training/public",
        "index.html"
      ),
      favicon: "../reactjs-training/public/favicon.ico",
      manifest: path.resolve(
        __dirname,
        "../reactjs-training/public",
        "manifest.json"
      ),
    }),
  ],
  resolve: {
    modules: [__dirname, "../reactjs-training/src", "node_modules"],
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
      {
        test: /\.(jpeg|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
    ],
  },
};
