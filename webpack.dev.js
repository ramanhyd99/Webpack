const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')
const path = require('path')

module.exports = merge(commonConfig, {
    mode: 'development',

    //dev server configuration
    //useful while development so that we don't need to run
    //build each time

    devtool: 'inline-source-map',
    devServer: {
        //specify folder where the static assets apart from the ones 
        //webpack will build will be located inside.
        static: path.resolve(__dirname, "dist"),
        port: 5001, //default 8080
        //opens default browser for us
        open: true,
        //looks for any changes and reloads them so that we don't need 
        //to run the server again and again
        hot: true
    }
})