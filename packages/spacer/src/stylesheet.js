function getSpacing(spacing, themeData) {
  return themeData[`DENSITY.SPACINGS.${spacing.toUpperCase()}`];
}

export default function stylesheet(props, themeData) {
  return {
    spacer: {
      // backgroundColor: themeData["COLOR_SCHEME.ACCENT_COLOR_500"],
      // marginBottom: themeData["DENSITY.SPACINGS.S"]
      width: props.size ? props.size : getSpacing(props.spacing, themeData),
      height: props.size ? props.size : getSpacing(props.spacing, themeData),
      display: props.display
    }
  };
}
