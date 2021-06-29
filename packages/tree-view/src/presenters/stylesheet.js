export default function stylesheet(props, themeData) {
  const {
    alternateBg,
    guidelines,
    selected,
    stylesheet: customStylesheet
  } = props;
  const isMediumDensity = themeData[`treeView.row.paddingVertical`] === `8px`;
  const itemHeight = isMediumDensity ? `24px` : `16px`;
  const bgHeight = isMediumDensity ? `160px` : `96px`;
  const guideLineVerticalOffsetLeft = isMediumDensity ? `-8px` : `-5px`;
  const guideLineHorizontalOffsetTop = isMediumDensity ? `9px` : `2px`;
  const styles = {
    higTreeViewWrapper: {
      ...(alternateBg
        ? {
            backgroundImage: `repeating-linear-gradient(
              0deg,
              ${themeData["colorScheme.surface.level200"]},
              ${themeData["colorScheme.surface.level200"]} 25%,
              ${themeData["colorScheme.surface.level100"]} 25%,
              ${themeData["colorScheme.surface.level100"]} 50%,
              ${themeData["colorScheme.surface.level200"]} 50%,
              ${themeData["colorScheme.surface.level200"]} 75%,
              ${themeData["colorScheme.surface.level100"]} 75%,
              ${themeData["colorScheme.surface.level100"]} 100%
            )`,
            backgroundSize: `${bgHeight} ${bgHeight}`
          }
        : {}),
      margin: 0
    },
    higTreeView: {
      color: themeData[`treeView.fontColor`],
      fontFamily: themeData[`treeView.fontFamily`],
      fontSize: themeData[`treeView.item.fontSize`],
      fontWeight: themeData[`treeView.item.fontWeight`],
      listStyle: `none`,
      margin: 0,
      outline: 0,
      padding: 0,
      "& > li": {
        paddingLeft: 0,
        "& > div": {
          "&:first-of-type": {
            "&:last-child": {
              margin: `0 0 0 ${themeData["treeView.row.paddingHorizontal"]}`
            }
          }
        },
        "&::before": {
          border: `none`
        },
        "&::after": {
          border: `none`
        }
      }
    },
    higTreeItem: {
      margin: 0,
      padding: 0,
      position: `relative`,
      "&::before": {
        ...(guidelines
          ? {
              borderTop: `1px dashed ${
                themeData["treeView.guideLine.backgroundColor"]
              }`
            }
          : {}),
        display: `inline-block`,
        content: `""`,
        left: isMediumDensity ? `-7px` : `-4px`,
        margin: 0,
        position: `absolute`,
        top: guideLineHorizontalOffsetTop,
        transform: `translateY(10px)`,
        width: isMediumDensity ? `20px` : `12px`
      },
      "&::after": {
        ...(guidelines
          ? {
              borderLeft: `1px dashed ${
                themeData["treeView.guideLine.backgroundColor"]
              }`
            }
          : {}),
        display: `inline-block`,
        content: `""`,
        height: `100%`,
        left: guideLineVerticalOffsetLeft,
        position: `absolute`,
        top: `0`,
        width: `20px`
      },
      "&:first-of-type": {
        "&::after": {
          ...(isMediumDensity
            ? { top: `-10px`, height: `calc(100% + 10px)` }
            : { top: `-3px`, height: `100%` })
        }
      },
      "&:last-child": {
        "&::after": {
          ...(isMediumDensity
            ? { top: `-9px`, height: `24px` }
            : { top: `-3px`, height: `15px` })
        }
      }
    },
    higTreeItemContentWrapper: {
      alignItems: `center`,
      display: `inline-flex`,
      ...(selected
        ? {
            background: themeData[`colorScheme.background.on.default`],
            paddingLeft: 0
          }
        : {}),
      "& > svg": {
        marginRight: themeData[`treeView.icon.marginRight`]
      }
    },
    higTreeItemSubTreeViewWrapper: {
      transitionProperty: "height",
      transitionDuration: ".3s",
      transitionTimingFunction: "ease-in-out"
    },
    higTreeItemSubTreeView: {
      listStyle: `none`,
      margin: 0,
      paddingLeft: `calc(${itemHeight} + ${
        themeData["treeView.icon.marginRight"]
      })`
    },
    higTreeItemSubTreeViewLabelWrapper: {
      display: `flex`,
      height: itemHeight,
      lineHeight: itemHeight,
      maxWidth: `calc(100% - 10px)`,
      padding: `${themeData["treeView.row.paddingVertical"]}
        ${themeData["treeView.row.paddingHorizontal"]}`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      whiteSpace: `nowrap`
    },
    higTreeItemSubTreeViewLabelContentWrapper: {
      alignItems: `center`,
      display: `flex`,
      ...(selected
        ? { background: themeData[`colorScheme.background.on.default`] }
        : {}),
      "& > svg": {
        marginRight: themeData[`treeView.icon.marginRight`],
        "&:first-of-type": {
          fill: themeData[`treeView.indicatorColor`]
        }
      }
    },
    higTreeItemSubTreeItem: {
      height: itemHeight,
      padding: `${themeData["treeView.row.paddingVertical"]} ${
        themeData["treeView.row.paddingHorizontal"]
      } ${themeData["treeView.row.paddingVertical"]}
        calc(${itemHeight} + ${themeData["treeView.row.paddingHorizontal"]} + ${
        themeData["treeView.icon.marginRight"]
      })`,
      position: `relative`,
      "&::before": {
        ...(guidelines
          ? {
              borderTop: `1px dashed ${
                themeData["treeView.guideLine.backgroundColor"]
              }`
            }
          : {}),
        display: `inline-block`,
        content: `""`,
        left: isMediumDensity ? `-7px` : `-4px`,
        margin: 0,
        position: `absolute`,
        top: guideLineHorizontalOffsetTop,
        transform: `translateY(10px)`,
        width: isMediumDensity ? `42px` : `24px`
      },
      "&::after": {
        ...(guidelines
          ? {
              borderLeft: `1px dashed ${
                themeData["treeView.guideLine.backgroundColor"]
              }`
            }
          : {}),
        display: `inline-block`,
        content: `""`,
        height: `100%`,
        left: guideLineVerticalOffsetLeft,
        position: `absolute`,
        top: `0`,
        width: `20px`
      },
      "&:first-of-type": {
        "&::after": {
          ...(isMediumDensity
            ? { top: `-10px`, height: `calc(100% + 10px)` }
            : { top: `-3px`, height: `100%` })
        }
      },
      "&:last-child": {
        "&::after": {
          ...(isMediumDensity
            ? { top: `-9px`, height: `24px` }
            : { top: `-3px`, height: `15px` })
        }
      }
    },
    higTreeItemIndicatorWrapper: {
      alignItems: `center`,
      display: `flex`,
      height: itemHeight,
      justifyContent: `center`,
      marginRight: themeData[`treeView.icon.marginRight`],
      width: itemHeight
    },
    higTreeItemIconWrapper: {
      alignItems: `center`,
      display: `flex`,
      height: itemHeight,
      justifyContent: `center`,
      marginRight: themeData[`treeView.icon.marginRight`],
      width: itemHeight
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
