import lightGrayTheme from "./lightGrayTheme";
import darkBlueTheme from "./darkBlueTheme";
import webLightTheme from "./webLightTheme";
import themeSchema from "../theme-schema";
import "../../support/jest/matchers/toBeAValidTheme";

describe("Theme", () => {
  [
    { description: "light gray theme", theme: lightGrayTheme },
    { description: "dark blue theme", theme: darkBlueTheme },
    { description: "web light theme", theme: webLightTheme }
  ].forEach(({ description, theme }) => {
    describe(description, () => {
      it("implements the theme schema", () => {
        expect(theme).toBeAValidTheme(themeSchema);
      });
    });
  });
});
