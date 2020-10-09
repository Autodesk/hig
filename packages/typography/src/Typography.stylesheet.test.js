import stylesheet from "./Typography.stylesheet";

describe("stylesheet", () => {
  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 })
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });

});