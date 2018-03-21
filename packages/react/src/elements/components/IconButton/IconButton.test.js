import IconButton from "./IconButton";

describe("IconButton", () => {
  it("has icon button types", () => {
    expect(IconButton).toHaveProperty("types");
  });

  describe("types", () => {
    it("is frozen", () => {
      expect(Object.isFrozen(IconButton.types)).toBe(true);
    });

    it("is a hash table of icon button types", () => {
      const TYPE_MATCHER = /^[a-z]+$/;

      Object.values(IconButton.types).forEach(type => {
        expect(type).toMatch(TYPE_MATCHER);
      });
    });
  });
});
