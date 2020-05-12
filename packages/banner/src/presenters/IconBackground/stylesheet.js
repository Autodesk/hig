import constants from "../../constants";
import { types } from "../../types";

export default function stylesheet(props, themeData) {
  const validTypes = Object.values(types);
  const vars = constants(themeData);

  return {
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
        ]
    }),
    "svg *": {
      fill: "white"
    }
  };
}
