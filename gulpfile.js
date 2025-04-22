const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');

gulp.task('js', function() {
    return gulp.src('script.js')  
        .pipe(uglify())  
        .pipe(gulp.dest('dist/js'))  
        .pipe(browserSync.stream());  
});

gulp.task('css', function() {
    return gulp.src('style.css') 
        .pipe(cssnano())  
        .pipe(gulp.dest('dist/css'))  
        .pipe(browserSync.stream());  
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './' 
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);  
    gulp.watch('*.js', gulp.series('js'));  
    gulp.watch('*.css', gulp.series('css'));  
});

gulp.task('default', gulp.series('js', 'css', 'serve'));