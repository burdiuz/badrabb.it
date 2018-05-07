var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS     = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		inject       = require('gulp-inject'),
		uglify       = require('gulp-uglify');

gulp.task('browser-sync', ['styles', 'inject', 'scripts', 'common'], function() {
		browserSync.init({
				proxy: "localhost/Bababbit/",
				notify: false
		});
});

gulp.task('styles', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('build-styles', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
    .pipe(gulp.dest('css'));
});

gulp.task('inject', function () {
	return gulp.src('./header.php')
		.pipe(inject(gulp.src(['./css/header.min.css']), {
			name: 'head',
			transform: function (filePath, file) {
				$result = '<style>';
				$result = $result + file.contents.toString('utf8');
				$result = $result + '</style>';
				return $result
			}
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'./js/jquery-1.11.2.min.js',
		'./js/waypoints.min.js',
		'./js/jquery.nicescroll.min.js',
		'./js/jquery.fancybox.min.js',
		])
		.pipe(concat('libs.js'))
		// .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./js/'));
});

gulp.task('common', function() {
	return gulp.src([
		'./js/common.js',
		])
		.pipe(concat('common.min.js'))
		.pipe(uglify()) // Minify common.js
		.pipe(gulp.dest('./js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('css/header.min.css', ['inject']);
	gulp.watch('js/common.js', ['common']);
	gulp.watch('js/*.js').on("change", browserSync.reload);
	gulp.watch('*.php').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
