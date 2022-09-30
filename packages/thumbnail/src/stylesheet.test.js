import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of thumbnail", () => {
    expect(styles).toHaveProperty("thumbnail", expect.any(Object));
  });
  it("returned object contains property of thumbnail", () => {
    expect(styles.thumbnail).toHaveProperty("wrapper", expect.any(Object));
  });
  it("returned object contains property of thumbnail", () => {
    expect(styles.thumbnail).toHaveProperty("border", expect.any(Object));
  });
  it("returned object contains property of thumbnail", () => {
    expect(styles.thumbnail).toHaveProperty("image", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
