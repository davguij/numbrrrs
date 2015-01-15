'use strict';

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function() {
    return gulp.src("./dist/**/*")
        .pipe(deploy())
});
