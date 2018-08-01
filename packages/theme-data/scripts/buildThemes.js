import path from "path";
import fs from "fs";

import extendTheme from "../src/utils/extendTheme";
import resolveTheme from "../src/utils/resolveTheme";
import { config as baseThemeConfig } from "../src/themes/baseTheme";
import lightGrayTheme, {
  config as lightGrayThemeConfig
} from "../src/themes/lightGrayTheme";
import webLightTheme, {
  config as webLightThemeConfig
} from "../src/themes/webLightTheme";
import darkBlueTheme, {
  config as darkBlueThemeConfig
} from "../src/themes/darkBlueTheme";
import { config as lowDensityThemeConfig } from "../src/themes/lowDensityTheme";
import { config as highDensityThemeConfig } from "../src/themes/highDensityTheme";

const buildPath = path.join(process.cwd(), "build");

function writeFile(name, json) {
  fs.writeFileSync(
    path.join(buildPath, `${name}.json`),
    JSON.stringify(json, null, 2)
  );
}

const themes = [
  {
    name: "lightGray",
    data: lightGrayTheme,
    config: lightGrayThemeConfig
  },
  {
    name: "darkBlue",
    data: darkBlueTheme,
    config: darkBlueThemeConfig
  },
  {
    name: "webLight",
    data: webLightTheme,
    config: webLightThemeConfig
  }
];

const densities = [
  {
    name: "LowDensity",
    config: lowDensityThemeConfig
  },
  {
    name: "HighDensity",
    config: highDensityThemeConfig
  }
];

writeFile("baseThemeConfig", baseThemeConfig);

themes.forEach(theme => {
  writeFile(`${theme.name}Theme`, theme.data);
  writeFile(`${theme.name}ThemeConfig`, theme.config);

  densities.forEach(density => {
    const densityThemeConfig = extendTheme(theme.config, density.config);
    const densityThemeData = resolveTheme(densityThemeConfig);
    writeFile(`${theme.name}${density.name}Theme`, densityThemeData);
    writeFile(`${theme.name}${density.name}ThemeConfig`, densityThemeConfig);
  });
});
