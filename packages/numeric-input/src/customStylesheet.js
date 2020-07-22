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
    MozAppearance: `textfield`,
    //display: "inline-block",
    //position: "relative",
    zIndex: 2
  };
  return {
    ...stylesheet,
    wrapper: {
      ...stylesheet.wrapper,
      width: "200px"
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
