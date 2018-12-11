import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    const props = {
      disabled: false,
      size: "standard",
      type: "solid",
      width: "shrink"
    };
    expect(stylesheet(props, {})).toEqual(expect.any(Object));
  });
});
