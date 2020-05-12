export default function stylesheetOverride(stylesheet, props, themeData) {
  const borderStyles =
    props.variant === `line`
      ? themeData[`input.textArea.line.borderColor`]
      : themeData[`input.box.default.borderColor`];
  const textArea = {
    ...stylesheet.input,
    display: `block`,
    resize: `vertical`,
    padding: `${themeData["input.paddingVertical"]}
      ${themeData["input.box.paddingHorizontal"]}`,
    height: `calc((${themeData["input.minHeight"]} - 2px) * 2)`
  };
  return {
    ...stylesheet,
    wrapper: {
      ...stylesheet.wrapper,
      borderLeftColor: borderStyles,
      borderRightColor: borderStyles,
      borderTopColor: borderStyles,
      position: `static`
    },
    input: textArea,
    halo: {
      ...stylesheet.halo,
      width: `100%`,
      left: 0,
      top: `100%`
    }
  };
}
