// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const DotenvWebpackPlugin = require("dotenv-webpack");

const envFilePath = () => {
  const envName = process.env.APP_ENV ?? "dev";
  return ".env." + envName;
};

/** @typedef {import('webpack').Configuration} WebpackConfiguration */

/** @type WebpackConfiguration */
/** @type I */
const config = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.(ico|svg|jpe?g|png|webp)$/,
        type: "asset/resource", // <--- 'file-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My React App",
      template: "./src/index.html",
      filename: "index.html",
    }),
    new DotenvWebpackPlugin({
      path: envFilePath(),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
};

// eslint-disable-next-line no-undef
module.exports = config;
