export default function stylesheet(props, themeData) {
  function typographyStyle(variant, margin) {
    return {
      color: themeData[`typography.${variant}.color`],
      display: "block",
      fontFamily: themeData[`typography.${variant}.fontFamily`],
      fontSize: themeData[`typography.${variant}.fontSize`],
      fontWeight: themeData[`typography.${variant}.fontWeight`],
      lineHeight: themeData[`typography.${variant}.lineHeight`],
      margin: margin || 0,
      textAlign: "initial",
    };
  }

  const { stylesheet: customStylesheet } = props;

  const baseStyles = typographyStyle("body", `0 0 0 0`);

  const listStyles = {
    "ul, ol": { paddingLeft: themeData["density.spacings.large"] },
    "ul li": {
      listStyle: "none",

      "&:before": {
        content: "'\\B7'",
        verticalAlign: "middle",
        fontSize: themeData["density.fontSizes.large"],
        paddingRight: themeData["density.spacings.small"],
        marginLeft: "-14px",
      },
    },
  };

  const headerStyles = {
    h1: typographyStyle("h1"),
    h2: typographyStyle("h2"),
    h3: typographyStyle("h3"),
  };

  const anchorStyles = {
    a: {
      textDecoration: "none",
      cursor: "pointer",
      color: themeData["textLink.primary.default.fontColor"],
      outline: "none",

      "&:hover": {
        color: themeData["textLink.primary.hover.fontColor"],
        textDecoration: "underline",
        textDecorationColor: themeData["textLink.primary.hover.underlineColor"],
      },

      "&:focus": {
        color: themeData["textLink.primary.focus.fontColor"],
        outline: `solid ${themeData["textLink.focus.haloWidth"]} ${
          themeData["textLink.focus.haloColor"]
        }`,
      },
    },
  };

  const boldStyles = {
    "b, strong": { fontWeight: themeData["basics.fontWeights.bold"] },
  };

  const paragraphStyles = {
    p: typographyStyle("body", `0 0 ${themeData["density.spacings.small"]} 0`),
    "h1 + p, h2 + p, h3 + p": typographyStyle(
      "body",
      `${themeData["density.spacings.medium"]} 0 ${
        themeData["density.spacings.small"]
      } 0`
    ),
  };

  const styles = {
    richText: {
      ...baseStyles,
      ...listStyles,
      ...headerStyles,
      ...anchorStyles,
      ...paragraphStyles,
      ...boldStyles,
    },
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
