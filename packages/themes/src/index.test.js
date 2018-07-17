import * as index from "./index";

describe("themes/index", () => {
  [
    {
      name: "ThemeContext",
      value: expect.objectContaining({
        Consumer: expect.any(Function),
        Provider: expect.any(Function)
      })
    },
    {
      name: "HIGLightTheme",
      value: expect.any(Object)
    },
    {
      name: "HIGLightGrayTheme",
      value: expect.any(Object)
    },
    {
      name: "HIGDarkBlueTheme",
      value: expect.any(Object)
    },
    {
      name: "MatrixTheme",
      value: expect.any(Object)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
