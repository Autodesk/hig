const thumbPseudoElements = {
  microsoft: "::-ms-thumb",
  mozilla: "::-moz-range-thumb",
  webkit: "::-webkit-slider-thumb"
};

const trackPseudoElements = {
  microsoft: "::-ms-track",
  mozilla: "::-moz-range-track",
  webkit: "::-webkit-slider-runnable-track"
};

const trackProgressPseudoElements = {
  // WebKit does not have a pseudo element to target this styling, so we achieve it with fancy styling on track
  // ::-webkit-slider-runnable-track
  microsoft: "::-ms-fill-lower",
  mozilla: "::-moz-range-progress"
};

function stylesheet(themeData, trackValueRatio) {
  function browserSpecificPseudoElementRules(
    browserPseudoElements,
    rules,
    singleBrowserInclusions
  ) {
    const styles = {};

    Object.entries(browserPseudoElements).forEach(browserPseudoElement => {
      let pseudoElementRules = rules;

      const browser = browserPseudoElement[0];
      const pseudoElement = browserPseudoElement[1];

      if (singleBrowserInclusions && singleBrowserInclusions[browser]) {
        pseudoElementRules = Object.assign(
          {},
          rules,
          singleBrowserInclusions[browser]
        );
      }

      styles[`&${pseudoElement}`] = pseudoElementRules;
    });

    return styles;
  }

  const baseRules = {
    WebkitAppearance: "none" /* Hides platform-native styling */,
    width: "100%" /* Specific width is required for Firefox. */,
    backgroundColor: "transparent" /* Otherwise white in Chrome */,
    boxSizing: "content-box",
    height: "20px",
    margin: 0,
    position: "relative",
    outline: "none",

    "&::-ms-tooltip": {
      display: "none"
    },

    "&::-moz-focus-outer": {
      border: 0
    }
  };

  const thumbRules = browserSpecificPseudoElementRules(
    thumbPseudoElements,
    Object.assign(
      {},
      {
        boxSizing: "content-box",
        height: themeData["slider.thumb.width"],
        width: themeData["slider.thumb.width"],
        backgroundColor: themeData["slider.thumb.backgroundColor"],
        border: 0,
        borderRadius: "50%",
        boxShadow: `0 0 0 ${themeData["slider.halo.width"]} ${
          themeData["slider.halo.color"]
        }`,
        cursor: "pointer",
        position: "relative",
        top: "50%",
        WebkitAppearance: "none" /* Hides platform-native styling */,

        "&:hover": {
          backgroundColor: themeData["slider.hover.thumb.color"],
          boxShadow: `0 0 0 ${themeData["slider.hover.halo.width"]} ${
            themeData["slider.hover.halo.color"]
          }`
        },

        "&:focus": {
          outline: "none",
          backgroundColor: themeData["slider.focused.thumb.color"],
          boxShadow: `0 0 0 ${themeData["slider.focused.halo.width"]} ${
            themeData["slider.focused.halo.color"]
          }`
        },

        "&:active": {
          backgroundColor: themeData["slider.pressed.thumb.color"],
          boxShadow: `0 0 0 ${themeData["slider.pressed.halo.width"]} ${
            themeData["slider.pressed.halo.color"]
          }`
        },

        "&[disabled]": {
          opacity: themeData["slider.disabled.opacity"]
        }
      }
    ),
    {
      webkit: {
        transform: "translateY(-50%)"
      }
    }
  );

  const trackValueWidth = `calc((0.5 * ${themeData["slider.thumb.width"]}) 
  + (${trackValueRatio} * (100% - ${themeData["slider.thumb.width"]})))`;

  const trackRules = browserSpecificPseudoElementRules(
    trackPseudoElements,
    {
      width: "100%",
      height: themeData["slider.track.width"],
      border: "none",
      backgroundColor: themeData["slider.track.color"],
      cursor: "pointer",
      color: "transparent",
      outline: "none",

      "&[disabled]": {
        opacity: themeData["slider.disabled.opacity"]
      }
    },
    {
      // WebKit does not have a built in way to target the progress or lower fill of a slider track.
      // This accomplishes the same effect.
      webkit: {
        backgroundColor: themeData["slider.track.color"],
        backgroundImage: `linear-gradient(${themeData["slider.value.color"]}, ${
          themeData["slider.value.color"]
        })`,
        backgroundPosition: 0,
        backgroundSize: `${trackValueWidth} 100%`,
        backgroundRepeat: "no-repeat"
      }
    }
  );

  const trackProgressRules = browserSpecificPseudoElementRules(
    trackProgressPseudoElements,
    {
      border: "none",
      backgroundColor: themeData["slider.value.color"]
    }
  );

  const input = Object.assign(
    {},
    baseRules,
    thumbRules,
    trackRules,
    trackProgressRules
  );

  return { input };
}

export default stylesheet;
