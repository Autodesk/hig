import { keyframes } from "emotion";
import { types } from "../types";

const MODAL_BODY_LAYER = 1001;
const MODAL_HEADER_LAYER = 1002;
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
        color: themeData["modal.fontColor"],
        opacity: open ? 1.0 : 0,
        pointerEvents: open ? "visible" : "none",
        transition: "all ease 0.2s",
        transitionDelay: open ? "0s" : "0.2s",
      },

      overlay: {
        backgroundColor: themeData["modal.overlayColor"],
        bottom: 0,
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: MODAL_LAYER,
      },

      window: {
        background: themeData["modal.shell.backgroundColor"],
        borderRadius: themeData["modal.shell.borderRadius"],
        boxShadow: `0 0 8px 0 ${themeData["modal.shell.shadowColor"]}`,
        display: "flex",
        flexDirection: "column",
        left: "50%",
        height: themeData["modal.shell.minHeight"],
        width: themeData["modal.shell.minWidth"],
        opacity: open ? 1.0 : 0,
        outline: "none",
        position: "fixed",
        top: "128px",
        transform: "translateX(-50%)",
        zIndex: MODAL_BODY_LAYER,

        animation: open ? "none" : `${WindowClosing} 0.4s`,
        transition: "all ease 0.2s",
        transitionDelay: "0.2s",
      },

      header: {
        fontSize: headerFontSize,
        fontWeight: themeData["basics.fontWeights.medium"],
        lineHeight: headerLinHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderBottom: `1px solid ${themeData["modal.header.borderBottomColor"]}`,
        minHeight: themeData["modal.header.minHeight"],
        zIndex: MODAL_HEADER_LAYER,

        ...(type === types.ALTERNATE && {
          backgroundColor: themeData["modal.header.backgroundColor"],
        }),
      },

      headerContent: {
        margin: `0 ${themeData["modal.paddingHorizontal"]}`,
        display: "flex",
        justifyContent: "space-between",
        "svg *": {
          fill: themeData["modal.fontColor"],
        },
        "&:hover, &:focus": {
          "svg *": {
            fill: themeData["modal.fontColor"],
          },
        },
        ...(type === types.ALTERNATE && {
          backgroundColor: themeData["modal.header.backgroundColor"],
        }),
      },

      body: {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        minHeight: themeData["modal.body.minHeight"],
      },

      bodyContent: {
        border: "none",
        flex: "1 1 auto",
        overflowX: "auto",
        overflowY: "auto",
        padding: themeData["modal.paddingHorizontal"],
      },
    },
  };
}
