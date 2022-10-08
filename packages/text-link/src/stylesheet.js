export default function stylesheet(props, themeData, themeMeta) {
  const { stylesheet: customStylesheet, hasHover, hasFocus, variant } = props;

  const styles = {
    // from base typography-medium
    fontWeight: themeData["typography.body.fontWeight"],
    fontSize: themeData["typography.body.fontSize"],
    lineHeight: themeData["typography.body.lineHeight"],

    // from typography-base
    fontFamily: themeData["typography.body.fontFamily"],
    margin: 0,

    // from default-link
    textDecoration: "none",
    cursor: "pointer",

    color: themeData[`textLink.${variant}.default.fontColor`],
    outline: "none",

    ...(hasHover
      ? {
          color: themeData[`textLink.${variant}.hover.fontColor`],
          textDecoration: "underline",
          textDecorationColor:
            themeData[`textLink.${variant}.hover.underlineColor`],
        }
      : {}),

    ...(hasFocus
      ? {
          color: themeData[`textLink.${variant}.focus.fontColor`],
          outline: `solid ${themeData["textLink.focus.haloWidth"]} ${themeData["textLink.focus.haloColor"]}`,
        }
      : {}),
  };

  return customStylesheet
    ? customStylesheet(styles, props, themeData, themeMeta)
    : styles;
}
