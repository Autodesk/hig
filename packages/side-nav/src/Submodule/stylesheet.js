export default function stylesheet(props, themeData) {
  return {
    wrapper: {
      fontFamily: themeData[`typography.body.fontFamily`],
      fontSize: themeData[`typography.body.fontSize`],
      fontWeight: themeData[`typography.body.fontWeight`],
      lineHeight: themeData[`typography.body.lineHeight`],
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "10px",
      paddingRight: themeData["density.spacings.medium"],
      textDecoration: "none",
      cursor: "pointer",
      userSelect: "none",
      color: themeData["typography.body.color"],

      "&:first-of-type": {
        marginTop: themeData["density.spacings.extraSmall"]
      },

      "&:last-of-type": {
        marginBottom: themeData["density.spacings.medium"]
      },

      "&:focus, &:hover": {
        outline: "none",
        color: themeData["colorScheme.accentColor"]
      },

      externalIcon: {
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        padding: "6px 10px",

        "& svg": {
          fill: themeData["typography.body.color"]
        },

        "&:hover svg *": {
          fill: themeData["colorScheme.accentColor"]
        }
      }
    }
  };
}
