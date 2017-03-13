var path = require('path'); // string manipulation for filepaths

module.exports = {
  entry: './src/index.js', // main source file
  output: { // where bundle goes
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'react'],
        }
      },
      {
        test: /(\.css)$/,
        loaders: ['style', 'css']
      },
    ]
  }
};
