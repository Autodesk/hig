import lightGrayThemeData from "./lightGrayThemeConfig/theme";
import darkBlueThemeData from "./darkBlueThemeConfig/theme";
import webLightThemeData from "./webLightTheme/data";
import themeSchema from "../theme-schema";
import "../../support/jest/matchers/toBeAValidTheme";

describe("Theme", () => {
  [
    { description: "light gray theme", theme: lightGrayThemeData },
    { description: "dark blue theme", theme: darkBlueThemeData },
    { description: "web light theme", theme: webLightThemeData }
  ].forEach(({ description, theme }) => {
    describe(description, () => {
      it("implements the theme schema", () => {
        expect(theme).toBeAValidTheme(themeSchema);
      });
    });
  });
});
