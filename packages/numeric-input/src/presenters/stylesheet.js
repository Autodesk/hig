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
            position: `absolute`,
            width: "10px",
            //right: "40px",
            zIndex: 1,
            left: "200px"
            //...(isPressed ? getSpinnerRulesByPressed(themeData) : {})   
        },
        spinner: {
            "svg *": {
                fill: themeData["input.indicator.default"]
            },

            "&:active svg *": {
                fill: themeData["colorScheme.indicator.pressed"]
            },
            height: "10px"
        },
        spinnerUpWrapper: {
 
        },
        spinnerDown: {

        },
        spinner1: {
            backgroundColor: "transparent",
            position: "absolute",
            borderColor: "transparent",
            color: "transparent",
            outline: "none"
        },
        spinner2: {
            backgroundColor: "transparent",
            position: "absolute",
            borderColor: "transparent",
            color: "transparent",
            outline: "none"
        },

    }
}