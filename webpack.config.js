let path = require("path");
let htmlplug = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "run.js",
    clean: true,
  },
  plugins: [
    new htmlplug({
      title: "react app",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "docs"),
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
    ],
  },
};
