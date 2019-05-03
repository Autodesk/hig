import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const themeData = {
    "iconButton.iconColor": "black",
    "iconButton.on.iconColor": "grey",
    "iconButton.hover.iconColor": "white",
    "iconButton.hover.on.iconColor": "green",
    "iconButton.focus.iconColor": "red",
    "iconButton.focus.halo.width": "2px",
    "iconButton.focus.halo.color": "blue",
    "iconButton.pressed.level100To250.backgroundColor": "orange",
    "iconButton.pressed.level300To350.backgroundColor": "yellow",
    "iconButton.pressed.iconColor": "purple",
    "component.disabled.opacity": 0.5
  };

  it("returns an object", () => {
    const props = {
      disabled: false,
      hasFocus: true,
      hasHover: true,
      isPressed: false
    };

    expect(stylesheet(props, themeData)).toEqual(expect.any(Object));
  });
  describe("if the icon-button is at the default state", () => {
    const props = {};

    it("default styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);

      expect(styles.iconButton["& svg *"].fill).toEqual("black");
    });
  });
  describe("if the icon-button has focus", () => {
    const props = {
      hasFocus: true
    };

    it("focus styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);

      expect(styles.iconButton["& svg *"].fill).toEqual("red");
      expect(styles.iconButton.boxShadow).toEqual("0 0 0 2px blue");
    });
  });
  describe("if the icon-button has hover", () => {
    const props = {
      hasHover: true
    };

    it("hover styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);

      expect(styles.iconButton["& svg *"].fill).toEqual("white");
    });
  });
  describe("if the icon-button is pressed", () => {
    const props = {
      isPressed: true
    };

    it("pressed styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);
      expect(styles.iconButton["& svg *"].fill).toEqual("purple");
      expect(styles.iconButton.backgroundColor).toEqual("yellow");
    });
  });
  describe("if the icon-button is disabled", () => {
    const props = {
      disabled: true
    };

    it("disabled styles match values in theme data", () => {
      const styles = stylesheet(props, themeData);

      expect(styles.iconButton.opacity).toEqual(0.5);
    });
  });
  describe("surface level options", () => {
    it("surface levels should match values in theme data", () => {
      const lightLevel = stylesheet(
        { isPressed: true, surface: "1" },
        themeData
      );
      const darkLevel = stylesheet(
        { isPressed: true, surface: "3" },
        themeData
      );
      expect(lightLevel.iconButton.backgroundColor).toEqual("orange");
      expect(darkLevel.iconButton.backgroundColor).toEqual("yellow");
    });
  });
  describe("if the button-button is toggled on", () => {
    it("toggled on styles should match values in theme data", () => {
      const styles = stylesheet({ on: true }, themeData);
      const stylesHover = stylesheet({ hasHover: true, on: true }, themeData);
      expect(styles.iconButton["& svg *"].fill).toEqual("grey");
      expect(stylesHover.iconButton["& svg *"].fill).toEqual("green");
    });
  });
});
