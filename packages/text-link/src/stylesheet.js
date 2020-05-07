export default function stylesheet(props, themeData) {
  const { hasHover, hasFocus } = props;

  return {
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

    color: themeData["textLink.primary.default.fontColor"],
    outline: "none",

    ...(hasHover
      ? {
          color: themeData["textLink.primary.hover.fontColor"],
          textDecoration: "underline",
          textDecorationColor:
            themeData["textLink.primary.hover.underlineColor"]
        }
      : {}),

    ...(hasFocus
      ? {
          color: themeData["textLink.primary.focus.fontColor"],
          outline: `solid ${themeData["textLink.focus.haloWidth"]} ${
            themeData["textLink.focus.haloColor"]
          }`
        }
      : {})
  };
}
