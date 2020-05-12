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

    const trackValueRatio = 1;

    expect(stylesheet(props, trackValueRatio, themeData)).toEqual(
      expect.any(Object)
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

      styles = stylesheet(props, 0, themeData);
    });

    it("sets the halo around the thumb to theme's default halo width", () => {
      expect(styles.slider["&::-webkit-slider-thumb"].boxShadow).toMatch(
        `0 0 0 ${themeData["slider.haloWidth"]}`
      );
    });

    it("changes the track to the theme's disabled opacity ", () => {
      expect(styles.slider["&::-webkit-slider-runnable-track"].opacity).toMatch(
        themeData["colorScheme.opacity.disabled"]
      );
    });
  });

  describe("when hasFocus", () => {
    it("sets the halo around the thumb to theme's focused halo width", () => {
      const props = {
        hasFocus: true
      };

      const trackValueRatio = 1;
      const styles = stylesheet(props, trackValueRatio, themeData);

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

      const trackValueRatio = 1;
      const styles = stylesheet(props, trackValueRatio, themeData);

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

      const trackValueRatio = 1;
      const styles = stylesheet(props, trackValueRatio, themeData);

      expect(styles.slider["&::-webkit-slider-thumb"].boxShadow).toMatch(
        `0 0 0 ${themeData["slider.hover.haloWidth"]} ${
          themeData["slider.hover.haloColor"]
        }`
      );
    });
  });

  describe("when isPressed", () => {
    it("sets the halo around the thumb to theme's pressed halo width", () => {
      const props = {
        isPressed: true
      };

      const trackValueRatio = 1;
      const styles = stylesheet(props, trackValueRatio, themeData);

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
      styles = stylesheet({}, trackValueRatio, themeData);
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
