module.exports = function(grunt){
//jshint, concat, uglify, sass
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all:['js/*.js']
		},
		clean:['public', 'public'],
		concat: {
				index:{
					src:['index.html'],
					dest:'public/index.html'
				},
				js: {
					src: ['js/*.js', 'node_modules/jquery/dist/jquery.min.js'],
					dest: 'public/production.js'
				}
		},
		sass: {
			dist: {
				files:[{
					expand: true, //specify a directory
					cwd: 'styles', //current working directory
					src: ['*.scss'],
					dest: 'styles',
					ext: '.css'
				}]
			}
		},
		uglify: {
			build:{
				src:'public/*.js',
				dest: 'public/production.min.js'
			}
		}

	});

	//Load files
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['jshint', 'sass']);
};
