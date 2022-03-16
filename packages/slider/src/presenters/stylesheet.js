function stylesheet(props, themeData) {
  const {
    disabled,
    max,
    min,
    stylesheet: customStylesheet,
    value,
    ...activeStates
  } = props;
  const { hasFocus, hasHover, isPressed } = activeStates;
  const rangeRange = max - min;
  const trackValueRatio = (value - min) / rangeRange;

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
        opacity: themeData["colorScheme.opacity.disabled"]
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

    if (hasFocus) stateKey = "focus";
    if (hasHover) stateKey = "hover";
    if (isPressed) stateKey = "pressed";

    return {
      backgroundColor: themeData[`slider.thumb.backgroundColor`],
      boxShadow: `0 0 0 ${themeData[`slider.${stateKey}.haloWidth`]} ${
        themeData[`slider.${stateKey}.haloColor`]
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
        borderRadius: "1px",
        boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)",
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
        opacity: themeData["colorScheme.opacity.disabled"]
      }
    : {};

  const trackValueWidth = `calc((0.5 * ${themeData["slider.thumb.minWidth"]}) 
  + (${trackValueRatio} * (100% - ${themeData["slider.thumb.minWidth"]})))`;

  const trackRules = browserSpecificPseudoElementRules(
    trackPseudoElements,
    {
      width: "100%",
      height: themeData["slider.track.minHeight"],
      border: "none",
      backgroundColor: themeData["slider.track.backgroundColor"],
      color: "transparent",
      outline: "none",

      ...trackDisabledRules
    },
    {
      // WebKit does not have a built-in way to target the progress/lower fill of a slider track.
      // This produces the same visual effect.
      webkit: {
        backgroundColor: themeData["slider.track.backgroundColor"],
        backgroundImage: `linear-gradient(${themeData["slider.value.backgroundColor"]}, ${themeData["slider.value.backgroundColor"]})`,
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
      backgroundColor: themeData["slider.value.backgroundColor"]
    },
    {
      mozilla: {
        ...trackDisabledRules
      }
    }
  );

  const markRules = {
    width: "1px",
    height: "4px",
    marginTop: "-12px",
    position: "absolute",
    backgroundColor: themeData["slider.value.backgroundColor"],

    ...trackDisabledRules
  };

  const markContainer = {
    position: "absolute",
    width: "100%"
  };

  const discrete = {
    position: "relative"
  };

  const styles = {
    slider: {
      ...baseRules,
      ...thumbRules,
      ...trackRules,
      ...trackProgressRules
    },
    markRules,
    markContainer,
    discrete
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}

export default stylesheet;
