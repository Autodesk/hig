/**
 * Searches for any html files inside of a src/.../tests directory,
 * generates a title and a URI for each,
 * then uses a mustache template to generate an index.html with links
 * which is to be used in the github pages.
 *
 * You can view this locally by running this script with 'npm run compile-gh',
 * then launch http-server from the root, and view localhost in your browser.
 *
 */
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const mustache = require('mustache');

const thisDir = __dirname;
const rootDir = path.resolve(`${__dirname}/../`);

const testsGlob = `${rootDir}/src/**/tests/test*.html`;
const templatePath = `${thisDir}/index.template.html`;

const indexMustacheTemplate = fs.readFileSync(templatePath, {
  encoding: 'utf8'
});

const indexOutputPath = `${rootDir}/index.html`;

/**
 * Returns a string with the fully rendered template. Synchronous.
 *
 * */

glob(testsGlob, (er, files) => {
  const testLinks = files
    .map((filePath) => {
      const newFilePath = path.relative(rootDir, filePath);
      const title = path
        .basename(filePath, '.html')
        .replace(/test(s)?-/, '')
        .replace(/-/g, ' ');
      return { href: newFilePath, title };
    })
    .sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA > titleB) {
        return 1;
      } else if (titleA < titleB) {
        return -1;
      }
      return 0;
    });

  const rendered = mustache.render(indexMustacheTemplate, { testLinks });

  // clobber the old index.html
  const fd = fs.openSync(indexOutputPath, 'w');
  const bytesWritten = fs.writeSync(fd, rendered);

  if (bytesWritten === 0) {
    fs.closeSync(fd);
    throw new Error(`Could not write to ${indexOutputPath}`);
  }

  fs.closeSync(fd);

  console.log('Finished generating test index.html');
});
