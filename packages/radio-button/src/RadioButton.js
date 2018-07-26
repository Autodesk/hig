import React, { Component } from "react";
import PropTypes from "prop-types";

import RadioButtonPresenter from "./presenters/RadioButtonPresenter";

export default class RadioButton extends Component {
  static propTypes = {
    /**
     * Checks the checkbox
     */
    checked: PropTypes.bool,
    /**
     * Initially checks the checkbox, but allows user action to change it
     */
    defaultChecked: PropTypes.bool,
    /**
     * Prevents user actions on the checkbox
     */
    disabled: PropTypes.bool,
    /**
     * Text identifying the field
     */
    label: PropTypes.string,
    /**
     * The name of the checkbox as submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called when user clicks on the field
     */
    onClick: PropTypes.func,
    /**
     * Called when user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user puts focus on the field
     */
    onFocus: PropTypes.func,
    /**
     * Marks the field as required, text shown to explain requirment
     */
    required: PropTypes.string,
    /**
     * Value submitted with a form if checked
     */
    value: PropTypes.string
  };

  static defaultProps = {
    defaultChecked: false
  };

  state = {
    checked: this.props.defaultChecked
  };

  isControlled() {
    return this.props.checked !== undefined;
  }

  isChecked() {
    if (this.isControlled()) {
      return this.props.checked;
    }

    return this.state.checked;
  }

  toggleChecked() {
    const { onChange } = this.props;
    const checked = !this.state.checked;

    if (onChange) {
      onChange(checked);
    }

    this.setState({ checked });
  }

  /**
   * @param {MouseEvent} event
   */
  handleClick = event => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(event);
    }

    if (!this.isControlled()) {
      this.toggleChecked();
    }
  };

  render() {
    return (
      <RadioButtonPresenter
        {...this.props}
        checked={this.isChecked()}
        onClick={this.handleClick}
      />
    );
  }
}
