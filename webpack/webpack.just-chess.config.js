var webpack = require('webpack');
var path = require('path');

var reactModule = {

    entry: [
        './index.js'
    ],

    output: {
        filename: 'index.js',
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