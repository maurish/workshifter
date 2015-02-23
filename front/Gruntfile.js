module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        webpack: {
              someName: {
                    // webpack options
                    entry: "./client/lib/index.js",
                    output: {
                        path: "asserts/",
                        filename: "[hash].js",
                    },

                    stats: {
                        // Configure the console output
                        colors: false,
                        modules: true,
                        reasons: true
                    },
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
              },
              anotherName: {...}
        }
    });

    grunt.registerTask('default', [
        'webpack'
    ]);
};