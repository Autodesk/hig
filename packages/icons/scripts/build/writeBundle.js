const path = require('path');
const fs = require('fs');

function writeBundle(svgs, buildDir, fileName) {
  const iconBundle = svgs.reduce((acc, svg) => {
    const key = `${svg.title}-${svg.size}`;
    return Object.assign(acc, { [key]: svg.data });
  }, {});
  const filePath = path.join(buildDir, fileName);
  const bundleData = JSON.stringify(iconBundle);

  fs.writeFileSync(filePath, bundleData);
}

module.exports = writeBundle;