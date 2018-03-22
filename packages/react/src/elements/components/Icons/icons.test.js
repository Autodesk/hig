import * as icons from "./icons";

describe("icons", () => {
  describe("default", () => {
    it("is a hash table of SVG markup", () => {
      const ICON_MATCHER = /^<svg/;

      Object.values(icons.default).forEach(icon => {
        expect(icon).toMatch(ICON_MATCHER);
      });
    });
  });
});
