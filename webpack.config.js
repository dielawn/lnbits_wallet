const path = require('path');
const Dotenv = require('dotenv-webpack')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
    ],
},
resolve: {
    modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
    ],
    extensions: ['.js'],
    fallback: {
  
    },
},
plugins: [
    // Other plugins...
    new Dotenv()
  ]
};