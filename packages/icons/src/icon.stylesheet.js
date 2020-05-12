export default function stylesheet(props, themeData) {
  const { color } = props;
  const fillColor = color || themeData["colorScheme.icon.default"];

  return {
    fill: fillColor,
    "> *": {
      fill: fillColor
    }
  };
}
