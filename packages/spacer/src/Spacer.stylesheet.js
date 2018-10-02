function getSpacing(spacing, themeData) {
  return themeData[`density.spacings.${spacing.toUpperCase()}`];
}

export default function stylesheet(props, themeData) {
  return {
    spacer: {
      width: props.size ? props.size : getSpacing(props.spacing, themeData),
      height: props.size ? props.size : getSpacing(props.spacing, themeData)
    }
  };
}
