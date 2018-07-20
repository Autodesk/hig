import React, { Component } from "react";
import PropTypes from "prop-types";

import CheckboxPresenter from "./CheckboxPresenter/CheckboxPresenter";

export default class Checkbox extends Component {
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
     * Sets indeterminate state for checkbox
     */
    indeterminate: PropTypes.bool,
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
     * Called when user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user puts focus on the field
     */
    onFocus: PropTypes.func,
    /**
     * Marks the field as required, text shown to explain requirement
     */
    required: PropTypes.string,
    /**
     * Value submitted with a form if checked
     */
    value: PropTypes.string
  };

  static defaultProps = {
    defaultChecked: true
  };

  state = {
    checked: this.props.defaultChecked
  };

  /**
   * @param {MouseEvent} event
   */
  handleClick = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }

    this.setState({
      checked: !this.state.checked
    });
  };

  renderChecked() {
    if (this.props.checked !== undefined) {
      return this.props.checked;
    }
    return this.state.checked;
  }

  render() {
    return (
      <CheckboxPresenter
        {...this.props}
        checked={this.renderChecked()}
        onChange={this.handleClick}
      />
    );
  }
}
