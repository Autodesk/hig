import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import ButtonPresenter from "./ButtonPresenter";
import stylesheet from "./stylesheet";

export default class RadioButtonPresenter extends Component {
  static propTypes = {
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called when user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user clicks on the field
     */
    onClick: PropTypes.func,
    /**
     * Called when user puts focus on the field
     */
    onFocus: PropTypes.func,
    /**
     * Returns whether or not the button is currently focused
     */
    hasFocus: PropTypes.bool,
    /**
     * Returns whether or not the button is currently hovered
     */
    hasHover: PropTypes.bool,
    /**
     * Returns whether or not the button is currently pressed
     */
    isPressed: PropTypes.bool,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  render() {
    const {
      disabled,
      hasFocus,
      hasHover,
      isPressed,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              isPressed,
              hasFocus,
              hasHover,
              disabled,
              stylesheet: customStylesheet,
              ...this.props
            },
            resolvedRoles
          );

          const { className } = otherProps;
          const radioButtonInputClassName = createCustomClassNames(
            className,
            "radio-button-input"
          );

          return (
            <div className={cx(css(styles.radioButtonContainer), className)}>
              <input
                {...otherProps}
                disabled={disabled}
                type="radio"
                className={cx(
                  css(styles.radioButtonInput),
                  radioButtonInputClassName
                )}
              />
              <ButtonPresenter
                {...otherProps}
                hasFocus={hasFocus}
                hasHover={hasHover}
                isPressed={isPressed}
                disabled={disabled}
                stylesheet={customStylesheet}
              />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
