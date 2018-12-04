const fs = require("fs");
const capitalizeCamelCase = require('./capitalizeCamelCase');

function writeBundle(svgs, filePath) {
  const exports = svgs.reduce((acc, svg) => {
    const capitalized = capitalizeCamelCase(svg.title);

    let density;
    if (svg.size === '16') density = 'information-dense';
    if (svg.size === '24') density = 'regular';
    if (!density) throw new Error(`Invalid size: ${svg.size}`);

    const importModule = `import ${capitalized}${svg.size}SVG from "./icons/${density}/${svg.title}.svg";\n`;
    const exportModule = `export const ${capitalized}${svg.size} = ${capitalized}${svg.size}SVG;\n`;
    return importModule + acc + exportModule;
  }, 'import names from "./release/hig-icon-names.json";\n' +
    'import sets from "./release/hig-icon-sets.json";\n' +
    'import { sizes, AVAILABLE_SIZES } from "./sizes";\n\n' +
    'const AVAILABLE_NAMES = Object.freeze(Object.values(names));\n' +
    'export { AVAILABLE_NAMES, names, sets, sizes, AVAILABLE_SIZES };\n\n'
  );
  fs.writeFileSync(filePath, exports);
  // eslint-disable-next-line no-console
  console.log(`Icon bundle created in: ${filePath}`);
}

module.exports = writeBundle;
