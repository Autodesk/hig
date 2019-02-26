import { keyframes } from "emotion";
import { types } from "../types";

const MODAL_BODY_LAYER = 1001;
const MODAL_HEADER_LAYER = 1002;
const MODAL_SHADOW_MASK_LAYER = 1003;
const MODAL_LAYER = 10001;

const WindowClosing = keyframes`
  0% { top: 131px; }
  30% { top: 125px; }
`;

export default function stylesheet(props, themeData) {
  const { open, type } = props;

  const headerFontSize = themeData["density.fontSizes.large"];
  const headerLinHeight = 1.66666;

  return {
    modal: {
      wrapper: {
        color: themeData["modal.textColor"],
        opacity: open ? 1.0 : 0,
        pointerEvents: open ? "visible" : "none",
        transition: "all ease 0.2s",
        transitionDelay: open ? "0s" : "0.2s"
      },

      overlay: {
        backgroundColor: themeData["modal.overlay.color"],
        bottom: 0,
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: MODAL_LAYER
      },

      window: {
        background: themeData["modal.window.backgroundColor"],
        borderRadius: themeData["modal.window.borderRadius"],
        boxShadow: `0 0 8px 0 ${themeData["modal.window.shadowColor"]}`,
        display: "flex",
        flexDirection: "column",
        left: "50%",
        height: themeData["modal.window.height"],
        width: themeData["modal.window.width"],
        opacity: open ? 1.0 : 0,
        outline: "none",
        position: "fixed",
        top: "128px",
        transform: "translateX(-50%)",
        zIndex: MODAL_BODY_LAYER,

        animation: open ? "none" : `${WindowClosing} 0.4s`,
        transition: "all ease 0.2s",
        transitionDelay: "0.2s"
      },

      header: {
        fontSize: headerFontSize,
        lineHeight: headerLinHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderBottom: `1px solid ${themeData["modal.header.borderColor"]}`,
        minHeight: themeData["modal.header.height"],
        zIndex: MODAL_HEADER_LAYER,

        ...(type === types.ALTERNATE && {
          backgroundColor: themeData["modal.header.backgroundColor"]
        })
      },

      headerContent: {
        margin: `0 ${themeData["modal.horizontalPadding"]}`,
        display: "flex",
        justifyContent: "space-between",

        ".hig__icon-button.hig__icon-button--primary": {
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
          height: `calc(${headerFontSize} * ${headerLinHeight})`,
          minWidth: "16px",

          "svg *": {
            fill: themeData["modal.textColor"]
          },

          "&:hover, &:focus": {
            borderColor: "transparent",
            backgroundColor: "transparent",

            "svg *": {
              fill: themeData["modal.textColor"]
            }
          },

          "&:focus": {
            outline: "none"
          },

          ...(type === types.ALTERNATE && {
            backgroundColor: themeData["modal.header.backgroundColor"]
          })
        }
      },

      body: {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        minHeight: themeData["modal.body.height"],

        "&::before": {
          backgroundColor: themeData["modal.window.backgroundColor"],
          content: "''",
          display: "block",
          height: "16px",
          position: "relative",
          margin: `0 ${themeData["modal.horizontalPadding"]}`,
          zIndex: MODAL_SHADOW_MASK_LAYER
        },

        "&::after": {
          backgroundColor: themeData["modal.window.backgroundColor"],
          content: "''",
          display: "block",
          height: "16px",
          position: "relative",
          margin: `0 ${themeData["modal.horizontalPadding"]}`,
          zIndex: MODAL_SHADOW_MASK_LAYER
        }
      },

      bodyContent: {
        border: "none",
        flex: "1 1 auto",
        overflowX: "auto",
        overflowY: "auto",
        padding: `0 ${themeData["modal.horizontalPadding"]}`
      }
    }
  };
}
