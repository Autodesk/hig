import stylesheet from "./TabsPresenter.stylesheet";

describe("TabsPresenter/stylesheet", () => {
  it("returns an object", () => {
    expect(stylesheet({})).toEqual(expect.any(Object));
  });

  describe("align left", () => {
    it("returns an object with correct justifyContent", () => {
      expect(stylesheet({ align: "left" }).tabs).toEqual(
        expect.objectContaining({ justifyContent: "flex-start" })
      );
    });
  });

  describe("align center", () => {
    it("returns an object with correct justifyContent", () => {
      expect(stylesheet({ align: "center" }).tabs).toEqual(
        expect.objectContaining({ justifyContent: "center" })
      );
    });
  });

  describe("align right", () => {
    it("returns an object with correct justifyContent", () => {
      expect(stylesheet({ align: "right" }).tabs).toEqual(
        expect.objectContaining({ justifyContent: "flex-end" })
      );
    });
  });
});
