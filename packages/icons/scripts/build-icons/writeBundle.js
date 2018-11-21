const fs = require("fs");

function writeBundle(svgs, filePath) {
  const exports = svgs.reduce((acc, svg) => {
    const capitalized = svg.title.split('-').reduce((acc, section) => {
      return acc + section.charAt(0).toUpperCase() + section.slice(1)
    }, '');

    let density;
    if (svg.size === '16') density = 'information-dense';
    if (svg.size === '24') density = 'regular';
    if (!density) throw new Error(`Invalid size: ${svg.size}`);

    const importExport = `\nimport ${capitalized}${svg.size}SVG from './icons/${density}/${svg.title}.svg'`
      + `\nexport const ${capitalized}${svg.size} = ${capitalized}${svg.size}SVG;`;
    return acc + importExport;
  }, 'import React from \'react\';\n');
  fs.writeFileSync(filePath, exports);
  // eslint-disable-next-line no-console
  console.log(`Icon bundle created in: ${filePath}`);
}

module.exports = writeBundle;
