import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const themeData = {
    "iconButton.dynamic.default.iconColor": "black",
    "iconButton.dynamic.on.default.iconColor": "grey",
    "iconButton.dynamic.hover.iconColor": "white",
    "iconButton.dynamic.on.hover.iconColor": "green",
    "iconButton.dynamic.focus.iconColor": "red",
    "iconButton.focus.haloWidth": "2px",
    "iconButton.focus.haloColor": "blue",
    "iconButton.dynamic.pressed.100To250BackgroundColor": "orange",
    "iconButton.dynamic.pressed.300To350BackgroundColor": "yellow",
    "iconButton.static.on.pressed.backgroundColor": "purple",
    "iconButton.dynamic.pressed.iconColor": "purple",
    "colorScheme.opacity.disabled": 0.4,
  };

  it("returns an object", () => {
    const props = {
      disabled: false,
      hasFocus: true,
      hasHover: true,
      isPressed: false,
    };

    expect(stylesheet(props, themeData)).toEqual(expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 }),
    };
    expect(stylesheet(props, themeData)).toEqual({ padding: 0 });
  });
  describe("if the icon-button is at the default state", () => {
    const props = {
      variant: "dynamic",
    };

    it("default styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);

      expect(styles.iconButton["& svg *"].fill).toEqual("black");
    });
  });
  describe("if the icon-button has focus", () => {
    const props = {
      variant: "dynamic",
      hasFocus: true,
    };

    it("focus styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);

      expect(styles.iconButton["& svg *"].fill).toEqual("red");
      expect(styles.iconButton.boxShadow).toEqual("0 0 0 2px blue");
    });
  });
  describe("if the icon-button has hover", () => {
    const props = {
      variant: "dynamic",
      hasHover: true,
    };

    it("hover styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);

      expect(styles.iconButton["& svg *"].fill).toEqual("white");
    });
  });
  describe("if the icon-button is pressed", () => {
    const props = {
      variant: "dynamic",
      isPressed: true,
    };
    const staticPressed = stylesheet(
      { isPressed: true, surface: 300, variant: "static" },
      themeData
    );

    it("pressed styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);
      expect(styles.iconButton["& svg *"].fill).toEqual("purple");
      expect(styles.iconButton.backgroundColor).toEqual("yellow");

      expect(staticPressed.iconButton.backgroundColor).toEqual("purple");
    });
  });
  describe("if the icon-button is disabled", () => {
    const props = {
      disabled: true,
    };

    it("disabled styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);

      expect(styles.iconButton.opacity).toEqual(0.4);
    });
  });
  describe("surface level options", () => {
    it("surface levels should match values in theme data", () => {
      const dynamicLightLevel = stylesheet(
        { isPressed: true, surface: 100, variant: "dynamic" },
        themeData
      );
      const dynamicDarkLevel = stylesheet(
        { isPressed: true, surface: 300, variant: "dynamic" },
        themeData
      );

      expect(dynamicLightLevel.iconButton.backgroundColor).toEqual("orange");
      expect(dynamicDarkLevel.iconButton.backgroundColor).toEqual("yellow");
    });
  });
  describe("if the button-button is toggled on", () => {
    it("toggled on styles should match values in theme data", () => {
      const styles = stylesheet({ on: true, variant: "dynamic" }, themeData);
      const stylesHover = stylesheet(
        { hasHover: true, on: true, variant: "dynamic" },
        themeData
      );
      expect(styles.iconButton["& svg *"].fill).toEqual("grey");
      expect(stylesHover.iconButton["& svg *"].fill).toEqual("green");
    });
  });
});
