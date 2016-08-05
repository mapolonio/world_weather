const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('default', function() {
  let b = browserify({
    entries: './public/javascripts/app.js',
    debug: true
  })
  .transform(babelify, {
    presets: ['es2015', 'react'],
    plugins: ['transform-decorators-legacy', 'transform-class-properties']
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('public/javascripts/dist'));
});
