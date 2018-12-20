import lightGrayTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/resolvedRoles.json";
import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    const props = {
      disabled: false,
      type: "solid"
    };
    expect(stylesheet(props, lightGrayTheme)).toEqual(expect.any(Object));
  });

  describe("when disabled", () => {
    it("doesn't show a halo", () => {
      const props = {
        disabled: true,
        hasFocus: true,
        type: "solid"
      };
      const styles = stylesheet(props, lightGrayTheme);
      expect(styles.button.boxShadow).not.toBeDefined();
    });
  });
});
