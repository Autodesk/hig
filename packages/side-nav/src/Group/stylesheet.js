import { groupSeparator } from "../constants";

export default function stylesheet(props, themeData) {
  return {
    group: groupSeparator(props, themeData, {
      padding: `${themeData["density.spacings.extraSmall"]} 0`,
      position: "relative",

      "&:empty:after": {
        display: "none"
      }
    }),

    intro: {
      paddingLeft: themeData["density.spacings.medium"]
    }
  };
}
