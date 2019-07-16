export default function stylesheet(props, themeData) {
  return {
    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      padding: 0,
      margin: 0,
      listStyle: "none",
      fontWeight: themeData["typography.body.fontWeight"],
      fontSize: themeData["typography.body.fontSize"],
      lineHeight: themeData["typography.body.lineHeight"],
      fontFamily: themeData["typography.body.fontFamily"]
    },
    item: {
      margin: 0,
      padding: 0
    },
    separator: {
      margin: "0 8px",
      padding: 0,
      cursor: "default",
      color: themeData["typography.body.color"],
      opacity: 0.5
    }
  };
}
