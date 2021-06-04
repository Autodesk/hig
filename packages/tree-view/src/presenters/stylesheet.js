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
console.log('stylesheet');
  const {
    alternateBg,
    guidelines,
    selected,
    stylesheet: customStylesheet
  } = props;
  const styles = {
    higTreeViewWrapper: {
      ...(alternateBg
        ? {
            background: `repeating-linear-gradient(
              0deg, yellow, yellow 23px, purple 23px, purple 46px
            )`
          }
        : {}
      ),
      margin: 0
    },
    higTreeView: {
      color: themeData[`treeView.fontColor`],
      fontFamily: themeData[`treeView.fontFamily`],
      listStyle: `none`,
      margin: 0,
      padding: 0,
      "& ul": {
        listStyle: `none`,
        paddingLeft: 0,
        "& li": {
          // display: `flex`,
          // flexDirection: `column`,
          overflow: `hidden`,
          paddingLeft: `20px`,
          "&::before": {
            ...(guidelines ? { borderTop: `1px dashed red` } : {}),
            display: `inline-block`,
            content: `""`,
            left: 0,
            margin: 0,
            position: `absolute`,
            top: 0,
            transform: `translateY(10px)`,
            width: `20px`
          },
          "&::after": {
            ...(guidelines ? { borderLeft: `1px dashed red` } : {}),
            display: `inline-block`,
            content: `""`,
            height: `100%`,
            left: 0,
            position: `absolute`,
            top: `0`,
            width: `20px`
          },
        },
        "& li:last-child": {
          "&::after": {
            top: `-9px`,
            height: `20px`
          }
        }
      }
    },
    higTreeItem: {
      margin: 0,
      position: `relative`,
      ...(selected ? { background: `rgba(0,0,0,0.5)` } : {})
    },
    higTreeItemContentWrapper: {
      display: `flex`
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
