import { keyframes } from "emotion";
import { types } from "../types";

const MODAL_BODY_LAYER = 1001;
const MODAL_HEADER_LAYER = 1002;
const MODAL_CLOSE_BUTTON_LAYER = 1003;
const MODAL_SHADOW_MASK_LAYER = 1003;
const MODAL_LAYER = 10001;

const HIG_BLUE_10 = "rgba(230, 244, 251, 1)";
const HIG_COOL_GRAY_60 = "rgba(59, 68, 84, 1)";

const WindowClosing = keyframes`
  0% { top: 131px; }
  30% { top: 125px; }
`;

export default function stylesheet(props) {
  const { open, type } = props;
  return {
    modal: {
      wrapper: {
        color: "#2A3B4D",
        opacity: open ? 1.0 : 0,
        pointerEvents: open ? "visible" : "none",
        transition: "all ease 0.2s",
        transitionDelay: open ? "0s" : "0.2s"
      },
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        bottom: 0,
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: MODAL_LAYER
      },
      window: {
        background: "#FFF",
        border: "3px solid #0671A1",
        borderRadius: "4px",
        boxShadow: `0 0 8px 0 rgba(190, 200, 210, 0.4)`,
        display: "flex",
        flexDirection: "column",
        left: "50%",
        maxHeight: "calc(100vh - 256px)",
        maxWidth: "calc(100vw - 32px)",
        opacity: open ? 1.0 : 0,
        outline: "none",
        position: "fixed",
        top: "128px",
        transform: "translateX(-50%)",
        width: "500px",
        zIndex: MODAL_BODY_LAYER,

        "@media screen": { width: "500px" },

        animation: open ? "none" : `${WindowClosing} 0.4s`,
        transition: "all ease 0.2s",
        transitionDelay: "0.2s"
      },
      header: {
        borderBottom: "1px solid #D4DBE1",
        // can I use Typography instead?
        fontFamily: "ArtifaktElement",
        fontSize: "24px",
        margin: "0 32px",
        minHeight: "33px",
        padding: "16px 0",
        position: "relative",
        zIndex: MODAL_HEADER_LAYER,

        ...(type === types.ALTERNATE && {
          backgroundColor: HIG_BLUE_10,
          margin: 0,
          padding: "16px 32px"
        }),

        ".hig__icon-button.hig__icon-button--primary": {
          background: "transparent",
          border: "none",
          cursor: "pointer",
          position: "absolute",
          right: 0,
          top: "16px",
          zIndex: MODAL_CLOSE_BUTTON_LAYER,

          "&:hover, &:focus": {
            borderColor: "transparent",
            backgroundColor: "transparent",

            "svg *": {
              fill: HIG_COOL_GRAY_60
            }
          },

          "&:focus": {
            outline: "none"
          },

          ...(type === types.ALTERNATE && {
            backgroundColor: HIG_BLUE_10,
            right: "16px",
            top: "16px"
          })
        }
      },
      body: {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        // is this necessary, notice there's another use of this same # z-index above
        zIndex: MODAL_BODY_LAYER
      },
      bodyContent: {
        border: "none",
        flex: "1 1 auto",
        overflowX: "auto",
        overflowY: "scroll",
        padding: "0 32px",

        "&::before": {
          backgroundImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          content: "''",
          display: "block",
          height: "16px",
          margin: "0 -16px",
          position: "relative",
          zIndex: MODAL_SHADOW_MASK_LAYER
        },

        "&::after": {
          backgroundImage:
            "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          content: "''",
          display: "block",
          height: "16px",
          margin: "0 -16px",
          position: "relative",
          zIndex: MODAL_SHADOW_MASK_LAYER
        }
      }
    }
  };
}
