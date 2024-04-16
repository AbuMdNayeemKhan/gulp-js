const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
gulp.task('sample', ()=>{
    return gulp.src('./src/scss/main.css')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});