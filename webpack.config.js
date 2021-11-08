/* eslint-disable prettier/prettier */
const path = require("path");

module.exports = {
  output: {
    libraryTarget: "commonjs",
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
