import stylesheet from "./stylesheet";

describe("accordion/stylesheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of wrapper", () => {
    expect(styles).toHaveProperty("wrapper", expect.any(Object));
  });

  it("returned object contains property of contentTransitionWrapper", () => {
    expect(styles).toHaveProperty(
      "contentTransitionWrapper",
      expect.any(Object)
    );
  });

  it("returned object contains property of header", () => {
    expect(styles).toHaveProperty("header", expect.any(Object));
  });

  it("returned object contains property of indicator", () => {
    expect(styles).toHaveProperty("indicator", expect.any(Object));
  });

  it("returned object contains property of label", () => {
    expect(styles).toHaveProperty("label", expect.any(Object));
  });
});
