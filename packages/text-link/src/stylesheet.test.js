import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    const props = {
      hasHover: true,
      hasFocus: true
    };
    expect(stylesheet(props, {})).toEqual(expect.any(Object));
  });
});
