import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of tag", () => {
    expect(styles).toHaveProperty("tag", expect.any(Object));
  });
  it("returned object contains property of wrapper", () => {
    expect(styles.tag).toHaveProperty("wrapper", expect.any(Object));
  });
  it("returned object contains property of labelWrapper", () => {
    expect(styles.tag).toHaveProperty("labelWrapper", expect.any(Object));
  });
  it("returned object contains property of closeWrapper", () => {
    expect(styles.tag).toHaveProperty("closeWrapper", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
