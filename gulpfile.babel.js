import gulp from 'gulp';
import path from 'path';
import rename from 'gulp-rename';
import template from 'gulp-template';
import yargs from 'yargs';
 // process.argv
let resolveToComponents = (glob = '') => {
  return path.join('client', 'app/components', glob); // app/components/{glob}
};

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;

  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(path.join(__dirname, 'generator', 'component/**/*.**'))
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((rpath) => {
      rpath.basename = rpath.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});
