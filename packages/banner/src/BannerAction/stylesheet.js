import constants from "../constants";

export default function stylesheet(props, themeData) {
  const vars = constants(themeData);

  return {
    display: "flex",
    alignItems: "center",
    padding: `${vars.bannerActionPaddingY} ${vars.bannerActionSpacingX} ${
      vars.bannerActionPaddingY
    } 0`,
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    marginLeft: vars.bannerActionSpacingX,

    "&:first-of-type": {
      marginLeft: 0
    },

    ...(props.isWrappedContent && {
      "&:last-of-type": {
        borderRight: 0
      }
    })
  };
}
