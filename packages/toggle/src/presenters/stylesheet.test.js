import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const themeData = {
    "toggle.minWidth": "12px",
    "toggle.thumb.minDiameter": "12px",
    "toggle.padding": "12px",
    "toggle.borderWidth": "12px",
    "toggle.hover.haloWidth": "2px",
    "toggle.focus.haloWidth": "2px",
    "toggle.pressed.haloWidth": "4px",
    "toggle.focus.haloColor": "rgba(6, 150, 215, 0.35)",
    "toggle.hover.haloColor": "rgba(128, 128, 128, 0.15)",
    "toggle.pressed.haloColor": "rgba(128, 128, 128, 0.25)",
    "toggle.thumb.on.backgroundColor": "#ffffff",
    "toggle.thumb.off.backgroundColor": "#808080",
    "toggle.off.default.backgroundColor": "rgba(255, 255, 255, 0)",
    "toggle.off.default.borderColor": "rgba(128, 128, 128, 0.5)",
    "toggle.off.focus.backgroundColor": "rgba(255, 255, 255, 0)",
    "toggle.off.focus.borderColor": "#0696d7",
    "toggle.off.hover.backgroundColor": "rgba(255, 255, 255, 0)",
    "toggle.off.hover.borderColor": "rgba(128, 128, 128, 0.5)",
    "toggle.off.pressed.backgroundColor": "rgba(255, 255, 255, 0)",
    "toggle.off.pressed.borderColor": "rgba(128, 128, 128, 0.5)",
    "toggle.on.default.backgroundColor": "#0696d7",
    "toggle.on.default.borderColor": "#0696d7",
    "component.disabled.opacity": 0.4
  };

  it("returns an oject", () => {
    const props = {
      on: false,
      disabled: true,
      hasFocus: false,
      hasHover: false,
      indeterminate: false,
      isPressed: false
    };
    expect(stylesheet(props, themeData)).toEqual(expect.any(Object));
  });
  describe("if the toggle is at the default state", () => {
    const props = {};
    const styles = stylesheet(props, themeData);

    it("default styles match values in theme data", () => {
      expect(styles.toggleWrapper.borderColor).toEqual(
        "rgba(128, 128, 128, 0.5)"
      );
      expect(styles.toggleWrapper.backgroundColor).toEqual(
        "rgba(255, 255, 255, 0)"
      );
      expect(styles.toggleKnob.backgroundColor).toEqual("#808080");
    });
  });
  describe("if the toggle is on", () => {
    const props = { checked: true };
    const styles = stylesheet(props, themeData);

    it("toggle on styles match values in theme data", () => {
      expect(styles.toggleWrapper.borderColor).toEqual("#0696d7");
      expect(styles.toggleWrapper.backgroundColor).toEqual("#0696d7");
      expect(styles.toggleKnob.backgroundColor).toEqual("#ffffff");
    });
  });
  describe("if the toggle is hovered", () => {
    const props = { hasHover: true };
    const styles = stylesheet(props, themeData);

    it("toggle hover styles match values in theme data", () => {
      expect(styles.toggleWrapper.boxShadow).toEqual(
        "0 0 0 2px rgba(128, 128, 128, 0.15)"
      );
      expect(styles.toggleWrapper.borderColor).toEqual(
        "rgba(128, 128, 128, 0.5)"
      );
    });
  });
  describe("if the toggle is focused", () => {
    const props = { hasFocus: true };
    const styles = stylesheet(props, themeData);

    it("toggle focus styles match values in theme data", () => {
      expect(styles.toggleWrapper.boxShadow).toEqual(
        "0 0 0 2px rgba(6, 150, 215, 0.35)"
      );
      expect(styles.toggleWrapper.borderColor).toEqual("#0696d7");
    });
  });
  describe("if the toggle is pressed", () => {
    const props = { isPressed: true };
    const styles = stylesheet(props, themeData);

    it("toggle pressed styles match values in theme data", () => {
      expect(styles.toggleWrapper.boxShadow).toEqual(
        "0 0 0 4px rgba(128, 128, 128, 0.25)"
      );
      expect(styles.toggleWrapper.borderColor).toEqual(
        "rgba(128, 128, 128, 0.5)"
      );
    });
  });
  describe("if the toggle is focused and hovered", () => {
    const props = { hasFocus: true, hasHover: true };
    const styles = stylesheet(props, themeData);

    it("toggle focus and hovered, hover styles should take precedence", () => {
      expect(styles.toggleWrapper.boxShadow).toEqual(
        "0 0 0 2px rgba(128, 128, 128, 0.15)"
      );
      expect(styles.toggleWrapper.borderColor).toEqual(
        "rgba(128, 128, 128, 0.5)"
      );
    });
  });
  describe("if the toggle is disabled", () => {
    const props = { disabled: true };
    const styles = stylesheet(props, themeData);

    it("toggle disabled styles match values in theme data", () => {
      expect(styles.toggleWrapper.opacity).toEqual(0.4);
    });
  });
});
