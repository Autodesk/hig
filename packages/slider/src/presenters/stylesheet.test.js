import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const themeData = {
    "slider.haloWidth": "0",
    "slider.haloColor": "red",
    "slider.thumb.backgroundColor": "aliceblue",
    "slider.thumb.minWidth": "1px",
    "slider.track.backgrounColor": "black",
    "slider.track.minHeight": "2px",
    "slider.value.backgroundColor": "green",
    "slider.hover.haloColor": "purple",
    "slider.hover.haloWidth": "4px",
    "slider.focus.haloColor": "magenta",
    "slider.focus.haloWidth": "3px",
    "slider.pressed.haloColor": "orange",
    "slider.pressed.haloWidth": "5px",
    "colorScheme.opacity.disabled": "0.4"
  };

  it("returns an object", () => {
    const props = {
      disabled: false
    };

    expect(stylesheet(props, themeData)).toEqual(expect.any(Object));
  });

  it("returned object contains property of slider", () => {
    expect(stylesheet({}, themeData)).toHaveProperty(
      "slider",
      expect.any(Object)
    );
  });

  it("returned object contains property of markRules", () => {
    expect(stylesheet({}, themeData)).toHaveProperty(
      "markRules",
      expect.any(Object)
    );
  });

  it("returned object contains property of markContainer", () => {
    expect(stylesheet({}, themeData)).toHaveProperty(
      "markContainer",
      expect.any(Object)
    );
  });

  it("returned object contains property of discrete", () => {
    expect(stylesheet({}, themeData)).toHaveProperty(
      "discrete",
      expect.any(Object)
    );
  });

  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0
    });
  });

  it("returns discrete style", () => {
    const props = {};

    const styles = stylesheet(props, themeData);

    expect(styles).toEqual(
      expect.objectContaining({ discrete: expect.anything() })
    );
  });

  it("returns marks style", () => {
    const props = {};

    const styles = stylesheet(props, themeData);

    expect(styles).toEqual(
      expect.objectContaining({
        markRules: expect.anything(),
        markContainer: expect.anything()
      })
    );
  });

  describe("when disabled", () => {
    let props;
    let styles;

    beforeEach(() => {
      props = {
        disabled: true,
        hasFocus: true
      };

      styles = stylesheet(props, themeData);
    });

    it("sets the halo around the thumb to theme's default halo width", () => {
      expect(styles.slider["&::-webkit-slider-thumb"].boxShadow).toMatch(
        `0 0 0 ${themeData["slider.haloWidth"]}`
      );
    });

    it("changes the slider to the theme's disabled opacity ", () => {
      expect(styles.slider.opacity).toMatch(
        themeData["colorScheme.opacity.disabled"]
      );
    });
  });

  describe("when hasFocus", () => {
    it("sets the halo around the thumb to theme's focused halo width", () => {
      const props = {
        hasFocus: true
      };

      const styles = stylesheet(props, themeData);

      expect(styles.slider["&::-webkit-slider-thumb"].boxShadow).toMatch(
        `0 0 0 ${themeData["slider.focus.haloWidth"]}`
      );
    });
  });

  describe("when hasHover", () => {
    it("sets the halo around the thumb to theme's hovered halo width", () => {
      const props = {
        hasHover: true
      };

      const styles = stylesheet(props, themeData);

      expect(styles.slider["&::-webkit-slider-thumb"].boxShadow).toMatch(
        `0 0 0 ${themeData["slider.hover.haloWidth"]}`
      );
    });
  });

  describe("when hasFocus and hasHover", () => {
    it("sets the halo around the thumb to theme's hover halo width", () => {
      const props = {
        hasFocus: true,
        hasHover: true
      };

      const styles = stylesheet(props, themeData);

      expect(styles.slider["&::-webkit-slider-thumb"].boxShadow).toMatch(
        `0 0 0 ${themeData["slider.hover.haloWidth"]} ${themeData["slider.hover.haloColor"]}`
      );
    });
  });

  describe("when isPressed", () => {
    it("sets the halo around the thumb to theme's pressed halo width", () => {
      const props = {
        isPressed: true
      };

      const styles = stylesheet(props, themeData);

      expect(styles.slider["&::-webkit-slider-thumb"].boxShadow).toMatch(
        `0 0 0 ${themeData["slider.pressed.haloWidth"]}`
      );
    });
  });

  describe("when trackValueRatio is between 0 and 1", () => {
    let styles;
    let trackValueRatio;

    beforeEach(() => {
      trackValueRatio = 0.5;
      styles = stylesheet({ min: 0, max: 100, value: 50 }, themeData);
    });

    it("targets the track value elements for mozilla and microsoft browsers", () => {
      ["::-moz-range-progress", "::-ms-fill-lower"].forEach(pseudoElement => {
        expect(
          styles.slider[`&${pseudoElement}`].backgroundColor
        ).toBeDefined();
      });
    });

    it("produces a background image for the track with a reasonable width calculation", () => {
      expect(styles.slider["&::-webkit-slider-runnable-track"].backgroundSize)
        .toMatch(`calc((0.5 * ${themeData["slider.thumb.minWidth"]}) 
  + (${trackValueRatio} * (100% - ${themeData["slider.thumb.minWidth"]})))`);
    });
  });
});
