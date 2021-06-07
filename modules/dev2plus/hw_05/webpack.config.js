const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
          test: /\.js$/,
          use: ['babel-loader']
      }
    ],
  },
  optimization: { 
    splitChunks: {chunks: 'all'},
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  
  entry: { index: path.resolve(__dirname, "src", "index.js") },

  output: {
    path: path.resolve(__dirname, "build"),
  },
};
