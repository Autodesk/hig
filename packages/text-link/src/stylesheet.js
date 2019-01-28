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

    color: themeData["textLink.textColor"],
    outline: "none",

    ...(hasHover
      ? {
          color: themeData["textLink.hover.textColor"],
          textDecoration: "underline",
          textDecorationColor: themeData["textLink.hover.underline.color"]
        }
      : {}),

    ...(hasFocus
      ? {
          color: themeData["textLink.focus.textColor"],
          outline: `solid ${themeData["textLink.focus.halo.width"]} ${
            themeData["textLink.focus.halo.color"]
          }`
        }
      : {})
  };
}
