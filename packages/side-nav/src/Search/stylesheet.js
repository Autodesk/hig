import { reset } from "../constants";

export default function stylesheet(props, themeData) {
  return {
    search: {
      display: "flex",
      alignItems: "center",
      position: "relative"
    },

    icon: {
      position: "absolute",
      left: "14px",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },

    inputWrapper: {
      margin: "8px 10px",
      width: "100%"
    },

    input: reset({
      border: `1px solid ${themeData["basics.colors.slate400"]}`,
      borderRadius: "4px",
      fontSize: "14px",
      padding: "6px 35px",
      width: "100%",
      fontWeight: "500",

      "&:placeholder": {
        fontWeight: "normal",
        color: themeData["basics.colors.slate700"]
      },

      "&:focus": {
        outline: "none"
      }
    }),

    clear: {
      position: "absolute",
      right: "12px",
      cursor: "pointer"
    }
  };
}
