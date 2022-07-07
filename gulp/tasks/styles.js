module.exports = function(){
	const sass = $.gp.sass(require('sass'));
  $.gulp.task('styles', function(){
    return $.gulp.src('src/scss/style.scss')
           .pipe($.gp.sourcemaps.init())
		       .pipe(sass().on('error', sass.logError))
           .pipe( $.gp.autoprefixer({
            cascade: false
            }))
            .pipe($.gp.cleanCss())
            .pipe($.gp.rename({
              extname: '.min.css'
            })
            )
            .pipe($.gp.sourcemaps.write())
		       .pipe($.gulp.dest('dist/css/'))
  });
}