const path = require('path');
const CLIENT_DIR = path.resolve(__dirname, 'client');

module.exports = {
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        include: CLIENT_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react']
        }
      }
    ]
  },
  resolve:{
    alias: {
      components: path.resolve(CLIENT_DIR, 'components')
    }
  }
  }
}
