'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

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

const postcss = require("gulp-postcss");
const atimport = require("postcss-import");
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwind = require("tailwindcss");
const { log } = require('@microsoft/sp-build-web');


const addTailWindCss = build.subTask(
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


const watchTailwind = build.watch('src/**/*.tsx', addTailWindCss )

let WatchTailwind = build.task('tailwind', watchTailwind)


build.initialize(require('gulp'));

