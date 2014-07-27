var shell = require("shelljs");

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ";"
			},
			dist: {
				src: [
					"bower_components/respond/dest/respond.js",
					"bower_components/jquery/dist/jquery.js",
					"bower_components/smooth-scroll.js/smooth-scroll.js",
					"bower_components/jquery.stellar/jquery.stellar.js",
					"js/main.js"
				],
				dest: "js/skeleton.js"
			},
		},
		uglify: {
			dist: {
				files: {
					"js/skeleton.min.js": ["js/skeleton.js"]
				}
			},
		},
		sass: {
			dist: {
				options: {
					style: "compressed",
					precision: 5
				},
				files: {
					"skeleton.css": "bower_components/skeleton-sass/skeleton.scss"
				}
			},
			development: {
				options: {
					style: "expanded",
					precision: 5,
					lineNumbers: true
				},
				files: {
					"skeleton.css": "bower_components/skeleton-sass/skeleton.scss"
				}
			}
		},
		watch: {
			css: {
				files: ["bower_components/skeleton-sass/skeleton.scss"],
				tasks: ["sass:development"]
			},
			js: {
				files: ["js/skeleton.js"],
				tasks: ["compile-js"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ["concat:dist", "uglify:dist", "sass:dist"]);
	grunt.registerTask("watch-js", ["watch:js"]);
	grunt.registerTask("watch-css", ["watch:css"]);
	grunt.registerTask("compile-js", ["concat:dist", "uglify:dist"]);
	grunt.registerTask("compile-css", ["sass:development", "sass:dist"]);

};
