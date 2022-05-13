import resolveTheme from "./resolveTheme";

describe("resolveTheme", () => {
  describe("with a reference", () => {
    it("flattens the reference", () => {
      const theme = {
        accentColor: { value: "#F00" },
        textColor: { value: { ref: "accentColor" } },
      };
      expect(resolveTheme(theme)).toEqual({
        accentColor: "#F00",
        textColor: "#F00",
      });
    });

    describe("to an unknown role", () => {
      it("throws an error", () => {
        const theme = {
          accentColor: { value: { ref: "glitterBomb" } },
        };
        expect(() => {
          resolveTheme(theme);
        }).toThrow(/glitterBomb/);
      });
    });
  });

  describe("with a reference to another reference", () => {
    it("flattens the references", () => {
      const theme = {
        accentColor: { value: "#F00" },
        "input.focus.color": { value: { ref: "accentColor" } },
        "textarea.focus.color": { value: { ref: "input.focus.color" } },
      };

      expect(resolveTheme(theme)).toEqual({
        accentColor: "#F00",
        "input.focus.color": "#F00",
        "textarea.focus.color": "#F00",
      });
    });

    it("performs intermediate transforms", () => {
      const theme = {
        accentColor: { value: "#F00" },
        "input.focus.color": {
          value: { ref: "accentColor" },
          transform: { alpha: 0.5 },
        },
        "textarea.focus.color": { value: { ref: "input.focus.color" } },
      };

      expect(resolveTheme(theme)).toEqual({
        accentColor: "#F00",
        "input.focus.color": "rgba(255, 0, 0, 0.5)",
        "textarea.focus.color": "rgba(255, 0, 0, 0.5)",
      });
    });
  });

  describe("with an abstract value", () => {
    it("throws an error", () => {
      const theme = {
        accentColor: { value: null },
      };
      expect(() => {
        resolveTheme(theme);
      }).toThrow(/accentColor/);
    });
  });

  describe("with an alpha transformation", () => {
    describe("with a valid color value", () => {
      it("transforms the alpha value", () => {
        const theme = resolveTheme({
          "basics.colorsRedAlert": { value: "#FF0000" },
          accentColor: {
            value: { ref: "basics.colorsRedAlert" },
            transform: { alpha: 0.5 },
          },
        });
        expect(theme.accentColor).toEqual("rgba(255, 0, 0, 0.5)");
      });

      it("allows the alpha to be overridden by the referencer", () => {
        const theme = resolveTheme({
          "basics.colorsRedAlert": {
            value: "#FF0000",
            transform: { alpha: 0.75 },
          },
          accentColor: {
            value: { ref: "basics.colorsRedAlert" },
            // overriding the transform here
            transform: { alpha: 0.5 },
          },
        });
        expect(theme.accentColor).toEqual("rgba(255, 0, 0, 0.5)");
      });
    });

    describe("with an invalid color value", () => {
      it("throws an error", () => {
        const theme = {
          "basics.spacingsM": { value: "16px" },
          accentColor: {
            value: { ref: "basics.spacingsMedium" },
            transform: { alpha: 0.5 },
          },
        };
        expect(() => {
          resolveTheme(theme);
        }).toThrow(/accentColor/);
      });
    });
  });
});
