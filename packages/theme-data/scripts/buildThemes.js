/*
  Build themes
  ============

  Write themes in JSON format to the `build/json` directory.
  Each theme goes into a directory named like this: `build/json/colorSchemeDensityTheme`.
  Each theme directory contains four files: `resolvedRoles.json`,
  `unresolvedRoles.json`, `metadata.json`, and `theme.json`.
  `theme.json` contains metadata and resolved roles.

*/

import path from "path";
import fs from "fs";
import mkdirp from "mkdirp";

import colorSchemes from "../src/colorSchemes";
import densities from "../src/densities";
import generateAllThemes from "../src/utils/generateAllThemes";

const buildJSONPath = path.join(process.cwd(), "build/json");
const buildESMPath = path.join(process.cwd(), "build/esm");

function writeJSONFile(dirPath, fileName, data) {
  mkdirp.sync(dirPath);
  fs.writeFileSync(
    path.join(dirPath, `${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
}

function writeESMFile(dirPath, fileName, data) {
  mkdirp.sync(dirPath);

  const exportNames = Object.keys(data).join(", ");
  const fileData = `const themeData = ${JSON.stringify(data, null, 2)};
const { ${exportNames} } = themeData;
export { ${exportNames} };
export default themeData;
`;

  fs.writeFileSync(path.join(dirPath, `${fileName}.js`), fileData);
}

function writeTheme(theme) {
  const { metadata, unresolvedRoles, resolvedRoles } = theme;
  const themeJSONPath = path.join(buildJSONPath, metadata.fileName);

  writeJSONFile(themeJSONPath, "resolvedRoles", resolvedRoles);
  writeJSONFile(themeJSONPath, "unresolvedRoles", unresolvedRoles);
  writeJSONFile(themeJSONPath, "metadata", metadata);
  writeJSONFile(themeJSONPath, "theme", { metadata, resolvedRoles });

  writeESMFile(buildESMPath, metadata.fileName, {
    metadata,
    resolvedRoles
  });

  writeESMFile(path.join(buildESMPath, "unresolved"), metadata.fileName, {
    metadata,
    resolvedRoles,
    unresolvedRoles
  });
}

generateAllThemes(colorSchemes, densities).forEach(writeTheme);
