module.exports = function(){  
  $.gulp.task('scripts', function(){
    return $.gulp.src('src/js/**/*.js')
           .pipe($.gp.concat('script.js'))
           .pipe($.gp.sourcemaps.init())
           .pipe($.gp.uglify())
           .pipe($.gp.jsMinify())
            .pipe($.gp.rename({
              extname: '.min.js'
            })
            )
            .pipe($.gp.sourcemaps.write())
		       .pipe($.gulp.dest('dist/js/'))
  });
}