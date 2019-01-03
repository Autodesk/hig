export default function stylesheet(props, themeData) {
  const { color } = props;
  const fillColor = color || themeData["colorScheme.iconColor"];

  return {
    fill: fillColor,
    "> *": {
      fill: fillColor
    }
  };
}
