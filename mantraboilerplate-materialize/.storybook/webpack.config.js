const path = require('path');
module.exports = {
  module: {
    loaders: [
      {
       test: /\.js$/,
       loaders: [ 'babel' ],
       exclude: /node_modules/,
       include: __dirname
     },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: path.resolve(__dirname, '../')
      },
    ]
  }
};
