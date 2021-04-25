import stylesheet from "./stylesheet";

describe("menu/stylesheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of menuGroup", () => {
    expect(styles).toHaveProperty("menuGroup", expect.any(Object));
  });

  it("returned object contains property of menu", () => {
    expect(styles).toHaveProperty("menu", expect.any(Object));
  });

  it("returned object contains property of menuOption", () => {
    expect(styles).toHaveProperty("menuOption", expect.any(Object));
  });

  it("returned object contains property of checkmarkWrapper", () => {
    expect(styles).toHaveProperty("checkmarkWrapper", expect.any(Object));
  });

  it("returned object contains property of assetWrapper", () => {
    expect(styles).toHaveProperty("assetWrapper", expect.any(Object));
  });

  it("returned object contains property of optionContentWrapper", () => {
    expect(styles).toHaveProperty("optionContentWrapper", expect.any(Object));
  });

  it("returned object contains property of shortcutWrapper", () => {
    expect(styles).toHaveProperty("shortcutWrapper", expect.any(Object));
  });

  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 })
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
