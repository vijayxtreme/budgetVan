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
		imagemin: {
			dynamic:{
				files:[{
					expand:true,
					cwd: '.',
					src: ['img/*.{png,jpg}'],
					dest:'public/'
				}]
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'styles',
		      src: ['*.css', '!*.min.css'],
		      dest: 'public/styles/',
		      ext: '.min.css'
		    }]
		  }
		}

	});

	//Load files
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['clean', 'concat', 'sass', 'imagemin','cssmin']);
};
