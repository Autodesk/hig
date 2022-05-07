import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const props = {
    disabled: false,
  };
  const styles = stylesheet(props, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of label", () => {
    expect(styles).toHaveProperty("label", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
