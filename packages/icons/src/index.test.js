import * as icons from "./index";

describe("icons", () => {
  describe("default", () => {
    it("is a hash table of SVG markup", () => {
      const ICON_MATCHER = /^<svg/;

      Object.values(icons.default).forEach(icon => {
        expect(icon).toMatch(ICON_MATCHER);
      });
    });
  });

  describe("AVAILABLE_NAMES", () => {
    const ICON_NAME_MATCHER = /^[a-z0-9-]+$/;

    it("is frozen", () => {
      expect(icons.AVAILABLE_NAMES).toBeFrozen();
    });

    it("contains icon names", () => {
      icons.AVAILABLE_NAMES.forEach(name => {
        expect(name).toMatch(ICON_NAME_MATCHER);
      });
    });
  });
});
