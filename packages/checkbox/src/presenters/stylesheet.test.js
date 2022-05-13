import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const props = {
    checked: false,
    disabled: true,
    hasFocus: false,
    hasHover: false,
    indeterminate: false,
    isPressed: false,
  };
  const styles = stylesheet(props, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of checkboxWrapper", () => {
    expect(styles).toHaveProperty("checkboxWrapper", expect.any(Object));
  });
  it("returned object contains property of checkboxInput", () => {
    expect(styles).toHaveProperty("checkboxInput", expect.any(Object));
  });
  it("returned object contains property of checkboxCheck", () => {
    expect(styles).toHaveProperty("checkboxCheck", expect.any(Object));
  });
  it("returned object contains property of checkboxCheckWrapper", () => {
    expect(styles).toHaveProperty("checkboxCheckWrapper", expect.any(Object));
  });
  it("returned object contains property of checkboxIndeterminate", () => {
    expect(styles).toHaveProperty("checkboxIndeterminate", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
