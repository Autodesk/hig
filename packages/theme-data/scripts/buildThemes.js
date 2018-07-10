import path from "path";
import fs from "fs";

import { config as abstractThemeConfig } from "../src/themes/abstractTheme";
import lightGrayTheme, {
  config as lightGrayThemeConfig
} from "../src/themes/lightGrayTheme";
import webLightTheme, {
  config as webLightThemeConfig
} from "../src/themes/webLightTheme";
import darkBlueTheme, {
  config as darkBlueThemeConfig
} from "../src/themes/darkBlueTheme";

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
