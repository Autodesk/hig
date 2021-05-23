/* function getRulesByPresentation(themeData) {
  return {
    fontSize: themeData[`menu.header.fontSize`],
    fontWeight: themeData[`menu.header.fontWeight`],
    color: themeData[`menu.header.fontColor`],
    opacity: 0.5,
    textTransform: `uppercase`,
    cursor: `default`,
    padding: `0 
        ${themeData["menu.item.paddingHorizontal"]}
        ${themeData["menu.header.marginBottom"]}`
  };
} */

export default function stylesheet(props, themeData) {
  const {
    stylesheet: customStylesheet
  } = props;
  const styles = {
    higTreeView: {
      color: themeData[`treeView.fontColor`],
      fontFamily: themeData[`treeView.fontFamily`],
      listStyle: `none`,
      margin: 0,
      padding: 0
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
