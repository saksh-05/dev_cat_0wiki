const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

var config = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "web_bundle.[contenthash].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "web_bundle.[contenthash].css",
        ignoreOrder: true,
      }),
      new CleanWebpackPlugin(),
      new WebpackManifestPlugin(),
    );
  }
  return config;
};
