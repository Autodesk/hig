import resolveTheme from "./resolveTheme";

describe("resolveTheme", () => {
  describe("with a reference", () => {
    it("flattens the reference", () => {
      const theme = {
        ACCENT_COLOR: { value: "#F00" },
        TEXT_COLOR: { value: { ref: "ACCENT_COLOR" } }
      };
      expect(resolveTheme(theme)).toEqual({
        ACCENT_COLOR: "#F00",
        TEXT_COLOR: "#F00"
      });
    });

    describe("to an unknown role", () => {
      it("throws an error", () => {
        const theme = {
          ACCENT_COLOR: { value: { ref: "GLITTER_BOMB" } }
        };
        expect(() => {
          resolveTheme(theme);
        }).toThrow(/GLITTER_BOMB/);
      });
    });
  });

  describe("with a reference to another reference", () => {
    it("flattens the references", () => {
      const theme = {
        ACCENT_COLOR: { value: "#F00" },
        "INPUT.FOCUS.COLOR": { value: { ref: "ACCENT_COLOR" } },
        "TEXTAREA.FOCUS.COLOR": { value: { ref: "INPUT.FOCUS.COLOR" } }
      };
      expect(resolveTheme(theme)).toEqual({
        ACCENT_COLOR: "#F00",
        "INPUT.FOCUS.COLOR": "#F00",
        "TEXTAREA.FOCUS.COLOR": "#F00"
      });
    });
  });

  describe("with an abstract value", () => {
    it("throws an error", () => {
      const theme = {
        ACCENT_COLOR: { value: null }
      };
      expect(() => {
        resolveTheme(theme);
      }).toThrow(/ACCENT_COLOR/);
    });
  });

  describe("with an alpha transformation", () => {
    describe("with a valid color value", () => {
      it("transforms the alpha value", () => {
        const theme = resolveTheme({
          "BASICS.COLORS_RED_ALERT": { value: "#FF0000" },
          ACCENT_COLOR: {
            value: { ref: "BASICS.COLORS_RED_ALERT" },
            transform: { alpha: 0.5 }
          }
        });
        expect(theme.ACCENT_COLOR).toEqual("rgba(255, 0, 0, 0.5)");
      });
    });

    describe("with an invalid color value", () => {
      it("throws an error", () => {
        const theme = {
          "BASICS.SPACINGS_M": { value: "16px" },
          ACCENT_COLOR: {
            value: { ref: "BASICS.SPACINGS_M" },
            transform: { alpha: 0.5 }
          }
        };
        expect(() => {
          resolveTheme(theme);
        }).toThrow(/ACCENT_COLOR/);
      });
    });
  });
});
