import stylesheet from "./Badge.stylesheet";

describe("Badge.stylesheet", () => {
  const themeData = {
    "badge.dot.small.minHeight": "16px",
    "badge.dot.cornerRadius": "50%",
    "badge.green.iconColor": "green",
  };

  it("returns an object", () => {
    const props = {
      color: "green",
      size: "s",
      variant: "dot",
    };

    expect(stylesheet(props, themeData)).toEqual(expect.any(Object));
  });

  it("returned object contains property of badge", () => {
    expect(stylesheet({}, themeData)).toHaveProperty(
      "badge",
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
