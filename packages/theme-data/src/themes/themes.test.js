import lightGrayTheme, {
  config as lightGrayThemeConfig
} from "./lightGrayTheme";
import darkBlueTheme from "./darkBlueTheme";
import webLightTheme from "./webLightTheme";

import { config as lowDensityThemeConfig } from "./lowDensityTheme";
import { config as mediumDensityThemeConfig } from "./mediumDensityTheme";
import { config as highDensityThemeConfig } from "./highDensityTheme";

import { config as baseThemeConfig } from "../themes/baseTheme";
import "../../support/jest/matchers/toBeAValidTheme";
import extendTheme from "../utils/extendTheme";
import resolveTheme from "../utils/resolveTheme";

describe("Theme", () => {
  [
    { description: "light gray theme", theme: lightGrayTheme },
    { description: "dark blue theme", theme: darkBlueTheme },
    { description: "web light theme", theme: webLightTheme }
  ].forEach(({ description, theme }) => {
    describe(description, () => {
      it("implements the theme schema", () => {
        expect(theme).toBeAValidTheme(baseThemeConfig);
      });
    });
  });

  describe("densities", () => {
    [
      {
        description: "low density theme",
        density: lowDensityThemeConfig
      },
      {
        description: "medium density theme",
        density: mediumDensityThemeConfig
      },
      {
        description: "high density theme",
        density: highDensityThemeConfig
      }
    ].forEach(({ description, density }) => {
      describe(description, () => {
        it("implements the theme schema", () => {
          const densityThemeConfig = extendTheme(lightGrayThemeConfig, density);
          const densityThemeData = resolveTheme(densityThemeConfig);
          expect(densityThemeData).toBeAValidTheme(baseThemeConfig);
        });
      });
    });
  });
});
