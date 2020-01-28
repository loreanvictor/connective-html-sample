import path from 'path';
import webpack from 'webpack';

const HTMLWebpackPlugin =  require('html-webpack-plugin');


const config : webpack.Configuration = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    overlay: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({ title: 'CONNECTIVE HTML SAMPLE' })
  ],
  output: {
    filename: 'sample.bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ]
  },
}

export default config;
