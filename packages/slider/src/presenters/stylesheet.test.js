import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const themeData = {
    "slider.halo.width": "0",
    "slider.halo.color": "red",
    "slider.thumb.backgroundColor": "aliceblue",
    "slider.thumb.width": "1px",
    "slider.track.color": "black",
    "slider.track.width": "2px",
    "slider.value.color": "green",
    "slider.hover.halo.color": "purple",
    "slider.hover.halo.width": "4px",
    "slider.hover.thumb.color": "turquoise",
    "slider.focused.halo.color": "magenta",
    "slider.focused.halo.width": "3px",
    "slider.focused.thumb.color": "pink",
    "slider.pressed.halo.color": "orange",
    "slider.pressed.halo.width": "5px",
    "slider.pressed.thumb.color": "white",
    "component.disabled.opacity": "0.2"
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
        `0 0 0 ${themeData["slider.halo.width"]}`
      );
    });

    it("changes the track to the theme's disabled opacity ", () => {
      expect(styles.slider["&::-webkit-slider-runnable-track"].opacity).toMatch(
        themeData["component.disabled.opacity"]
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
        `0 0 0 ${themeData["slider.focused.halo.width"]}`
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
        `0 0 0 ${themeData["slider.hover.halo.width"]}`
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
        `0 0 0 ${themeData["slider.hover.halo.width"]} ${
          themeData["slider.hover.halo.color"]
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
        `0 0 0 ${themeData["slider.pressed.halo.width"]}`
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
        .toMatch(`calc((0.5 * ${themeData["slider.thumb.width"]}) 
  + (${trackValueRatio} * (100% - ${themeData["slider.thumb.width"]})))`);
    });
  });
});
