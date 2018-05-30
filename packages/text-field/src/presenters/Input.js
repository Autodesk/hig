import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./input.scss";

export default class Input extends Component {
  static propTypes = {
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * HTML ID attribute
     */
    id: PropTypes.string,
    /**
     * Name of the field when submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user puts focus onto the field
     */
    onFocus: PropTypes.func,
    /**
     * Called as user changes the value of the field
     */
    onInput: PropTypes.func,
    /**
     * Example of what the user should type into the field
     */
    placeholder: PropTypes.string,
    /**
     * Corresponds to the type attribute of an <input>. Relevant for designating a password field, for example.
     */
    type: PropTypes.string,
    /**
     * Value of the field
     */
    value: PropTypes.string
  };

  render() {
    return (
      <input
        className={cx("hig__text-field__input", {
          "hig__text-field__input--no-value": !this.props.value
        })}
        {...this.props}
      />
    );
  }
}
