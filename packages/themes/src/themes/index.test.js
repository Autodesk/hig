import * as index from "./index";

describe("themes/themes/index", () => {
  [
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
      name: "HIGLightHighDensityTheme",
      value: expect.any(Object)
    },
    {
      name: "HIGLightGrayHighDensityTheme",
      value: expect.any(Object)
    },
    {
      name: "HIGDarkBlueHighDensityTheme",
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
