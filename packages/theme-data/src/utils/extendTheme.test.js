import extendTheme from "./extendTheme";

describe("extendTheme", () => {
  it("overrides values in the original theme", () => {
    const existingTheme = {
      ACCENT_COLOR: "#F00",
      TEXT_COLOR: "#333"
    };
    expect(
      extendTheme(existingTheme, {
        ACCENT_COLOR: "#0FF"
      })
    ).toEqual({
      ACCENT_COLOR: "#0FF",
      TEXT_COLOR: "#333"
    });
  });

  describe("with references", () => {
    it("preserves the reference", () => {
      const existingTheme = {
        ACCENT_COLOR: "#F00",
        TEXT_COLOR: { ref: "ACCENT_COLOR" }
      };
      expect(
        extendTheme(existingTheme, {
          ACCENT_COLOR: "#0FF"
        })
      ).toEqual({
        ACCENT_COLOR: "#0FF",
        TEXT_COLOR: { ref: "ACCENT_COLOR" }
      });
    });
  });
});
