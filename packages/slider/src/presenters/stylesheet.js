function stylesheet(props, trackValueRatio, themeData) {
  const { disabled, ...activeStates } = props;
  const { hasFocus, hasHover, isPressed } = activeStates;

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
        pseudoElementRules = {
          ...rules,
          ...singleBrowserInclusions[browser]
        };
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

  const thumbDisabledRules = disabled
    ? {
        opacity: themeData["component.disabled.opacity"]
      }
    : {};

  const thumbStateRules = () => {
    const isInActiveState = Object.values(activeStates).every(
      stateValue => !stateValue
    );

    if (disabled || isInActiveState) {
      return {};
    }

    let stateKey;

    if (hasFocus) stateKey = "focused";
    if (hasHover) stateKey = "hover";
    if (isPressed) stateKey = "pressed";

    return {
      backgroundColor: themeData[`slider.${stateKey}.thumb.color`],
      boxShadow: `0 0 0 ${themeData[`slider.${stateKey}.halo.width`]} ${
        themeData[`slider.${stateKey}.halo.color`]
      }`
    };
  };

  const thumbRules = browserSpecificPseudoElementRules(
    thumbPseudoElements,
    {
      ...{
        boxSizing: "content-box",
        height: themeData["slider.thumb.minHeight"],
        width: themeData["slider.thumb.minWidth"],
        backgroundColor: themeData["slider.thumb.backgroundColor"],
        border: 0,
        borderRadius: 0,
        boxShadow: `0 0 0 ${themeData["slider.halo.width"]} ${
          themeData["slider.halo.color"]
        }`,
        position: "relative",
        top: "50%",
        transitionDuration: "0.3s",
        transitionProperty: "box-shadow",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        WebkitAppearance: "none" /* Hides platform-native styling */
      },

      ...thumbStateRules()
    },
    {
      mozilla: {
        ...thumbDisabledRules
      },
      webkit: {
        transform: "translateY(-50%)"
      }
    }
  );

  const trackDisabledRules = disabled
    ? {
        opacity: themeData["component.disabled.opacity"]
      }
    : {};

  const trackValueWidth = `calc((0.5 * ${themeData["slider.thumb.width"]}) 
  + (${trackValueRatio} * (100% - ${themeData["slider.thumb.width"]})))`;

  const trackRules = browserSpecificPseudoElementRules(
    trackPseudoElements,
    {
      width: "100%",
      height: themeData["slider.track.width"],
      border: "none",
      backgroundColor: themeData["slider.track.color"],
      color: "transparent",
      outline: "none",

      ...trackDisabledRules
    },
    {
      // WebKit does not have a built-in way to target the progress/lower fill of a slider track.
      // This produces the same visual effect.
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
    },
    {
      mozilla: {
        ...trackDisabledRules
      }
    }
  );

  return {
    slider: {
      ...baseRules,
      ...thumbRules,
      ...trackRules,
      ...trackProgressRules
    }
  };
}

export default stylesheet;
