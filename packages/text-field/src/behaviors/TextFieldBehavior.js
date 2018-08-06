import React, { Component } from "react";
import PropTypes from "prop-types";

import TextInputBehavior from "./TextInputBehavior";

export default class TextFieldBehavior extends Component {
  static propTypes = {
    /**
     * A render prop function
     */
    children: PropTypes.func,
    /**
     * Initial value of the field
     */
    defaultValue: PropTypes.string,
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user clicks the clear button
     */
    onClearButtonClick: PropTypes.func,
    /**
     * Initial value of the field
     */
    value: PropTypes.string
  };

  /** @type {function(): void} */
  clear;

  /**
   * @param {MouseEvent} event
   */
  handleInputClear = event => {
    const { onClearButtonClick } = this.props;

    if (onClearButtonClick) {
      onClearButtonClick(event);
    }

    this.clear();
  };

  /**
   * @param {import("./TextInputBehavior").TextInputBehaviorPayload} payload
   */
  renderPresenter = ({ value, handleChange, clear }) => {
    this.clear = clear;

    const { handleInputClear } = this;

    return this.props.children({
      value,
      handleChange,
      handleInputClear
    });
  };

  render() {
    const { defaultValue, onChange, value } = this.props;

    return (
      <TextInputBehavior
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
      >
        {this.renderPresenter}
      </TextInputBehavior>
    );
  }
}
