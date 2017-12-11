const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: { path: __dirname, filename: 'bundle.js' }, 
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            
            {
                rules: [
                  {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                  },
                  {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: [
                      {
                        loader: 'url-loader',
                        options: {
                          limit: 8192
                        }
                      }
                    ]
                  }
                ]
              },
              {
                test: /\.svg$/,
                loader: 'babel-loader!svg-react-loader'
              }
        ]
    }
};