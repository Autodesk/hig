const fs = require("fs");

function writeBundle(svgs, filePath) {
  const iconBundle = svgs.reduce((acc, svg) => {
    const key = `${svg.title}-${svg.size}`;
    return Object.assign(acc, { [key]: svg.data });
  }, {});

  const bundleData = JSON.stringify(iconBundle);
  fs.writeFileSync(filePath, bundleData);
  // eslint-disable-next-line no-console
  console.log(`Icon bundle created in: ${filePath}`);
}

module.exports = writeBundle;
