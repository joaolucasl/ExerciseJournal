/* eslint-disable */
'use strict'
/**
 *  NOTE: Using CommonJS' Require instead of ES6's import
 * for retrocompatibility with older Node versions.
 **/
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var rollup = require('gulp-rollup');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

// Rollup's config specific dependencies
var r_babel = require('rollup-plugin-babel');
var r_commonJS = require('rollup-plugin-commonjs');
var r_nodeResolve = require('rollup-plugin-node-resolve');
var r_replace = require('rollup-plugin-replace');

//  Rollup configuration - Based on Qualy Boilerplate's [https://github.com/Qualy-org/qualy-front]
var ROLLUP_CONFIG = {
  plugins: [
    r_babel({
      presets: ['react', 'es2015-rollup'],
      exclude: 'node_modules/**'
    }),
    r_nodeResolve({
      jsnext: true
    }),
    r_commonJS({
      include: 'node_modules/**'
    }),
    r_replace({
      'process.env.NODE_ENV': JSON.stringify(util.env.production ? 'production' : 'development') // We check the environment to update React's source
    })
  ]
};

//  Object to store the paths to later use
var PATHS = {
  source: {
    js: ['src/js/**/*.js', 'src/js/**/*.jsx'],
    jsEntry: 'src/js/app.jsx',
    stylesheets: 'src/scss/**/*.scss',
    views: 'src/views/**/*.html',
    img: 'src/img/**/*'
  },
  build: {
    js: 'build/js/',
    stylesheets: 'build/css/',
    views: 'build/',
    img: 'build/img/'
  }
};

//  JS Build task
gulp.task('js', function () {
  gulp
    .src(PATHS.source.jsEntry)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(rollup(ROLLUP_CONFIG))
    .pipe(concat('app.js'))
    .pipe(util.env.production ? uglify() : util.noop()) //  If production flag set, we uglify. If not, go ahead
    .pipe(gulp.dest(PATHS.build.js));
});
//  CSS Build task
gulp.task('css', function () {
  gulp
    .src(PATHS.source.stylesheets)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(util.env.production ? cssnano() : util.noop()) //  If production flag set, we use CSS nano. If not, go ahead
    .pipe(gulp.dest(PATHS.build.stylesheets));
});
//  Views build task
gulp.task('html', function () {
  return gulp.src(PATHS.source.views)
    .pipe(gulp.dest(PATHS.build.views));
});

gulp.task('img', () => {
  gulp.src(PATHS.source.img)
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(PATHS.build.img));
});
gulp.task('watch', function () {
  gulp.watch(PATHS.source.js, ['js']);
  gulp.watch(PATHS.source.stylesheets, ['css']);
  gulp.watch(PATHS.source.views, ['html']);
  gulp.watch(PATHS.source.img, ['img']);
});

gulp.task('default',['js','css','html','img']);