import gulp from "gulp";
import cp from "child_process";
import gutil from "gulp-util";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import svgstore from "gulp-svgstore";
import svgmin from "gulp-svgmin";
import inject from "gulp-inject";
import replace from "gulp-replace";
import cssnano from "cssnano";
import watch from "gulp-watch";

const browserSync = BrowserSync.create();
const hugoBin = "hugo";

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["css", "js", "cms"], (cb) => buildSite(cb, [], "production"));
gulp.task("build-preview", ["css", "js", "cms"], (cb) => buildSite(cb, hugoArgsPreview, "production"));

gulp.task("cms", () => {
  const match = process.env.REPOSITORY_URL ? process.env.REPOSITORY_URL : cp.execSync("git remote -v", {encoding: "utf-8"});
  let repo = null;
  match.replace(/github.com:(\S+)(\.git)?/, (_, m) => {
    repo = m.replace(/\.git$/, "");
  });
  gulp.src("./src/cms/*")
    .pipe(replace("<% GITHUB_REPOSITORY %>", repo))
    .pipe(gulp.dest("./dist/admin"))
    .pipe(browserSync.stream());
});

// Compile CSS with PostCSS
gulp.task("css", () => (
  gulp.src("./src/css/*.css")
    .pipe(postcss([
      cssImport({from: "./src/css/main.css"}),
      cssnext(),
      cssnano(),
    ]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
));

// Compile Javascript
gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
});

gulp.task("svg", () => {
  const svgs = gulp
    .src("site/static/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src("site/layouts/partials/svg.html")
    .pipe(inject(svgs, {transform: fileContents}))
    .pipe(gulp.dest("site/layouts/partials/"));
});

// Development server with browsersync
gulp.task("server", ["hugo", "css", "js", "svg", "cms"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  watch("./src/js/**/*.js", ["js"]);
  watch("./src/css/**/*.css", ["css"]);
  watch("./src/cms/*", ["cms"]);
  watch("./site/static/img/icons/*.svg", ["svg"]);
  watch("./site/**/*", ["hugo"]);
});

gulp.task("generate-service-worker", function(callback) {
  var swPrecache = require("sw-precache");
  var rootDir = "dist";

  swPrecache.write(
    `${rootDir}/service-worker.js`,
    {
      staticFileGlobs: [
        rootDir + "/**/*.{js,html,xml,css,png,jpg,gif,svg,eot,ttf,woff}"
      ],
      stripPrefix: rootDir
    },
    callback
  );
});

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload("notify:false");
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
