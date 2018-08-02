import extendTheme from "./extendTheme";

describe("extendTheme", () => {
  it("overrides values in the original theme", () => {
    const existingTheme = {
      ACCENT_COLOR: { value: "#F00", type: "color" },
      TEXT_COLOR: { value: "#333", type: "color" }
    };
    expect(
      extendTheme(existingTheme, {
        ACCENT_COLOR: { value: "#0FF" }
      })
    ).toEqual({
      ACCENT_COLOR: { value: "#0FF", type: "color" },
      TEXT_COLOR: { value: "#333", type: "color" }
    });
  });

  describe("with references", () => {
    it("preserves the reference", () => {
      const existingTheme = {
        ACCENT_COLOR: { value: "#F00", type: "color" },
        TEXT_COLOR: { value: { ref: "ACCENT_COLOR" } }
      };
      expect(
        extendTheme(existingTheme, {
          ACCENT_COLOR: { value: "#0FF" }
        })
      ).toEqual({
        ACCENT_COLOR: { value: "#0FF", type: "color" },
        TEXT_COLOR: { value: { ref: "ACCENT_COLOR" } }
      });
    });
  });
});
