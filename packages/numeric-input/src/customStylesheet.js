export default function stylesheetOverride(stylesheet, props, themeData) {
  const numericInput = {
    ...stylesheet.input,
    // Safari chrome
    "::-webkit-inner-spin-button": {
      display: `none`
    },
    // IE
    "::-ms-clear": {
      display: `none`
    },
    // Firefox
    ":focus": {
      MozAppearance: `textfield`
    },
    ":hover": {
      MozAppearance: `textfield`
    },
    MozAppearance: `textfield`
  };
  return {
    ...stylesheet,
    wrapper: {
      ...stylesheet.wrapper
    },
    input: numericInput,
    halo: {
      ...stylesheet.halo,
      width: `100%`,
      left: 0,
      top: `100%`
    }
  };
}
