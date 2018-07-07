import serializeTheme from "./serializeTheme";

describe("serializeTheme", () => {
  describe("with a reference", () => {
    it("flattens the reference", () => {
      const theme = {
        ACCENT_COLOR: "#F00",
        TEXT_COLOR: { ref: "ACCENT_COLOR" }
      };
      expect(serializeTheme(theme)).toEqual({
        ACCENT_COLOR: "#F00",
        TEXT_COLOR: "#F00"
      });
    });

    describe("to an unknown role", () => {
      it("throws an error", () => {
        const theme = {
          ACCENT_COLOR: { ref: "GLITTER_BOMB" }
        };
        expect(() => {
          serializeTheme(theme);
        }).toThrow(/GLITTER_BOMB/);
      });
    });
  });

  describe("with a reference to another reference", () => {
    it("flattens the references", () => {
      const theme = {
        ACCENT_COLOR: "#F00",
        "INPUT.FOCUS.COLOR": { ref: "ACCENT_COLOR" },
        "TEXTAREA.FOCUS.COLOR": { ref: "INPUT.FOCUS.COLOR" }
      };
      expect(serializeTheme(theme)).toEqual({
        ACCENT_COLOR: "#F00",
        "INPUT.FOCUS.COLOR": "#F00",
        "TEXTAREA.FOCUS.COLOR": "#F00"
      });
    });
  });

  describe("with an abstract value", () => {
    it("throws an error", () => {
      const theme = {
        ACCENT_COLOR: { abstract: true }
      };
      expect(() => {
        serializeTheme(theme);
      }).toThrow(/ACCENT_COLOR/);
    });
  });

  describe("with an alpha transformation", () => {
    describe("with a valid color value", () => {
      it("transforms the alpha value", () => {
        const theme = serializeTheme({
          "BASICS.COLORS_RED_ALERT": "#FF0000",
          ACCENT_COLOR: {
            ref: "BASICS.COLORS_RED_ALERT",
            transform: { alpha: 0.5 }
          }
        });
        expect(theme.ACCENT_COLOR).toEqual("rgba(255, 0, 0, 0.5)");
      });
    });

    describe("with an invalid color value", () => {
      it("throws an error", () => {
        const theme = {
          "BASICS.SPACINGS_M": "16px",
          ACCENT_COLOR: { ref: "BASICS.SPACINGS_M", transform: { alpha: 0.5 } }
        };
        expect(() => {
          serializeTheme(theme);
        }).toThrow(/ACCENT_COLOR/);
      });
    });
  });
});
