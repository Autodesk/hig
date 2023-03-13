import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    const props = {};
    expect(stylesheet(props, {})).toEqual(expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 }),
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
