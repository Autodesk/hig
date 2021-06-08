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
// ADD TO THEME-DATA
// MEDIUM DENSITY = 40PX TOTAL HEIGHT
// HIGHT DENSITY = 24PX TOTAL HEIGHT

export default function stylesheet(props, themeData) {
/* console.log('stylesheet');
console.log(props);
console.log(themeData); */
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
            backgroundImage: `repeating-linear-gradient(
              0deg,
              ${themeData['colorScheme.surface.level200']},
              ${themeData['colorScheme.surface.level200']} 25%,
              ${themeData['colorScheme.surface.level100']} 25%,
              ${themeData['colorScheme.surface.level100']} 50%,
              ${themeData['colorScheme.surface.level200']} 50%,
              ${themeData['colorScheme.surface.level200']} 75%,
              ${themeData['colorScheme.surface.level100']} 75%,
              ${themeData['colorScheme.surface.level100']} 100%
            )`,
            backgroundSize: `72px 72px`
          }
        : {}
      ),
      margin: 0
    },
    higTreeView: {
      color: themeData[`treeView.fontColor`],
      fontFamily: themeData[`treeView.fontFamily`],
      fontSize: themeData[`treeView.item.fontSize`],
      fontWeight: themeData[`treeView.item.fontWeight`],
      listStyle: `none`,
      margin: 0,
      padding: 0,
      "& ul": {
        listStyle: `none`,
        paddingLeft: `4px`,
        "& li": {
          overflow: `hidden`,
          width: `100%`,
          "&::before": {
            ...(guidelines ? { borderTop: `1px dashed ${themeData['treeView.guideLine.backgroundColor']}` } : {}),
            display: `inline-block`,
            content: `""`,
            left: 0,
            margin: 0,
            position: `absolute`,
            top: `7px`,
            transform: `translateY(10px)`,
            width: themeData['treeView.row.paddingHorizontal']
          },
          "&::after": {
            ...(guidelines ? { borderLeft: `1px dashed ${themeData['treeView.guideLine.backgroundColor']}` } : {}),
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
            height: `24px`
          }
        }
      }
    },
    higTreeItem: {
      margin: 0,
      padding: `${themeData['treeView.row.paddingVertical']} ${themeData['treeView.row.paddingHorizontal']}`,
      position: `relative`,
      "& [aria-expanded='true']": {
        padding: 0
      },
      "& [aria-expanded='false']": {
        padding: 0
      },
      "& > span": {
        display: `block`,
        maxWidth: `calc(100% - 10px)`,
        padding: `${themeData['treeView.row.paddingVertical']} ${themeData['treeView.row.paddingHorizontal']}`,
        overflow: `hidden`,
        textOverflow: `ellipsis`,
        whiteSpace: `nowrap`,
        ...(selected ? { background: themeData[`colorScheme.background.on.default`] } : {})
      }
    },
    higTreeItemContentWrapper: {
      display: `inline-flex`,
      ...(selected ? { background: themeData[`colorScheme.background.on.default`] } : {})
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
