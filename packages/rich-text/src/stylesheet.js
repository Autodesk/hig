export default function stylesheet(themeData) {
  function typographyStyle(variant, margin) {
    return {
      color: themeData[`typography.${variant}.color`],
      display: "block",
      fontFamily: themeData[`typography.${variant}.fontFamily`],
      fontSize: themeData[`typography.${variant}.fontSize`],
      fontWeight: themeData[`typography.${variant}.fontWeight`],
      lineHeight: themeData[`typography.${variant}.lineHeight`],
      margin: margin || 0,
      textAlign: "initial"
    };
  }

  const baseStyles = typographyStyle(
    "body",
    `0 0 ${themeData["density.spacings.small"]} 0`
  );

  const listStyles = {
    "ul, ol": { paddingLeft: themeData["density.spacings.large"] },
    "ul li": {
      listStyle: "none",

      "&:before": {
        content: "'\\B7'",
        verticalAlign: "middle",
        fontSize: themeData["density.fontSizes.large"],
        paddingRight: themeData["density.spacings.small"],
        marginLeft: "-14px"
      }
    }
  };

  const headerStyles = {
    h1: typographyStyle("h1"),
    h2: typographyStyle("h2"),
    h3: typographyStyle("h3")
  };

  const anchorStyles = {
    a: {
      textDecoration: "none",
      cursor: "pointer",
      color: themeData["textLink.textColor"],
      outline: "none",

      "&:hover": {
        color: themeData["textLink.hover.textColor"],
        textDecoration: "underline",
        textDecorationColor: themeData["textLink.hover.underline.color"]
      },

      "&:focus": {
        color: themeData["textLink.focus.textColor"],
        outline: `solid ${themeData["textLink.focus.halo.width"]} ${
          themeData["textLink.focus.halo.color"]
        }`
      }
    }
  };

  const boldStyles = {
    "b, strong": { fontWeight: themeData["basics.fontWeights.bold"] }
  };

  const paragraphStyles = {
    p: typographyStyle("body", `0 0 ${themeData["density.spacings.small"]} 0`),
    "h1 + p, h2 + p, h3 + p": typographyStyle(
      "body",
      `${themeData["density.spacings.medium"]} 0 ${
        themeData["density.spacings.small"]
      } 0`
    )
  };

  return {
    richText: {
      ...baseStyles,
      ...listStyles,
      ...headerStyles,
      ...anchorStyles,
      ...paragraphStyles,
      ...boldStyles
    }
  };
}
