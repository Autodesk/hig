import stylesheet from "./Surface.stylesheet";

describe("Surface.stylesheet", () => {
  const themeData = {
    "basics.shadows.lowBlur": "16px",
    "basics.spacings.none": "0",
    "colorScheme.surfaceLevel300Color": "aliceblue",
    "density.spacings.medium": "14px"
  };

  it("returns an object", () => {
    const props = {
      borderRadius: "m",
      horizontalPadding: "m",
      verticalPadding: "m",
      level: 300,
      shadow: "low"
    };

    expect(stylesheet(props, themeData)).toEqual(expect.any(Object));
  });

  it("returned object contains property of surface", () => {
    expect(stylesheet({}, themeData)).toHaveProperty(
      "surface",
      expect.any(Object)
    );
  });

  it("returns the custom stylesheet", () => {
    expect(
      stylesheet({ stylesheet: () => ({ padding: 0 }) }, themeData)
    ).toEqual({
      padding: 0
    });
  });

  describe("padding values are provided", () => {
    const props = {
      borderRadius: "m",
      horizontalPadding: "m",
      verticalPadding: "m",
      level: 300,
      shadow: "low"
    };

    it("padding matches density spacing value in theme data", () => {
      expect(stylesheet(props, themeData).surface.padding).toEqual("14px 14px");
    });
  });

  describe("no padding values are provided", () => {
    const props = {
      borderRadius: "m",
      level: 300,
      shadow: "low"
    };

    it("padding matches the basics value in theme data", () => {
      expect(stylesheet(props, themeData).surface.padding).toEqual("0 0");
    });
  });
});
