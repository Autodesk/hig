import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    const props = {
      checked: false,
      disabled: true,
      hasFocus: false,
      hasHover: false,
      indeterminate: false,
      isPressed: false
    };
    expect(stylesheet(props, {})).toEqual(expect.any(Object));
  });
});
