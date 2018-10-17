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
import camelcase from "camelcase";
import fs from "fs";
import mkdirp from "mkdirp";

import extendTheme from "../src/utils/extendTheme";
import resolveRoles from "../src/utils/resolveTheme";

import lightGrayTheme from "../src/colorSchemes/lightGray";
import webLightTheme from "../src/colorSchemes/webLight";
import darkBlueTheme from "../src/colorSchemes/darkBlue";
import mediumDensityTheme from "../src/densities/mediumDensity";
import highDensityTheme from "../src/densities/highDensity";

const buildPath = path.join(process.cwd(), "build/json");
const colorSchemes = [lightGrayTheme, darkBlueTheme, webLightTheme];
const densities = [mediumDensityTheme, highDensityTheme];

function resolveTheme(colorScheme, density) {
  const unresolvedRoles = extendTheme(
    colorScheme.unresolvedRoles,
    density.unresolvedRoles
  );
  const resolvedRoles = resolveRoles(unresolvedRoles);
  const themeName = camelcase([colorScheme.name, density.densityName, "Theme"]);
  const metadata = { ...colorScheme, ...density };
  delete metadata.resolvedRoles;
  delete metadata.unresolvedRoles;

  return {
    themeName,
    metadata,
    resolvedRoles,
    unresolvedRoles
  };
}

function writeFile(dirPath, fileName, data) {
  mkdirp.sync(dirPath);
  fs.writeFileSync(
    path.join(dirPath, `${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
}

function writeTheme({ themeName, resolvedRoles, unresolvedRoles, metadata }) {
  const themePath = path.join(buildPath, themeName);

  writeFile(themePath, "resolvedRoles", resolvedRoles);
  writeFile(themePath, "unresolvedRoles", unresolvedRoles);
  writeFile(themePath, "metadata", metadata);
  writeFile(themePath, "theme", { ...metadata, resolvedRoles });
}

colorSchemes.forEach(colorScheme => {
  densities.forEach(density => {
    writeTheme(resolveTheme(colorScheme, density));
  });
});
