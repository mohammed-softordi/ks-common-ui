var gulp = require('gulp'),
    remoteSrc = require('gulp-remote-src'),
    argv = require('yargs').argv,
    replace = require('gulp-replace'),
    fs = require('fs'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    postcss = require('postcss'),
    postcssimport = require('postcss-import'),
    rimraf = require('rimraf'),
    basePathAssetsCss= './assets/css',
    basePathAssetsJs= './assets/js';

gulp.task('fetch-bootstrap', function () {
    return remoteSrc('bootstrap-org.css', {
        base: 'https://static.scania.com/vendors/frameworks/bootstrap/3.2.0/dist/css/'
    })
        .pipe(rename('bootstrap.css'))
        .pipe(gulp.dest(basePathAssetsCss + '/bootstrap'));
});

gulp.task('fetch-font-awesome-pro', function() {
    return remoteSrc([
        'all.min.css',
        'v4-shims.min.css'
    ], {
        base: 'https://d31jnweo1ynb8u.cloudfront.net/resources/icons/font-awesome/5.3.1/css/'
    })
        .pipe(gulp.dest(basePathAssetsCss + '/font-awesome/src'))
        .pipe(gulp.src(basePathAssetsCss + '/font-awesome/src/**/*.css'))
        .pipe(concat('font-awesome.css'))
        .pipe(gulp.dest(basePathAssetsCss +'/font-awesome/dist/'));;
});

gulp.task('fetch-corporate-ui-css', function() {
    var corporateUIVersion = argv.cuiversion || '3.5.2';

    return remoteSrc(['corporate-ui.css', 'core.css'], {
        base: 'https://d31jnweo1ynb8u.cloudfront.net/build/global/' + corporateUIVersion + '/css/'
    })
        .pipe(replace('\'/resources/' , '\'https://static.scania.com/resources/'))
        .pipe(gulp.dest(basePathAssetsCss + '/corporate-ui'));
});

gulp.task('fetch-scania-fonts', function () {
    return remoteSrc([
        'logotype/scania/logotype-stylesheet/scania-logotype.css',
        'fonts/scania-sans/scania-fonts.css',
        'fonts/font-awesome/font-awesome.css',
        'icons/scania/icons.css',
    ], {
        base: 'https://static.scania.com/resources/'
    })
        .pipe(replace('\'/resources/' , '\'https://static.scania.com/resources/'))
        .pipe(gulp.dest('./tmp/css/fonts/'))
        .pipe(gulp.src('./tmp/css/fonts/**/*.css'))
        .pipe(concat('corporate-ui-fonts.css'))
        .pipe(gulp.dest(basePathAssetsCss + '/corporate-ui'));;
});

gulp.task('fetch-vendors', function () {
   return remoteSrc([
        'components/jQuery/select2/3.5.2/css/select2.css'
    ], {
        base: 'https://static.scania.com/vendors/'
    })
        .pipe(replace('\'/resources/' , '\'https://static.scania.com/resources/'))
        .pipe(gulp.dest('./tmp/css/vendors'))
        .pipe(gulp.src('./tmp/css/vendors/**/*.css'))
        .pipe(concat('corporate-ui-vendors.css'))
        .pipe(gulp.dest(basePathAssetsCss + '/corporate-ui'));
});

gulp.task('build-bootstrap-module', function (done) {
    var options = {
      from: basePathAssetsCss + '/bootstrap/bootstrap.css',
      to: './tmp/css/bootstrap/bootstrp.css',
      map: { inline: true }
    },
    file = {
        name: 'bootstrap',
        destination: basePathAssetsJs + '/bootstrap/'
    };
    _cssModuleBuilder(file, options, done);
});

gulp.task('build-font-awesome-module', function (done) {
    var options = {
      from: basePathAssetsCss + '/font-awesome/dist/font-awesome.css',
      to: './tmp/css/font-awesome/font-awesome.css',
      map: { inline: true }
    },
    file = {
        name: 'font-awesome',
        destination: basePathAssetsJs + '/font-awesome/'
    };
    _cssModuleBuilder(file, options, done);
});

gulp.task('build-corporate-ui-module', function (done) {
    var options = {
      from: basePathAssetsCss + '/corporate-ui/core.css',
      to: './tmp/css/corporate-ui/core.css',
      map: { inline: true }
    },
    file = {
        name: 'corporate-ui',
        destination: basePathAssetsJs + '/corporate-ui/'
    };
    _cssModuleBuilder(file, options, done);
});

gulp.task('build-corporate-ui-fonts-module', function (done) {
    var options = {
      from: basePathAssetsCss + '/corporate-ui/corporate-ui-fonts.css',
      to: './tmp/css/corporate-ui/corporate-ui-fonts.css',
      map: { inline: true }
    },
    file = {
        name: 'corporate-ui-fonts',
        destination: basePathAssetsJs + '/corporate-ui'
    };
    _cssModuleBuilder(file, options, done);
});

gulp.task('build-corporate-ui-vendors-module', function (done) {
    var options = {
      from: basePathAssetsCss + '/corporate-ui/corporate-ui-vendors.css',
      to: './tmp/css/corporate-ui/corporate-ui-vendors.css',
      map: { inline: true }
    },
    file = {
        name: 'corporate-ui-vendors',
        destination: basePathAssetsJs + '/corporate-ui/'
    };
    _cssModuleBuilder(file, options, done);
});

gulp.task('clear-tmp', function (done) {
    rimraf('./tmp', done);
});

gulp.task('fetch', gulp.series([
    'fetch-bootstrap',
    'fetch-font-awesome-pro',
    'fetch-scania-fonts',
    'fetch-vendors',
    'fetch-corporate-ui-css'
]));

gulp.task('build', gulp.series([
    'build-corporate-ui-module',
    'build-corporate-ui-fonts-module',
    'build-corporate-ui-vendors-module',
    'build-bootstrap-module',
    'build-font-awesome-module'
]));

gulp.task('default', gulp.series([
    'fetch',
    'build',
    'clear-tmp'
]));

function _cssModuleBuilder(file, options, done) {
   var css = fs.readFileSync(options.from, 'utf-8'),
    name = file.name,
    dest = file.destination;
    // Removed Octal escape sequences in template string. For example: content: "\2a"; => content: "\\2a";
    css = css.replace(/\\/g, '\\\\');
    postcss([postcssimport])
    .process(css, options)
    .then(function(result) {
      gulp.src('helpers/css-module.template.js')
        .pipe(replace(/{%style-module%}/ ,
            '<dom-module id="'+ name +'"><template><style>' + result + '</style></template></dom-module>'))
        .pipe(rename(name + '.js'))
        .pipe(gulp.dest(dest))
        .on('end', done);
    }, function(error) {
      console.log(error);
      done();
    });
}