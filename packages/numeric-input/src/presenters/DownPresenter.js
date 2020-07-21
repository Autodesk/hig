import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";
import { CaretDownMUI, CaretDownSUI} from "@hig/icons";

export default class UpPresenter extends Component {
    static PropTypes = {
        disabled: PropTypes.bool,
        hasFocus: PropTypes.bool,
        hasHover: PropTypes.bool,
        isPressed: PropTypes.bool
    }

    static defaultProps = {
        value: "0",
        disabled: false
    }

    render() {
        const {
            disabled,
            hasFocus,
            hasHover,
            isPressed
        } = this.props;
        const iconColor = hasHover ? "red" : "";

        return (
            <ThemeContext.Consumer>
              {({ resolvedRoles, metadata }) => {
                const styles = stylesheet(
                  { disabled, hasFocus, hasHover, isPressed },
                  resolvedRoles
                );
                const iconColor = hasHover ? resolvedRoles["colorScheme.indicator.hover"]: resolvedRoles["input.indicator.default"];
                const DownIcon = metadata.densityId === "medium-density" ? CaretDownMUI : CaretDownSUI;
      
                return (
                  <span className={css(styles.spinnerUpWrapper)}>
                    <span className={css(styles.spinnerUp)}>
                      <DownIcon color={iconColor}/>
                    </span>
                  </span>
                );
              }}
            </ThemeContext.Consumer>
          );
    }
}