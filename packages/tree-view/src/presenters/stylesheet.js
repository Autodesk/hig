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

import { PropTypes } from "react";

export default function stylesheet(props, themeData) {
  // console.log(props);
  const {
    alternateBg,
    guidelines,
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
        paddingLeft: `20px`,
        "& li": {
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
            height: `20px`,
            left: 0,
            position: `absolute`,
            top: `0`,
            width: `20px`
          },
        },
        "& li:last-child": {
          "&::after": {
            top: `-9px`
          }
        }
      }
    },
    higTreeItem: {
      margin: 0,
      position: `relative`,
      /* ,
        "&::after": {
          borderLeft: `1px dashed red`,
          display: `inline-block`,
          content: `""`,
          height: `100%`,
          left: 0,
          position: `absolute`,
          top: 0,
          width: `20px`
        },
        "&[aria-expanded='true']": {
          "&::after": {
            border: `none`
          }
        }
      }
      */
      /* "&[aria-expanded='true']": {
        "&::after": {
          border: `none`
        }
      } */
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
