export default function stylesheet(props, themeData) {
  const {
    alternateBg,
    guidelines,
    hasHover,
    highlighted,
    level,
    selected,
    selectedEffect,
    stylesheet: customStylesheet
  } = props;
  const levelOffset = Number(level) - 1;
  const isMediumDensity = themeData[`treeView.row.paddingVertical`] === `8px`;
  const contentHeight = isMediumDensity ? `24px` : `16px`;
  const bgHeight = isMediumDensity ? `160px` : `96px`;
  const guideLineVerticalOffsetLeft = offset => {
    const defaultOffset = offset || 0;
    return isMediumDensity
      ? `calc(24px + ((${contentHeight} + ${themeData["treeView.icon.marginRight"]}) * ${levelOffset}) - ${defaultOffset}px)`
      : `calc(15px + ((${contentHeight} + ${themeData["treeView.icon.marginRight"]}) * ${levelOffset}) - ${defaultOffset}px)`;
  };
  const guideLineHorizontalOffsetTop = isMediumDensity ? `9px` : `2px`;
  const styles = {
    higTreeViewWrapper: {
      ...(alternateBg
        ? {
            backgroundImage: `repeating-linear-gradient(
              0deg,
              ${themeData["table.zebraStripe.backgroundColor"]},
              ${themeData["table.zebraStripe.backgroundColor"]} 25%,
              ${themeData["table.row.backgroundColor"]} 25%,
              ${themeData["table.row.backgroundColor"]} 50%,
              ${themeData["table.zebraStripe.backgroundColor"]} 50%,
              ${themeData["table.zebraStripe.backgroundColor"]} 75%,
              ${themeData["table.row.backgroundColor"]} 75%,
              ${themeData["table.row.backgroundColor"]} 100%
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
              borderTop: `1px dashed ${themeData["treeView.guideLine.backgroundColor"]}`
            }
          : {}),
        display: `inline-block`,
        content: `""`,
        left: isMediumDensity
          ? `calc((24px * ${Number(level)}) + (8px * ${levelOffset}))`
          : `calc((16px * ${Number(level)}) + (4px * ${levelOffset}))`,
        margin: 0,
        position: `absolute`,
        top: guideLineHorizontalOffsetTop,
        transform: `translateY(10px)`,
        width: isMediumDensity ? `20px` : `12px`
      },
      "&::after": {
        ...(guidelines
          ? {
              borderLeft: `1px dashed ${themeData["treeView.guideLine.backgroundColor"]}`
            }
          : {}),
        display: `inline-block`,
        content: `""`,
        height: `100%`,
        left: guideLineVerticalOffsetLeft(),
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
      display: `flex`,
      padding: `0 ${themeData["treeView.row.paddingHorizontal"]}`,
      width: `calc(100% - ${themeData["treeView.row.paddingHorizontal"]})`,
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
      paddingLeft: 0
    },
    higTreeItemSubTreeViewLabelWrapper: {
      border: `1px solid transparent`,
      boxSizing: `border-box`,
      display: `flex`,
      height: themeData[`treeView.row.height`],
      lineHeight: themeData[`treeView.item.lineHeight`],
      padding: `${themeData["treeView.row.paddingVertical"]}
        ${themeData["treeView.row.paddingHorizontal"]}
        ${themeData["treeView.row.paddingVertical"]}
        calc((${contentHeight} + ${
        themeData["treeView.icon.marginRight"]
      }) * ${Number(level)})`,
      transition: `background-color 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s cubic-bezier(0.4,0,0.2,1)`,
      ...(hasHover || highlighted
        ? {
            background:
              themeData[`colorScheme.background.empty.level100To250.hover`]
          }
        : {}),
      ...(selectedEffect
        ? {
            background: themeData[`colorScheme.background.on.default`],
            border: `1px solid ${themeData["colorScheme.border.on"]}`
          }
        : {}),
      ...(selectedEffect && (hasHover || highlighted)
        ? {
            background: themeData[`colorScheme.background.on.hover`]
          }
        : {})
    },
    higTreeItemSubTreeViewLabelContentWrapper: {
      alignItems: `center`,
      display: `flex`,
      padding: `0 ${themeData["treeView.row.paddingHorizontal"]}`,
      width: `calc(100% - ${themeData["treeView.row.paddingHorizontal"]})`,
      "& > svg": {
        marginRight: themeData[`treeView.icon.marginRight`],
        "&:first-of-type": {
          fill: themeData[`treeView.indicatorColor`]
        }
      }
    },
    higTreeItemSubTreeItem: {
      border: `1px solid transparent`,
      boxSizing: `border-box`,
      height: themeData[`treeView.row.height`],
      padding: `${themeData["treeView.row.paddingVertical"]} ${themeData["treeView.row.paddingHorizontal"]} ${themeData["treeView.row.paddingVertical"]}
        calc((${contentHeight} + ${themeData["treeView.icon.marginRight"]}) + ((${contentHeight} + ${themeData["treeView.icon.marginRight"]}) * ${level}))`,
      position: `relative`,
      transition: `background-color 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s cubic-bezier(0.4,0,0.2,1)`,
      ...(hasHover || highlighted
        ? {
            background:
              themeData[`colorScheme.background.empty.level100To250.hover`]
          }
        : {}),
      ...(selectedEffect
        ? {
            background: themeData[`colorScheme.background.on.default`],
            border: `1px solid ${themeData["colorScheme.border.on"]}`
          }
        : {}),
      ...(selectedEffect && (hasHover || highlighted)
        ? {
            background: themeData[`colorScheme.background.on.hover`]
          }
        : {}),
      "&::before": {
        ...(guidelines
          ? {
              borderTop: `1px dashed ${themeData["treeView.guideLine.backgroundColor"]}`
            }
          : {}),
        display: `inline-block`,
        content: `""`,
        left: isMediumDensity
          ? `calc((24px * ${Number(level)}) + (8px * ${levelOffset}))`
          : `calc((16px * ${Number(level)}) + (4px * ${levelOffset}))`,
        margin: 0,
        position: `absolute`,
        top: guideLineHorizontalOffsetTop,
        transform: `translateY(10px)`,
        width: isMediumDensity ? `42px` : `24px`
      },
      "&::after": {
        ...(guidelines
          ? {
              borderLeft: `1px dashed ${themeData["treeView.guideLine.backgroundColor"]}`
            }
          : {}),
        display: `inline-block`,
        content: `""`,
        height: `100%`,
        left: guideLineVerticalOffsetLeft(1),
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
      cursor: `pointer`,
      display: `flex`,
      flex: `0 0 ${contentHeight}`,
      height: contentHeight,
      justifyContent: `center`,
      marginRight: themeData[`treeView.icon.marginRight`],
      outline: 0,
      width: contentHeight
    },
    higTreeItemIconWrapper: {
      alignItems: `center`,
      display: `flex`,
      flex: `0 0 ${contentHeight}`,
      height: contentHeight,
      justifyContent: `center`,
      marginRight: themeData[`treeView.icon.marginRight`],
      width: contentHeight
    },
    higTreeItemLabelWrapper: {
      display: `block`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      whiteSpace: `nowrap`
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
