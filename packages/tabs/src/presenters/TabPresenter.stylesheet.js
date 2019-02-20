export default function stylesheet({ active }) {
  return {
    tab: {
      position: "relative",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      padding: "0 12px",
      margin: 0,
      borderTop: "2px solid transparent",
      cursor: "pointer",
      color: "rgba(0, 0, 0, 1)",
      userSelect: "none",
      fontWeight: 700,
      textAlign: "center",

      "&:before": {
        position: "absolute",
        content: "''",
        top: "6px",
        bottom: "8px",
        left: 0,
        borderLeft: "1px solid rgba(212, 219, 225, 1)"
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
      borderBottom: "2px solid transparent",

      ...(active && {
        borderBottomColor: "rgba(6, 150, 215, 1)",
        padding: "4px 0"
      })
    },
    tabLabelText: {
      fontSize: "16px",

      ...(active && {
        color: "rgba(6, 150, 215, 1)"
      })
    }
  };
}
