var gulp = require('gulp'); 
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var watch = require('gulp-watch');



gulp.task('sass', function () { 
return gulp.src('assets/sass/style.scss') 
.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
.pipe(cleanCSS())
.pipe(gulp.dest('dist/css/')); });

  gulp.task('watch', function() {
    gulp.watch('assets/sass/*.scss', gulp.series('sass'));
  });