import { types } from "../types";
// TODO extract these?
const MODAL_HEADER_LAYER = 1002;
const MODAL_CLOSE_BUTTON_LAYER = 1003;

const HIG_BLUE_10 = "rgba(230, 244, 251, 1)";
const HIG_COOL_GRAY_60 = "rgba(59, 68, 84, 1)";

export default function stylesheet({ type }) {
  return {
    modalHeader: {
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
    }
  };
}
