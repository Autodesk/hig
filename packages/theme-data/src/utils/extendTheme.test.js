import extendTheme from "./extendTheme";

describe("extendTheme", () => {
  it("overrides values in the original theme", () => {
    const existingTheme = {
      accentColor: { value: "#F00", type: "color" },
      textColor: { value: "#333", type: "color" }
    };
    expect(
      extendTheme(existingTheme, {
        accentColor: { value: "#0FF" }
      })
    ).toEqual({
      accentColor: { value: "#0FF", type: "color" },
      textColor: { value: "#333", type: "color" }
    });
  });

  describe("with references", () => {
    it("preserves the reference", () => {
      const existingTheme = {
        accentColor: { value: "#F00", type: "color" },
        textColor: { value: { ref: "accentColor" } }
      };
      expect(
        extendTheme(existingTheme, {
          accentColor: { value: "#0FF" }
        })
      ).toEqual({
        accentColor: { value: "#0FF", type: "color" },
        textColor: { value: { ref: "accentColor" } }
      });
    });
  });
});
