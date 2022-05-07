export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet, fontWeight, align } = props;
  const variant = props.variant || "body";

  const styles = {
    typography: {
      color: themeData[`typography.${variant}.color`],
      display: "block",
      fontFamily: themeData[`typography.${variant}.fontFamily`],
      fontSize: themeData[`typography.${variant}.fontSize`],
      fontWeight: fontWeight || themeData[`typography.${variant}.fontWeight`],
      lineHeight: themeData[`typography.${variant}.lineHeight`],
      margin: 0,
      textAlign: align || "initial",
    },
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
