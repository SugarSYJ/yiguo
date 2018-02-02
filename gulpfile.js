var gulp = require('gulp');
var sass = require('gulp-sass');
// 创建一个gulp任务：编译sass
gulp.task('compileSass',function(){
	// 查找sass文件
	gulp.src('./src/sass/*.scss')
	// 编译
	.pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))						//编译后的文件流 css
	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))
});
// 创建文件监听任务：文件有修改，则自动编译
gulp.task('jtSass',function(){
	// 当文件有修改，则执行complieSass任务
	gulp.watch('./src/sass/*.scss',['compileSass'])
});