export default function stylesheetOverride(stylesheet) {
  const numericInput = {
    ...stylesheet.input,
    // Safari chrome
    "::-webkit-inner-spin-button": {
      display: `none`,
    },
    // IE
    "::-ms-clear": {
      display: `none`,
    },
    // Firefox
    ":focus": {
      MozAppearance: `textfield`,
    },
    ":hover": {
      MozAppearance: `textfield`,
    },
    MozAppearance: `textfield`,
  };
  return {
    ...stylesheet,
    wrapper: {
      ...stylesheet.wrapper,
    },
    input: numericInput,
    halo: {
      ...stylesheet.halo,
      width: "calc(100% + 2px)",
      left: -1,
      top: `calc(100% + 1px)`,
      right: 0,
    },
  };
}
