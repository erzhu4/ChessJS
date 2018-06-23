var webpack = require('webpack');
var path = require('path');

var reactModule = {

    entry: [
        './assets/jsx/portfolio-react.jsx'
    ],

    output: {
        filename: 'portfolio-react.js',
        path: path.join(__dirname, '../js')
    },

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel-loader'
            }
        ]
    }

};

module.exports = [reactModule];