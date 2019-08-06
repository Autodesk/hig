import constants from "../constants";

export default function stylesheet(props, themeData) {
  const vars = constants(themeData);

  return {
    display: "flex",
    alignItems: "center",
    padding: `${vars.bannerActionPaddingY} 0`,
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
