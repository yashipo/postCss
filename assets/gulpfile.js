var gulp = require('gulp');

// インストールしたプラグインを読み込む
gulp.task('build', function () {
    var sourcemaps = require('gulp-sourcemaps');
    var postcss = require('gulp-postcss');
    var customProperties = require('postcss-custom-properties');
    var nested = require('postcss-nested');
    var Import = require('postcss-import');
    var autoprefixer = require('autoprefixer');
    var rename = require("gulp-rename");
    var cssnano = require('cssnano');
    
    var preprocessors = [
        Import
        , customProperties
        , nested
    ];

    var postprocessors = [
        autoprefixer
        , cssnano
    ];

    // 編集するCSS
    return gulp.src('./css/common.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(preprocessors))
        .pipe(postcss(postprocessors))
        .pipe(rename('common.css'))
        // .pipe(sourcemaps.write('.'))
        //出力先
        .pipe(gulp.dest('../css'));
});
