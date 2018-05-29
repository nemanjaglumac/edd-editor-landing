'use strict';

import path from 'path';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
var ghPages = require('gulp-gh-pages');


var data = require('gulp-data');

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  return gulp.src([
    'source/scss/**/*.scss',
    'source/scss/**/*.css'
  ])
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    // Concatenate and minify styles
    .pipe($.size({title: 'styles'}))
    .pipe(gulp.dest('dist/styles'));
});


// Scan your HTML for assets & optimize them
gulp.task('html', () => {
  return gulp.src('source/templates/**/*.+(html|njk)')
    .pipe(data(function() {
      return require('./source/data.json')
    }))
    .pipe($.nunjucksRender({
      path: ['source/templates/'] // String or Array
    }))
    .pipe($.size({title: 'html', showFiles: true}))
    .pipe(gulp.dest('dist'));
});


// Scan your images folder for assets and minify them
gulp.task('images', () => {
  return gulp.src('source/images/**/*.+(png|jpg|gif|svg)')
    // .pipe($.imagemin({
    //   path: ['source/images']
    // }))
    .pipe(gulp.dest('dist/images'))
});


// Watch files for changes & reload
gulp.task('default', ['styles', 'html', 'images'], () => {
  browserSync({
    notify: false,
    server: ['dist'],
    port: 3000
  });

  gulp.watch(['source/templates/**/*.+(html|njk)'], ['html', reload]);
  gulp.watch(['source/scss/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['source/images/**/*'], reload);
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
