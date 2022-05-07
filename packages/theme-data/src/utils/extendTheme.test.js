import extendTheme from "./extendTheme";
import { COLOR } from "../consts/types";

describe("extendTheme", () => {
  it("overrides values in the original theme", () => {
    const existingTheme = {
      accentColor: { value: "#F00", type: COLOR },
      textColor: { value: "#333", type: COLOR },
    };
    expect(
      extendTheme(existingTheme, {
        accentColor: { value: "#0FF" },
      })
    ).toEqual({
      accentColor: { value: "#0FF", type: COLOR },
      textColor: { value: "#333", type: COLOR },
    });
  });

  describe("with references", () => {
    it("preserves the reference", () => {
      const existingTheme = {
        accentColor: { value: "#F00", type: COLOR },
        textColor: { value: { ref: "accentColor" } },
      };
      expect(
        extendTheme(existingTheme, {
          accentColor: { value: "#0FF" },
        })
      ).toEqual({
        accentColor: { value: "#0FF", type: COLOR },
        textColor: { value: { ref: "accentColor" } },
      });
    });
  });
});
