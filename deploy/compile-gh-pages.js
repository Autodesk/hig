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
const rootDir = path.resolve(__dirname + "/../");

const testsGlob = rootDir + "/src/**/tests/*.html"
const templatePath = thisDir + "/index.template.html"

const indexMustacheTemplate = fs.readFileSync(templatePath, {encoding: 'utf8'});

const indexOutputPath = rootDir + "/index.html";

/**
 * Returns a string with the fully rendered template. Synchronous.
 *
 **/

glob(testsGlob, (er, files) => {
  var testList = { testLinks: [] };

  files.forEach(function(filePath) {
    var newFilePath = "/" + path.relative(rootDir, filePath);
    var title = path.parse(filePath).base.replace("test-", "");
    testList.testLinks.push(
      { href: newFilePath, title: title }
    )
  });

  const rendered = mustache.render(indexMustacheTemplate, testList);

  // clobber the old index.html
  const fd = fs.openSync(indexOutputPath, 'w');
  const bytesWritten = fs.writeSync(fd, rendered);

  if (bytesWritten == 0) {
    fs.closeSync(fd);
    throw new Error("Could not write to " + indexOutputPath);
  }

  fs.closeSync(fd);

  // the deploy script will finish up if it is running this script.
});


