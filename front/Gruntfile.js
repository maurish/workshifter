module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        webpack: {
              dist: {
                    // webpack options
                    entry: "./client/lib/index.js",
                    output: {
                        path: "assets/",
                        filename: "[hash].js",
                    },

                    stats: {
                        // Configure the console output
                        colors: false,
                        modules: true,
                        reasons: true
                    },
                    cache: false,
                    // stats: false disables the stats output

                    storeStatsTo: "xyz", // writes the status to a variable named xyz
                    // you may use it later in grunt i.e. <%= xyz.hash %>

                    progress: false, // Don't show progress
                    // Defaults to true

                    failOnError: false, // don't report error to grunt if webpack find errors
                    // Use this if webpack errors are tolerable and grunt should continue

                    watch: true, // use webpacks watcher
                    // You need to keep the grunt process alive

                    keepalive: true, // don't finish the grunt task
                    // Use this in combination with the watch option
              }
        },
        "webpack-dev-server": {
            options: {
                hot: true,
                webpack: require('./webpack.config.js'),
                port: 8081,
                publicPath: '/assets/',
                contentBase: './src/'
            },
            start: {
                keepAlive: true
            }
        },
        open: {
            options: {
                delay: 500
            },
            dev: {
                path: 'http://localhost:8081/webpack-dev-server/'
            }
        }
    });

    grunt.registerTask('default', [
        'webpack'
    ]);
    grunt.registerTask('server', [
        'open',
        'webpack-dev-server:start'
    ]);
};