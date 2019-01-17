import { renderedBarWidth } from "./stylesheet";

describe("renderedBarWidth", () => {
  describe("given a falsey value", () => {
    it("is null", () => {
      expect(renderedBarWidth()).toBeNull();
      expect(renderedBarWidth(0)).toBeNull();
    });
  });

  describe("given a number < 100", () => {
    it("returns the number floored", () => {
      expect(renderedBarWidth(33.33)).toEqual(33);
    });
  });

  describe("given 100", () => {
    it("returns 101", () => {
      expect(renderedBarWidth(100)).toEqual(101);
    });
  });
});
