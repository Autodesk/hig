const fs = require("fs");
const capitalizeCamelCase = require('./capitalizeCamelCase');

function stylize(svgName) {
  return 'props => (\n' +
    '  <ThemeContext.Consumer>\n' +
    '    {({ resolvedRoles }) => {\n' +
    '      const propsClone = Object.assign({}, props, { className: cx(css(stylesheet(resolvedRoles)), props.className) });\n' +
    '      return (\n' +
    `        <${svgName} {...propsClone} />\n` +
    '      );\n' +
    '    }}\n' +
    '  </ThemeContext.Consumer>\n' +
    ')\n'
}

function writeBundle(svgs, filePath) {
  const imports = [
    '/* eslint-disable */',
    'import { cx, css } from "emotion";',
    'import React from "react";',
    'import { ThemeContext } from "@hig/theme-context";',
    'import stylesheet from "./icon.stylesheet";',
  ];
  fs.writeFileSync(filePath, imports.join("\n") + "\n");

  const statements = svgs.reduce((acc, svg) => {
    const capitalized = capitalizeCamelCase(svg.title);

    let density;
    if (svg.size === '16') density = 'information-dense';
    if (svg.size === '24') density = 'regular';
    if (!density) throw new Error(`Invalid size: ${svg.size}`);

    const svgName = `${capitalized}${svg.size}SVG`
    const svgElement = stylize(svgName);
    const importModule = `import ${svgName} from "./icons/${density}/${svg.title}.svg";\n`;
    const exportModule = `export const ${capitalized}${svg.size} = ${svgElement}\n`;
    return importModule + acc + exportModule;
  }, 'import names from "./release/hig-icon-names.json";\n' +
    'import sets from "./release/hig-icon-sets.json";\n' +
    'import { sizes, AVAILABLE_SIZES } from "./sizes";\n\n' +
    'const AVAILABLE_NAMES = Object.freeze(Object.values(names));\n' +
    'export { AVAILABLE_NAMES, names, sets, sizes, AVAILABLE_SIZES };\n\n'
  );
  fs.appendFileSync(filePath, statements);
  fs.appendFileSync(filePath, '/* eslint-enable */\n');
  // eslint-disable-next-line no-console
  console.log(`Icon bundle created in: ${filePath}`);
}

module.exports = writeBundle;
