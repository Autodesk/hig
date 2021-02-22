export default function stylesheet(props, themeData) {
  const { color, stylesheet: customStylesheet } = props;
  const fillColor = color || themeData["colorScheme.icon.default"];

  const styles = {
    fill: fillColor,
    "> *": {
      fill: fillColor
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
