import path from "path";
import fs from "fs";

import lightGrayTheme from "../src/themes/lightGrayThemeConfig/theme";
import lightGrayThemeConfig from "../src/themes/lightGrayThemeConfig/themeConfig";
import webLightTheme from "../src/themes/webLightTheme/data";
import webLightThemeConfig from "../src/themes/webLightTheme/config";
import darkBlueTheme from "../src/themes/darkBlueThemeConfig/theme";
import darkBlueThemeConfig from "../src/themes/darkBlueThemeConfig/themeConfig";
import abstractThemeConfig from "../src/themes/abstractThemeConfig";

const buildPath = path.join(process.cwd(), "build");

[
  { name: "lightGrayTheme", data: lightGrayTheme },
  { name: "lightGrayThemeConfig", data: lightGrayThemeConfig },
  { name: "webLightTheme", data: webLightTheme },
  { name: "webLightThemeConfig", data: webLightThemeConfig },
  { name: "darkBlueTheme", data: darkBlueTheme },
  { name: "darkBlueThemeConfig", data: darkBlueThemeConfig },
  { name: "abstractThemeConfig", data: abstractThemeConfig }
].forEach(options => {
  fs.writeFileSync(
    path.join(buildPath, `${options.name}.json`),
    JSON.stringify(options.data)
  );
});
