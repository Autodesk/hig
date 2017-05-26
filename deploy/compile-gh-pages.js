/**
 * Searches for any html files inside of a src/.../tests directory,
 * generates a title and a URI for each,
 * then uses a mustache template to generate an index.html with links
 * which is to be used in the github pages.
 *
 * You can view this locally by running this script with 'npm run gen-gh',
 * then launch http-server from the root, and view localhost in your browser.
 *
 */
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const mustache = require('mustache');

const indexMustacheTemplate = fs.readFileSync("./index.template.html", {encoding: 'utf8'});
const indexOutputFilename = "../index.html";

/**
 * Returns a string with the fully rendered template. Synchronous.
 *
 **/

glob("../src/**/tests/*.html", (er, files) => {
  var testList = { testLinks: [] };

  files.forEach(function(filePath) {
    var newFilePath = filePath.replace("..", "");
    var title = path.parse(filePath).base.replace("test-", "");
    testList.testLinks.push(
      { href: newFilePath, title: title }
    )
  });

  const rendered = mustache.render(indexMustacheTemplate, testList);

  // clobber the old index.html
  const fd = fs.openSync(indexOutputFilename, 'w');
  const bytesWritten = fs.writeSync(fd, rendered);

  if (bytesWritten == 0) {
    fs.closeSync(fd);
    throw new Error("Could not write to " + indexOutputFilename);
  }

  fs.closeSync(fd);

  // the deploy script will finish up if it is running this script.
});


