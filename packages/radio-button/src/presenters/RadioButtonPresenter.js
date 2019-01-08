import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import ButtonPresenter from "./ButtonPresenter";
import stylesheet from "./stylesheet";

export default class RadioButtonPresenter extends Component {
  static propTypes = {
    /**
     * HTML id of the element
     */
    id: PropTypes.string,
    /**
     * Checks the radio button
     */
    checked: PropTypes.bool,
    /**
     * Initially checks the radio button, but allows user action to change it
     */
    defaultChecked: PropTypes.bool,
    /**
     * Prevents user actions on the radio button
     */
    disabled: PropTypes.bool,
    /**
     * The name of the radio button as submitted with a form
     */
    name: PropTypes.string,
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
     * Value submitted with a form if checked
     */
    value: PropTypes.string
  };

  static defaultProps = {
    disabled: false,
    name: "radiobutton",
    value: "value"
  };

  render() {
    const {
      checked,
      defaultChecked,
      disabled,
      hasFocus,
      hasHover,
      isPressed,
      ...otherProps
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet({isPressed, hasFocus, hasHover, checked, disabled, ...this.props}, resolvedRoles);

          return (
            <div
              className={css(styles.radioButton)}
            >
              <div
                className={css(styles.radioButtonContainer)}
              >
                <input
                  defaultChecked={defaultChecked}
                  disabled={disabled}
                  type="radio"
                  className={css(styles.radioButtonInput)}
                  {...otherProps}
                />
                <ButtonPresenter disabled={disabled} />
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
