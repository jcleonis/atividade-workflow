var gulp       = require("gulp");
var sass 	   = require("gulp-sass");
var htmlminify = require("gulp-html-minify");

var filescss   = "./source/scss/**/*.scss";
var filehtml   = "./source/**/*.html";

gulp.task("move-css",function(){
	return gulp.src(filescss)
				.pipe(sass({outputStyle: 'compressed'}))
				.on('Error de compilacao do CSS', sass.logError)
				.pipe(gulp.dest('./dist/css'));
});

gulp.task('move-html',function(){
	return gulp.src(filehtml)
			.pipe(htmlminify())
			.pipe(gulp.dest('./dist'))
});

gulp.task('default',function(){
	gulp.watch(filescss,['move-css']);
	gulp.watch(filehtml,['move-html']);
});