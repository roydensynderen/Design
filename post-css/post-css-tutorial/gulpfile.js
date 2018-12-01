const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer-core')
const lost = require('lost')
const rucksack = require('rucksack-css')

gulp.task('styles', function() {
	const processors = [ lost, autoprefixer, rucksack ]
	return gulp.src('./src/styles.css').pipe(postcss(processors)).pipe(gulp.dest('./dest'))
})

gulp.task('watch:styles', function() {
	gulp.watch('**/*.css', [ 'styles' ])
})
