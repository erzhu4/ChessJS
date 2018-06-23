var webpack = require('webpack');
var path = require('path');

var reactModule = {

    entry: [
        './jsx/chess.jsx'
    ],

    output: {
        filename: 'chess.js',
        path: path.join(__dirname, '../js')
    },

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader: 'babel-loader'
            }
        ]
    }

};

module.exports = [reactModule];