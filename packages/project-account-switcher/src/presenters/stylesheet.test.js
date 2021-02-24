import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of itemLabel", () => {
    expect(styles).toHaveProperty("itemLabel", expect.any(Object));
  });
  it("returned object contains property of imageWrapper", () => {
    expect(styles).toHaveProperty("imageWrapper", expect.any(Object));
  });
  it("returned object contains property of image", () => {
    expect(styles).toHaveProperty("image", expect.any(Object));
  });
  it("returned object contains property of panel", () => {
    expect(styles).toHaveProperty("panel", expect.any(Object));
  });
  it("returned object contains property of switcherList", () => {
    expect(styles).toHaveProperty("switcherList", expect.any(Object));
  });
  it("returned object contains property of switcherItem", () => {
    expect(styles).toHaveProperty("switcherItem", expect.any(Object));
  });
  it("returned object contains property of switcherAccountImageWrapper", () => {
    expect(styles).toHaveProperty(
      "switcherAccountImageWrapper",
      expect.any(Object)
    );
  });
  it("returned object contains property of target", () => {
    expect(styles).toHaveProperty("target", expect.any(Object));
  });
  it("returned object contains property of targetItem", () => {
    expect(styles).toHaveProperty("targetItem", expect.any(Object));
  });
  it("returned object contains property of targetCaret", () => {
    expect(styles).toHaveProperty("targetCaret", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0
    });
  });
});
