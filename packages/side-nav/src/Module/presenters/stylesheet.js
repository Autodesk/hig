export default function stylesheet(props, themeData) {
  const activeBorderLeft = `2px solid ${themeData["colorScheme.accentColor"]}`;
  const activeBorderBefore = active => ({
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "32px",

    ...(active
      ? {
          color: themeData["colorScheme.accentColor"],
          borderLeft: activeBorderLeft
        }
      : { borderLeft: "2px solid transparent" })
  });

  return {
    wrapper: {
      display: "flex",
      alignItems: "stretch",
      paddingLeft: "2px",
      flex: "1 1 auto",
      textDecoration: "none",
      cursor: "pointer",
      color: themeData["typography.body.color"],

      "&:before": activeBorderBefore(props.active || props.activeChildren),

      "&:focus, &:hover": {
        outline: "none",
        color: themeData["colorScheme.accentColor"],

        "svg *": {
          fill: themeData["colorScheme.accentColor"]
        }
      },

      "&:focus:before, &:hover:before": activeBorderBefore(true),

      ...(props.active ||
        (props.activeChildren && {
          "& svg *": {
            fill: themeData["colorScheme.accentColor"]
          }
        }))
    },

    title: {
      // color: themeData[`typography.body.color`],
      fontWeight: "700",
      fontSize: "14px",
      paddingLeft: themeData["density.spacings.extraExtraSmall"],
      paddingTop: "5px",
      lineHeight: "20px"
    },

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "38px"
    },

    externalIcon: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      padding: "6px 10px",

      "& svg *": {
        fill: themeData["typography.body.color"]
      }
    },

    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      minHeight: "32px",
      marginRight: themeData["density.spacings.extraSmall"],

      "&:hover svg *": {
        fill: themeData["colorScheme.accentColor"]
      }
    },

    module: {
      outline: "none",
      fontFamily: themeData[`typography.body.fontFamily`],
      fontSize: themeData[`typography.body.fontSize`],
      fontWeight: themeData[`typography.body.fontWeight`],
      lineHeight: themeData[`typography.body.lineHeight`],
      position: "relative",
      margin: `${themeData["density.spacings.extraSmall"]} 0`,
      userSelect: "none"
    },

    submodule: {
      ...(props.icon
        ? { paddingLeft: "46px" }
        : { paddingLeft: themeData["density.spacings.medium"] })
    },

    link: {
      outline: "none",
      display: "flex",
      alignItems: "stretch",
      paddingLeft: "2px",
      flex: "1 1 auto",
      textDecoration: "none",
      cursor: "pointer",

      "&:hover svg *": {
        fill: themeData["colorScheme.accentColor"]
      },

      "&:hover:before, &:focus:before": activeBorderBefore(true)
    }
  };
}
