const thumbPseudoElements = [
  "::-webkit-slider-thumb",
  "::-moz-range-thumb",
  "::-ms-thumb"
];

const trackPseudoElements = [
  "::-webkit-slider-runnable-track",
  "::-moz-range-track",
  "::-ms-track"
];

function browserTargetedStyles(pseudoElements, rules, singleBrowserInclusions) {
  const styles = {};

  pseudoElements.forEach(pseudoElement => {
    let pseudoElementRules = rules;

    if (singleBrowserInclusions && singleBrowserInclusions[pseudoElement]) {
      pseudoElementRules = Object.assign(
        {},
        rules,
        singleBrowserInclusions[pseudoElement]
      );
    }

    styles[`&${pseudoElement}`] = pseudoElementRules;
  });

  return styles;
}

function stylesheet() {
  const inputBase = {
    WebkitAppearance: "none",
    width: "100%" /* Specific width is required for Firefox. */,
    backgroundColor: "transparent" /* Otherwise white in Chrome */,
    boxSizing: "content-box",
    height: "60p",
    margin: 0,
    position: "relative"
  };

  const inputStatePseudoStyles = {
    "&:hover": browserTargetedStyles(thumbPseudoElements, {
      backgroundColor: "#0ED3BE"
    }),
    "&:focus": Object.assign(
      {},
      { outline: "none" },
      browserTargetedStyles(thumbPseudoElements, {
        backgroundColor: "#0696D7"
      })
    ),
    "&:active": browserTargetedStyles(thumbPseudoElements, {
      backgroundColor: "#0671A1"
    }),
    "&[disabled]": Object.assign(
      {},
      browserTargetedStyles(thumbPseudoElements, {
        backgroundColor: "#D4DBE1",
        opacity: 0.3,
        outline: "none"
      }),
      browserTargetedStyles(trackPseudoElements, { backgroundColor: "#ECF0F3" })
    )
  };

  const inputBrowserTargetedThumbStyles = browserTargetedStyles(
    thumbPseudoElements,
    {
      boxSizing: "content-box",
      height: "16px",
      width: "16px",
      backgroundColor: "#D4DBE1",
      borderRadius: "50%",
      cursor: "pointer",
      position: "relative",
      top: "50%",
      border: "2px solid #fff",
      WebkitAppearance: "none"
    },
    {
      "::-webkit-slider-thumb": {
        transform: "translateY(-50%)"
      }
    }
  );

  const inputBrowserTargetedTrackStyles = browserTargetedStyles(
    trackPseudoElements,
    {
      width: "100%",
      height: "2px",
      border: "none",
      backgroundColor: "#D4DBE1",
      cursor: "pointer",
      color: "transparent"
    }
  );

  const inputOtherBrowserTargetedStyles = {
    "&::-ms-fill-upper, &::-ms-fill-lower": {
      border: "none",
      backgroundColor: "#D4DBE1"
    },
    "&::-ms-tooltip": {
      display: "none"
    }
  };

  const input = Object.assign(
    {},
    inputBase,
    inputStatePseudoStyles,
    inputBrowserTargetedThumbStyles,
    inputBrowserTargetedTrackStyles,
    inputOtherBrowserTargetedStyles
  );

  return { input };
}

export default stylesheet;
