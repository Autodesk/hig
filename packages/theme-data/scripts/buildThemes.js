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

const buildPath = path.join(process.cwd(), "build/json");

function writeFile(dirPath, fileName, data) {
  mkdirp.sync(dirPath);
  fs.writeFileSync(
    path.join(dirPath, `${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
}

function writeTheme(theme) {
  const { metadata, unresolvedRoles, resolvedRoles } = theme;
  const themePath = path.join(buildPath, metadata.fileName);

  writeFile(themePath, "resolvedRoles", resolvedRoles);
  writeFile(themePath, "unresolvedRoles", unresolvedRoles);
  writeFile(themePath, "metadata", metadata);
  writeFile(themePath, "theme", { metadata, resolvedRoles });
}

generateAllThemes(colorSchemes, densities).forEach(writeTheme);
