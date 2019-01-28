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
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",

    // from default-link
    textDecoration: "none",
    cursor: "pointer",

    color: themeData["textLink.textColor"],
    outline: "none",

    ...(hasHover ? 
      {
        textDecoration: "underline",
        textDecorationColor: themeData["textLink.hover.underline.color"]
      } :
      {}
    ),

    ...(hasFocus ?
      {
        outline: `solid ${themeData["textLink.focus.halo.width"]} ${themeData["textLink.focus.halo.color"]}`
      } :
      {}
    ),
  };
}