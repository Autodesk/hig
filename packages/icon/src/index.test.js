import { sizes as iconSizes, names as iconNames } from "./index";

describe("Icon/index", () => {
  describe("names", () => {
    it("is an object of constants", () => {
      expect(iconNames).toBeDefined();
    });
  });

  describe("sizes", () => {
    it("is an object of constants", () => {
      expect(iconSizes).toBeDefined();
    });
  });
});
