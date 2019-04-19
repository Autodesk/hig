import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const themeData = {
    "iconButton.iconColor": "black",
    "iconButton.hover.iconColor": "white",
    "iconButton.focus.iconColor": "red",
    "iconButton.focus.halo.width": "2px",
    "iconButton.focus.halo.color": "blue",
    "iconButton.pressed.backgroundColor": "orange",
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
      expect(styles.iconButton.backgroundColor).toEqual("orange");
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
});
