'use strict';

const build = require('@microsoft/sp-build-web');
const bundleAnalyzer = require('webpack-bundle-analyzer');
const path = require('path');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);


var getTasks = build.rig.getTasks;
// Font loader configuration for webfonts
const fontLoaderConfig = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts/'
    }
  }]
};

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

/* fast-serve */
const { addFastServe } = require("spfx-fast-serve-helpers");
addFastServe(build);
/* end of fast-serve */

// Merge custom loader to web pack configuration
build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    // Font Loader
    generatedConfiguration.module.rules.push(fontLoaderConfig);
    // WebPack Analyser
    const lastDirName = path.basename(__dirname);
    const dropPath = path.join(__dirname, 'temp', 'stats')
    generatedConfiguration.plugins.push(new bundleAnalyzer.BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.join(dropPath, `${lastDirName}.stats.html`),
      generateStatsFile: true,
      statsFilename: path.join(dropPath, `${lastDirName}.stats.json`),
      logLevel: 'error'
    }));

    //https://webpack.js.org/configuration/devtool/#development
    generatedConfiguration.devtool = 'source-map';
    //https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    // generatedConfiguration.plugins.push(new webpack.SourceMapDevToolPlugin({
    //   append: '\n//# sourceMappingURL=[url]',
    //   filename: '[name].map',
    // }));
    return generatedConfiguration;
  }
});


const postcss = require("gulp-postcss");
const atimport = require("postcss-import");
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwind = require("tailwindcss");
const { log } = require('@microsoft/sp-build-web');


const addTailwindCss = build.subTask(
  "tailwindcss",
  function (gulp, buildOptions, done) {
    console.log("Call Subtask Tailwind");
    gulp
      .src("assets/tailwind.css")
      .pipe(
        postcss([
          atimport(),
          tailwind("./tailwind.config.js"),
          ...(buildOptions.args.ship
            ? [
              purgecss({
                content: ["src/**/*.tsx"],
                defaultExtractor: (content) =>
                  content.match(/[\w-/:]+(?<!:)/g) || [],
              }),
            ]
            : []),
        ])
      )
      .pipe(gulp.dest("assets/dist"));
    done();
  }
);


const watchTailwind = build.watch('src/**/*.tsx', addTailwindCss)

build.task('tailwind', watchTailwind)

build.initialize(require('gulp'));

