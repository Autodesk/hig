import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of ring", () => {
    expect(styles).toHaveProperty("ring", expect.any(Object));
  });
  it("returned object contains property of background", () => {
    expect(styles).toHaveProperty("background", expect.any(Object));
  });
  it("returned object contains property of segment", () => {
    expect(styles).toHaveProperty("segment", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
