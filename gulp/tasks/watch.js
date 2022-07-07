module.exports = function(){
  $.gulp.task('watch', function(){
		$.gulp.watch('src/scss/**/*.scss', $.gulp.series('styles'));
    $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('*.html').on("change", $.bs.reload);
    $.gulp.watch('src/scss/**/*.scss').on("change", $.bs.reload);
    $.gulp.watch('src/js/**/*.js').on("change", $.bs.reload);
});
}