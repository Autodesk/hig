export default function stylesheet(props, themeData) {
  const {
    display,
    length,
    orientation,
    stylesheet: customStylesheet,
    variant,
  } = props;
  const dividerWeightKey =
    variant === "lightweight"
      ? "colorScheme.divider.lightweight"
      : "colorScheme.divider.heavyweight";
  const isHorizontal = orientation === "horizontal";
  const orientationBorder = isHorizontal ? "borderBottom" : "borderLeft";

  const styles = {
    divider: {
      [orientationBorder]: `1px solid ${themeData[dividerWeightKey]}`,
      display: display || "inline-block",
      height: isHorizontal ? "1px" : length,
      width: isHorizontal ? length : "1px",
    },
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
