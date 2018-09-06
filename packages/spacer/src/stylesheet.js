function getSpacing(spacing, themeData) {
  return themeData[`DENSITY.SPACINGS.${spacing.toUpperCase()}`];
}

export default function stylesheet(props, themeData) {
  return {
    spacer: {
      width: props.size ? props.size : getSpacing(props.spacing, themeData),
      height: props.size ? props.size : getSpacing(props.spacing, themeData),
      display: props.display
    }
  };
}
