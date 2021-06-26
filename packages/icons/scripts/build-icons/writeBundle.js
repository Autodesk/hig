const fs = require("fs");
const capitalizeCamelCase = require('./capitalizeCamelCase');

function stylize(svgName, width, height) {
  return 'props => (\n' +
    '  <ThemeContext.Consumer>\n' +
    '    {({ resolvedRoles }) => {\n' +
    '      let baseProps = {\n' + 
    '        width: "' + width + 'px",\n' + 
    '        height: "' + height + 'px"\n' + 
    '      }\n' +
    '      const propsClone = Object.assign(baseProps, props, { className: cx(css(stylesheet(props, resolvedRoles)), props.className) });\n' +
    '      if (props.stylesheet) delete propsClone.stylesheet;\n' +
    '      return (\n' +
    `        <${svgName} {...propsClone} />\n` +
    '      );\n' +
    '    }}\n' +
    '  </ThemeContext.Consumer>\n' +
    ')\n'
}

function findViewBox(text) {
  return text.match(/viewBox="(\S+?) (\S+?) (\S+?) (\S+?)"/);
}

function getWidth(matches) {
  if (!matches) {
    return null;
  }

  return matches[3];
}

function getHeight(matches) {
  if (!matches) {
    return null;
  }

  return matches[4];
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
    if (svg.size === 'UI') density = 'ui-controls';
    if (svg.size === '12') density = 'size12';
    if (!density) throw new Error(`Invalid size: ${svg.size}`);
    const viewBox = findViewBox(svg.data);
    const width = getWidth(viewBox);
    const height = getHeight(viewBox);

    const svgName = `${capitalized}${svg.size}SVG`
    const svgElement = stylize(svgName, width, height);
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
