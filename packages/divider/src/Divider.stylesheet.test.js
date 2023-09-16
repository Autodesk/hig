import stylesheet from "./Divider.stylesheet";

describe("Divider.stylesheet", () => {
  const themeData = { "colorScheme.divider.lightweight": "blue" };

  it("returns an object", () => {
    const props = {
      length: "50px",
      orientation: "vertical",
      variant: "lightweight",
    };

    expect(stylesheet(props, themeData)).toEqual(expect.any(Object));
  });

  it("returned object contains property of divider", () => {
    expect(stylesheet({}, themeData)).toHaveProperty(
      "divider",
      expect.any(Object)
    );
  });

  it("returns the custom stylesheet", () => {
    expect(
      stylesheet({ stylesheet: () => ({ padding: 0 }) }, themeData)
    ).toEqual({
      padding: 0,
    });
  });
});
