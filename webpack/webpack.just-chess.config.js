var webpack = require('webpack');
var path = require('path');

var reactModule = {

    entry: [
        './chess/just-chess.js'
    ],

    output: {
        filename: 'chess.js',
        path: path.join(__dirname, '../js')
    },

    module : {
        loaders : [
            {
                test : /\.js?/,
                loader: 'babel-loader'
            }
        ]
    }

};

module.exports = [reactModule];