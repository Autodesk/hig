export default function stylesheet(themeData) {
  const color = themeData ? themeData["colorScheme.iconColor"] : "#000";

  return {
    fill: color,
    "> *": {
      fill: color
    }
  };
}
