export default function stylesheet({ active }, themeData) {
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

      "&:before": {
        position: "absolute",
        content: "''",
        top: "6px",
        bottom: "8px",
        left: 0,
        borderLeft: "1px solid rgba(212, 219, 225, 1)" // hig-cool-gray-20
      },

      "&:first-of-type": {
        paddingLeft: 0,

        "&:before": {
          border: "none"
        }
      },

      "&:last-child": {
        paddingRight: 0
      }
    },
    tabLabel: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: `${
        themeData["tabs.general.borderBottomWidth"]
      } solid transparent`,

      ...(active && {
        borderBottomColor:
          themeData["tabs.general.tab.selected.borderBottomColor"],
        padding: `${themeData["tabs.general.gutter"]} 0`
      })
    },
    tabLabelText: {
      fontSize: themeData["tabs.general.tab.fontSize"],

      ...(active && {
        color: themeData["tabs.general.tab.selected.borderBottomColor"]
      })
    }
  };
}
