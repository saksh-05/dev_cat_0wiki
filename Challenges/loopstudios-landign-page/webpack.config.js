const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

var config = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "false",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "web_bundle.[hash].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
    [new webpack.SourceMapDevToolPlugin({})],
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "web_bundle.[hash].css",
      }),
      new CleanWebpackPlugin(),
      new WebpackManifestPlugin(),
    );
  }
  return config;
};
