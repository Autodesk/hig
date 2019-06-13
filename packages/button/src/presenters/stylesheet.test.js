import lightGrayTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/resolvedRoles.json";
import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    const props = {
      disabled: false,
      type: "solid"
    };
    const theme = {
      themeId: "medium-density"
    };
    expect(stylesheet(props, lightGrayTheme, theme)).toEqual(
      expect.any(Object)
    );
  });

  describe("when disabled", () => {
    it("doesn't show a halo", () => {
      const props = {
        disabled: true,
        hasFocus: true,
        type: "solid"
      };
      const theme = {
        themeId: "medium-density"
      };
      const styles = stylesheet(props, lightGrayTheme, theme);
      expect(styles.button.boxShadow).not.toBeDefined();
    });
  });
});
