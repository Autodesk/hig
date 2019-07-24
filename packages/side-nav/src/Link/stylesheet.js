export default function(props, themeData) {
  return {
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textDecoration: "none",
      padding: `0 ${themeData["density.spacings.medium"]}`,

      // we can't override the :hover selector on typography's
      // style prop, so we have to style the text from the
      // container element
      "&:hover span": {
        color: themeData["colorScheme.accentColor"]
      },

      // making sure to consitently use pointer cursor when
      // just implementing onClick and not setting link property
      "&:hover": {
        cursor: "pointer"
      },

      "&:hover svg *": {
        fill: themeData["colorScheme.accentColor"]
      }
    },

    externalIcon: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      padding: "6px 2px"
    },

    typography: {
      lineHeight: "26px"
    }
  };
}
