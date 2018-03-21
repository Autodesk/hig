import * as icons from "./icons";

describe("icons", () => {
  it("exports icons", () => {
    expect(icons).toHaveProperty("default");
  });

  it("exports icon names", () => {
    expect(icons).toHaveProperty("names");
  });

  describe("default", () => {
    it("is a hash table of SVG markup", () => {
      const ICON_MATCHER = /^<svg/;

      Object.values(icons.default).forEach(icon => {
        expect(icon).toMatch(ICON_MATCHER);
      });
    });
  });

  describe("names", () => {
    it("is frozen", () => {
      expect(Object.isFrozen(icons.names)).toBe(true);
    });

    it("is a hash table of icon names", () => {
      const NAME_MATCHER = /[a-z0-9-]+/;

      Object.values(icons.names).forEach(name => {
        expect(name).toMatch(NAME_MATCHER);
      });
    });
  });
});
