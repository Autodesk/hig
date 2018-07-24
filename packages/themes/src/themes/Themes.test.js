import {
  HIGLightTheme,
  HIGLightGrayTheme,
  HIGDarkBlueTheme,
  HIGLightHighDensityTheme,
  HIGLightGrayHighDensityTheme,
  HIGDarkBlueHighDensityTheme,
  MatrixTheme
} from "./index";

[
  HIGLightGrayTheme,
  HIGLightTheme,
  HIGDarkBlueTheme,
  HIGLightGrayHighDensityTheme,
  HIGLightHighDensityTheme,
  HIGDarkBlueHighDensityTheme,
  MatrixTheme
].forEach(theme => {
  describe(`${theme}`, () => {
    it("has a themeId", () => {
      expect(theme).toHaveProperty("themeId", expect.any(String));
    });

    it("has a themeClass", () => {
      expect(theme).toHaveProperty("themeClass", expect.any(String));
    });

    it("has a density", () => {
      expect(theme).toHaveProperty("density", expect.any(String));
    });

    it("has a themeData", () => {
      expect(theme).toHaveProperty("themeData", expect.any(String));
    });

    it("has a themeConfig", () => {
      expect(theme).toHaveProperty("themeConfig", expect.any(String));
    });
  });
});
