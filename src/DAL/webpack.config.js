'use strict'

module.exports = {
    entry: "./index.js",
    output: {
        filename: "build.js",
        library: "home"
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map",

}