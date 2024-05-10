const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',  // Ensure this points to your main TypeScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'  // Ensures webpack-dev-server serves files from the dist directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html'  // Path to your template
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Directory to serve files from
    },
    compress: true,
    port: 3000,
    open: true,  // Opens a browser window when starting
    historyApiFallback: true  // Fallback to index.html for Single Page Applications.
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'inline-source-map'
};
