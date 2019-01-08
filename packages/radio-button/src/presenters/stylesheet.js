export default function stylesheet(props, themeData) {
  const { isPressed, disabled } = props;
  const opacity = disabled ? themeData["component.disabled.opacity"] : "1.0";
  const borderWidth = isPressed ? themeData["checkbox.pressed.halo.width"] : themeData["checkbox.borderWidth"];
  console.log("color", themeData["checkbox.borderWidth"]);
  return {
    // this maps to .radio-button
    radioButton: {
      display: "inline-block",
      padding: "0 10px"
    },

    radioButtonContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },

    // this maps to .radio-button__wrapper
    radioButtonWrapper: {
      opacity,
      position: "relative",
      color: "transparent",
      border: `solid ${borderWidth} transparent`,
      boxShadow: `inset 0 0 0 ${themeData["checkbox.borderWidth"]} ${
        themeData["checkbox.borderColor"]
      }`,
      backgroundColor: "transparent",
      textAlign: "center",
      fontSize: "25px",
      lineHeight: "14px",
      height: themeData["checkbox.height"],
      width: themeData["checkbox.width"],
      borderRadius: "50%"
    },

    // this maps to .radio-button__input
    radioButtonInput: {
      display: "inline-block",
      opacity: "0",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      margin: "0",
      padding: "0",
      zIndex: "1",

      // hover
      "&:hover + span.radio-button__wrapper": {
        border: `solid ${borderWidth} ${themeData["checkbox.hover.halo.color"]}`,
      },

      // focus
      "&:focus + span.radio-button__wrapper": {
        border: `solid ${borderWidth} ${themeData["checkbox.focus.halo.color"]}`,
      },

      // // checked + focus
      // "&:focus:checked + span.radio-button__wrapper": {
      //   border: `solid ${themeData["checkbox.halo.width"]} ${themeData["checkbox.pressed.halo.color"]}`,
      //   boxShadow: `inset 0 0 0 ${themeData["checkbox.pressed.halo.width"]} ${themeData["checkbox.borderColor"]}`,
      // },

      // checked
      "&:checked + span.radio-button__wrapper": {
        boxShadow: `inset 0 0 0 ${themeData["checkbox.pressed.halo.width"]} ${themeData["checkbox.borderColor"]}`,
      }
    }
  };
}
