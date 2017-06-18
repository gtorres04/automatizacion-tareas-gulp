var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minjs = require('gulp-uglify');

gulp.task('default', function(){
    console.log("mi primera tarea en gulp");
});

gulp.task('style', function(){
    gulp.src('./src/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('minimification', function(){
    gulp.src('./src/js/*.js')
    .pipe(minjs())
    .pipe(gulp.dest('./build/js'));
});

