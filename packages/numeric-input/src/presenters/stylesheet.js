import { PropTypes } from "react";

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
            right: "0px",
            zIndex: 1 
        },
        spinner: {
            "svg *": {
                fill: themeData["input.indicator.default"]
            },

            "&:active svg *": {
                fill: themeData["colorScheme.indicator.pressed"]
            },
            height: "10px"
        }

    }
}