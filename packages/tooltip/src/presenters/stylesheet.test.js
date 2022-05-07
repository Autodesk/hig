import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of content", () => {
    expect(styles).toHaveProperty("content", expect.any(Object));
  });
  it("returned object contains property of panel", () => {
    expect(styles).toHaveProperty("panel", expect.any(Object));
  });
  it("returned object contains property of panelInner", () => {
    expect(styles).toHaveProperty("panelInner", expect.any(Object));
  });
  it("returned object contains property of textContent", () => {
    expect(styles).toHaveProperty("textContent", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
