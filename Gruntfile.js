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
				src:'styles/*.css',
				dest: 'public/style.min.css'
			}
		}

	});

	//Load files
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['clean', 'concat', 'sass']);
};
