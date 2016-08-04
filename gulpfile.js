const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('public/javascripts/app.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('public/javascripts/dist'));
  // place code for your default task here
});
