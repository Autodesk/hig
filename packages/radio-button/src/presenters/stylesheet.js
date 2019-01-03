export default function stylesheet(props, themeData) {
  const { disabled } = props;

  const opacity = disabled ? themeData["component.disabled.opacity"] : "1.0";

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
      border: `${themeData["checkbox.borderWidth"]} solid ${
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
        borderColor: themeData["checkbox.hover.borderColor"]
      },

      // focus
      "&:focus + span.radio-button__wrapper": {
        outline: "none",
        borderColor: themeData["checkbox.focus.borderColor"]
      },

      // checked + focus
      "&:focus:checked + span.radio-button__wrapper": {
        background: "none",
        borderColor: themeData["checkbox.pressed.borderColor"],
        backgroundColor: themeData["checkbox.checked.backgroundColor"],
        boxShadow: `inset 0 0 0 ${themeData["checkbox.halo.width"]} ${
          themeData["checkbox.backgroundColor"]
        }`
      },

      // checked
      "&:checked + span.radio-button__wrapper": {
        background: "none",
        borderColor: themeData["checkbox.checked.borderColor"],
        backgroundColor: themeData["checkbox.checked.backgroundColor"],
        boxShadow: `inset 0 0 0 ${themeData["checkbox.halo.width"]} ${
          themeData["checkbox.backgroundColor"]
        }`
      }
    }
  };
}
