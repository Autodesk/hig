import { HIGLightTheme, MatrixTheme } from "./index";

[HIGLightTheme, MatrixTheme].forEach(theme => {
  describe(`${theme}`, () => {
    it("has a themeId", () => {
      expect(theme).toHaveProperty("themeId", expect.any(String));
    });

    it("has a themeClass", () => {
      expect(theme).toHaveProperty("themeClass", expect.any(String));
    });
  });
});
