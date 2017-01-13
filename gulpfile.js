var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');
var path = require('path');
 
gulp.task('svgstore', function () {
    return gulp
        .src('src/graphics/svg/**/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: false
                    }
                }]
            }
        }))
        .pipe(svgstore({
            
        }))
        .pipe(rename('graphics.svg'))
        .pipe(gulp.dest('src/assets'));
});