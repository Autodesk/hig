import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

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
    isPressed: PropTypes.bool
  };

  render() {
    const {
      disabled,
      hasFocus,
      hasHover,
      isPressed,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            { isPressed, hasFocus, hasHover, disabled, ...this.props },
            resolvedRoles
          );

          return (
            <div className={css(styles.radioButtonContainer)}>
              <input
                disabled={disabled}
                type="radio"
                className={css(styles.radioButtonInput)}
                {...otherProps}
              />
              <ButtonPresenter
                hasFocus={hasFocus}
                hasHover={hasHover}
                isPressed={isPressed}
                disabled={disabled}
              />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
