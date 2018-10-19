import lightGrayTheme from "./lightGrayTheme";
import darkBlueTheme from "./darkBlueTheme";
import webLightTheme from "./webLightTheme";

import mediumDensityTheme from "./mediumDensityTheme";
import highDensityTheme from "./highDensityTheme";

import baseTheme from "../themes/baseTheme";
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
        expect(theme.resolvedRoles).toBeAValidTheme(baseTheme.unresolvedRoles);
      });
    });
  });

  describe("densities", () => {
    [
      {
        description: "medium density theme",
        density: mediumDensityTheme.unresolvedRoles
      },
      {
        description: "high density theme",
        density: highDensityTheme.unresolvedRoles
      }
    ].forEach(({ description, density }) => {
      describe(description, () => {
        it("implements the theme schema", () => {
          const unresolvedRoles = extendTheme(
            lightGrayTheme.unresolvedRoles,
            density
          );
          const resolvedRoles = resolveTheme(unresolvedRoles);
          expect(resolvedRoles).toBeAValidTheme(baseTheme.unresolvedRoles);
        });
      });
    });
  });
});
