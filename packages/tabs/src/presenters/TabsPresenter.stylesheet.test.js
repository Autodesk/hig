import stylesheet from "./TabsPresenter.stylesheet";

describe("TabsPresenter/stylesheet", () => {
  const themeData = {};

  it("returns an object", () => {
    expect(stylesheet({}, themeData)).toEqual(expect.any(Object));
  });

  describe("align left", () => {
    it("returns an object with correct justifyContent", () => {
      expect(stylesheet({ align: "left" }, themeData).tabs).toEqual(
        expect.objectContaining({ justifyContent: "flex-start" })
      );
    });
  });

  describe("align center", () => {
    it("returns an object with correct justifyContent", () => {
      expect(stylesheet({ align: "center" }, themeData).tabs).toEqual(
        expect.objectContaining({ justifyContent: "center" })
      );
    });
  });

  describe("align right", () => {
    it("returns an object with correct justifyContent", () => {
      expect(stylesheet({ align: "right" }, themeData).tabs).toEqual(
        expect.objectContaining({ justifyContent: "flex-end" })
      );
    });
  });
});
