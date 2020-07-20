import { PropTypes } from "react";

function getSpinnerRulesByPressed(themeData) {
    return {
        position: "relative"
    }
}
export default function stylesheet(props, themeData) {
    const {
        disabled,
        hasFocus,
        hasHover,
        isPressed
    } = props;

    return {
        spinnerWrapper: {
            boxSizing: `border-box`,
            display: `inline-block`,
            position: `absolute`,
            height: themeData["checkbox.minHeight"],
            width: themeData["checkbox.minWidth"],
            //right: "40px",
            zIndex: 1,
            ...(isPressed ? getSpinnerRulesByPressed(themeData) : {})   
        },
        spinnerUp: {
          color: "red"
        },
        spinnerUpWrapper: {
 
        },
        spinnerDown: {

        },
        spinner: {
            backgroundColor: "transparent",
            position: "absolute",
            borderColor: "transparent",
            color: "transparent",
            outline: "none"
        }
    }
}