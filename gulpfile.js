"use strict";

global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  bs: require('browser-sync').create(),
  fs: require("fs"),
  path: {
    tasks: require('./gulp/config/tasks.js')
  } 
};

  $.path.tasks.forEach(function(taskPath){
    require(taskPath)();
  });

function createFiles () {
  setTimeout(() => {
    $.fs.writeFile("index.html","!", function (err) {
       if (err) {
         throw err;
       }
       console.log("File index.html created");
     });
     $.fs.writeFile("src/scss/style.scss","", function (err) {
       if (err) {
         throw err;
       }
       console.log("File style.scss created");
     });     
   }, 500);

  return createFolders();
}

function createFolders () {
  return $.gulp.src("*.*",{read:false})
        .pipe($.gulp.dest("./src"))
        .pipe($.gulp.dest("./src/scss"))
        .pipe($.gulp.dest("./src/js"))
        .pipe($.gulp.dest("./src/img"))
        .pipe($.gulp.dest("./src/fonts"));
}

function cleanFiles() {
  return $.gulp.src('dist/*', {read: false})
    .pipe($.gp.clean());
}

function moveFiles(){
  return $.gulp.src('src/fonts/*')
  .pipe($.gulp.dest('dist/fonts'));
}

$.gulp.task('dev', $.gulp.series(
  $.gulp.parallel('stylesDev', 'scripts'), 
  $.gulp.parallel('watch', 'serve')
  ));


 $.gulp.task('build', $.gulp.series(
    cleanFiles,
    moveFiles,
    $.gulp.parallel('imagemin','styles', 'scripts')
    ));

exports.struct = createFiles;