//nodejs syntax to import built-in 'path' module
const path = require('path')
//needed for injecting the JS, CSS, etc into the starting HTML page
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // - tells webpack where to begin 
    // - can have multiple entry points for large projects
    // - always use absolute path as we have writes involved
    entry: {
        main: path.resolve(__dirname, "js/first.js")
    },

    // - tells webpack where to put the files after it builds them
    output: {
        path: path.resolve(__dirname, "dist"),
        //creates filename with new hash if there is any change so that the
        //browser gets new version (default is main.js)
        filename: '[name][contenthash].bundle.js',
        //remove the previous files else dist grows large
        clean: true,
        //configure how the images will be named 
        //(default setting uses hashes.ext)
        assetModuleFilename: '[name][ext]'

    },

    //loaders
    module: {
        rules: [
            //css
            {
                test: /\.css$/,
                //Important: order of execution is right to left
                use: ['style-loader', 'css-loader']
            },
            //images
            {
                test: /\.(png|ico|jpg|jpeg|gif)$/,
                //built-in with Webpack5 for assets like images
                type: "asset/resource"
            },
            //babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    //plugins
    plugins: [new HtmlWebpackPlugin({
        title: "Raman's page",
        //we can specify which html page to use as base
        //it is into this file that the js will get injected
        template: path.resolve(__dirname, "index.html"),
    })
    ]
}