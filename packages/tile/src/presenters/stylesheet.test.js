import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of higTileContainer", () => {
    expect(styles).toHaveProperty("higTileContainer", expect.any(Object));
  });
  it("returned object contains property of higMediaContainer", () => {
    expect(styles).toHaveProperty("higMediaContainer", expect.any(Object));
  });
  it("returned object contains property of higTileContentContainer", () => {
    expect(styles).toHaveProperty(
      "higTileContentContainer",
      expect.any(Object)
    );
  });
  it("returned object contains property of higTileTitleContainer", () => {
    expect(styles).toHaveProperty("higTileTitleContainer", expect.any(Object));
  });
  it("returned object contains property of higTileTitle", () => {
    expect(styles).toHaveProperty("higTileTitle", expect.any(Object));
  });
  it("returned object contains property of higTileSubTitle", () => {
    expect(styles).toHaveProperty("higTileSubTitle", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
