import { groupSeparator, typographyBase, mq } from "../constants";

function _header(props, themeData, styles) {
  return Object.assign(
    groupSeparator(props, themeData, {
      position: "relative",
      padding: `${themeData["density.spacings.small"]} 0`
    }),
    { display: "block" },
    props.isLink
      ? {
          padding: `0 ${themeData["density.spacings.small"]} 0 ${
            themeData["density.spacings.medium"]
          }`,
          fontWeight: "600",
          textDecoration: "none",
          cursor: "pointer"
        }
      : {},
    styles
  );
}

export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet } = props;

  const styles = {
    sideNav: {
      display: "flex",
      flexFlow: "column",
      width: "100%",
      height: "100%",
      overflow: "hidden"
    },

    overflow: {
      boxSizing: "border-box",
      flex: "1 1 auto",
      height: "100%",
      margin: "4px 0",
      overflowY: "auto",
      overflowX: "hidden",
      msOverflowStyle: "-ms-autohiding-scrollbar",

      "&::-webkit-scrollbar": {
        width: "4px"
      },

      "&::-webkit-scrollbar-thumb": {
        width: "5px",
        height: "200px",
        borderRadius: "2px"
      }
    },

    headers: {
      super: _header(props, themeData, {
        fontSize: themeData["density.fontSizes.small"],
        color: themeData["typography.body.color"]
      }),

      normal: _header(props, themeData, {
        fontSize: themeData["density.fontSizes.large"],
        color: themeData["typography.body.color"]
      })
    },

    slot: {
      padding: `32px 8px 32px 16px`
    },

    links: {
      margin: `${themeData["density.spacings.medium"]} 0`
    },

    copyright: typographyBase(props, themeData, {
      paddingLeft: themeData["density.spacings.medium"],
      marginBottom: "40px",
      fontSize: "12px"
    }),

    minimize: {
      display: "flex",
      justifyContent: "flex-end",
      margin: "0 4px",

      [mq.tablet]: {
        display: "none"
      }
    }
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData);
  }

  return styles;
}
