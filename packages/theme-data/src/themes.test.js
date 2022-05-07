import generateAllThemes from "./utils/generateAllThemes";

import baseTheme from "./baseTheme";
import colorSchemes from "./colorSchemes";
import densities from "./densities";
import "../support/jest/matchers/toBeAValidTheme";

describe("Theme", () => {
  generateAllThemes(colorSchemes, densities).forEach((theme) => {
    describe(theme.metadata.name, () => {
      it("implements the theme schema", () => {
        expect(theme.resolvedRoles).toBeAValidTheme(baseTheme.unresolvedRoles);
      });
    });
  });
});
