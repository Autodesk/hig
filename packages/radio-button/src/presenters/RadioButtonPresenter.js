import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import ButtonPresenter from "./ButtonPresenter";
import stylesheet from "./stylesheet";

export default class RadioButtonPresenter extends Component {
  static propTypes = {
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
      id,
      checked,
      defaultChecked,
      disabled,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      value
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => (
          <div
            className={css(stylesheet(this.props, resolvedRoles).radioButton)}
          >
            <div
              className={css(
                stylesheet(this.props, resolvedRoles).radioButtonContainer
              )}
            >
              <input
                id={id}
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                onClick={onClick}
                onFocus={onFocus}
                type="radio"
                value={value}
                className={css(
                  stylesheet(this.props, resolvedRoles).radioButtonInput
                )}
              />
              <ButtonPresenter checked={checked} disabled={disabled} />
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
