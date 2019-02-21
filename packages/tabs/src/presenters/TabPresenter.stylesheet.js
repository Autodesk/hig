export default function stylesheet({ active, label }, themeData) {
  return {
    tab: {
      position: "relative",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      padding: `0 ${themeData["density.spacings.small"]}`,
      margin: 0,
      cursor: "pointer",
      userSelect: "none",
      textAlign: "center",
      borderBottom: `${themeData["tabs.general.borderBottomWidth"]} solid ${
        themeData["tabs.general.borderBottomColor"]
      }`,

      "&:first-of-type": {
        paddingLeft: 0
      },

      "&:last-of-type": {
        paddingRight: 0
      },

      ...(active && {
        "&:before": {
          position: "absolute",
          content: "''",
          bottom: `-${themeData["tabs.general.borderBottomWidth"]}`,
          left: themeData["density.spacings.small"],
          width: `calc(100% - (2 * ${themeData["density.spacings.small"]}))`,
          borderBottom: `${
            themeData["tabs.general.tab.selected.borderBottomWidth"]
          } solid ${themeData["tabs.general.tab.selected.borderBottomColor"]}`
        },

        "&:first-of-type:before": {
          left: 0,
          width: `calc(100% - ${themeData["density.spacings.small"]})`
        },

        "&:last-of-type:before": {
          width: `calc(100% - ${themeData["density.spacings.small"]})`
        }
      })
    },
    tabLabel: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: `${themeData["tabs.general.gutter"]} 0`,

      "&:focus": {
        outline: "none"
      },

      // So that the tab takes up the same amount of space when it's not active (normal font weight) as
      // when it's active (bold font weight).
      ...(label && {
        "&:before": {
          display: "block",
          content: `"${label}"`,
          fontFamily: themeData["tabs.general.tab.fontFamily"],
          fontSize: themeData["tabs.general.tab.fontSize"],
          fontWeight: themeData["tabs.general.tab.selected.fontWeight"],
          height: "0",
          color: "transparent",
          overflow: "hidden",
          visibility: "hidden"
        }
      })
    },
    tabLabelText: {
      fontSize: themeData["tabs.general.tab.fontSize"],

      ...(active && {
        fontWeight: themeData["tabs.general.tab.selected.fontWeight"]
      })
    }
  };
}
