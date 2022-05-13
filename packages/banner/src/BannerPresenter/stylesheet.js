import constants from "../constants";
import { types } from "../types";

export default function stylesheet(props, themeData) {
  const validTypes = Object.values(types);
  const vars = constants(themeData);
  const { stylesheet: customStylesheet } = props;
  const styles = {
    // .hig__banner
    banner: {
      display: "flex",
      boxSizing: "border-box",
      minHeight: vars.bannerWrapperMinHeight,
      borderWidth: "1px 0",
      borderStyle: "solid",

      ...(validTypes.includes(props.type) && {
        borderColor:
          themeData[`banner.${vars.colorMapping[props.type]}.borderColor`],
        backgroundColor:
          themeData[`banner.${vars.colorMapping[props.type]}.backgroundColor`],
      }),
    },

    bannerBackground: {
      backgroundColor: themeData["colorScheme.surface.level100"],
    },

    // .hig__banner__content
    content: {
      display: "flex",
      flexGrow: "1",
      flexShrink: "1",
      alignItems: "center",
      justifyContent: "space-between",
      margin: `${vars.bannerMessagePaddingY} 0 0 ${vars.bannerContentPaddingX}`,
      overflow: "hidden",

      ...(!props.isWrappingContent && {
        flexDirection: "column",
        alignItems: "flex-start",
      }),
    },

    // .hig__banner__message
    message: {
      minWidth: vars.bannerNotificationWidthMin,
      maxWidth: vars.bannerNotificationWidthMax,
      paddingBottom: vars.bannerMessagePaddingY,
      margin: "0 auto 0 0",
      textAlign: "left",

      ...(props.hasActions && {
        marginRight: vars.bannerContentSpacingMin,
      }),

      ...(props.isWrappingContent && {
        marginRight: 0,
      }),
    },

    // .hig__banner__dismiss-button
    dismissButton: {
      display: "flex",
      alignItems: "center",
      flexGrow: "0",
      flexShrink: "0",
      paddingRight: vars.bannerDismissPaddingRight,

      ...(props.hasActions && {
        paddingRight: vars.bannerDismissPaddingRightInteractive,
      }),

      ...(props.isWrappingContent && {
        alignItems: "flex-start",
        paddingTop: vars.bannerDismissPaddingTopWrapping,
      }),

      "& svg": {
        cursor: "pointer",
      },

      "& svg *": {
        fill: themeData["colorScheme.icon.default"],
      },

      "&:hover svg *": {
        fill: themeData["colorScheme.reference.accent"],
      },
    },

    // .hig__banner__interactions-wrapper
    interactionsWrapper: {
      flexShrink: "0",
      paddingRight: vars.bannerActionSpacingX,
      paddingBottom: vars.bannerInteractionsWrapperPaddingY,
    },

    // .hig__banner__icon-background
    iconBackground: {
      display: "flex",
      flexGrow: 0,
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      width: vars.bannerWrapperMinHeight,
      minHeight: vars.bannerWrapperMinHeight,
      margin: 0,

      ...(validTypes.includes(props.type) && {
        backgroundColor:
          themeData[
            `banner.${vars.colorMapping[props.type]}.iconField.backgroundColor`
          ],
      }),
      "svg *": {
        fill: "white",
      },
    },
  };
  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
