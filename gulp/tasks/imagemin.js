module.exports = function(){  
  $.gulp.task('imagemin', function(){
    return  $.gulp.src('src/img/*.{jpg,png,svg}')
		.pipe( $.gp.imagemin())
		.pipe($.gulp.dest('dist/img'))
  });
}
