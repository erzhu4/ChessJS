var webpack = require('webpack');
var path = require('path');

var reactModule = {

    entry: [
        './main-chess.jsx'
    ],

    output: {
        filename: 'chess.js',
        path: path.join(__dirname, '../js'),
        library: 'zChess',
        libraryTarget: 'commonjs2',   
        publicPath: '/js/',      
        umdNamedDefine: true 
    },

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {      
        alias: {          
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }  
    },
    externals: {      
        // Don't bundle react or react-dom      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    } 

};

module.exports = [reactModule];