import stylesheet from "./Spacer.stylesheet";

describe("stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of spacer", () => {
    expect(styles).toHaveProperty("spacer", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0
    });
  });
});
