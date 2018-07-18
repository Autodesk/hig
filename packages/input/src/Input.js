import React, { Component } from "react";
import PropTypes from "prop-types";

import InputBehavior from "./InputBehavior";
import InputPresenter from "./InputPresenter";

class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  };

  render() {
    const { value, disabled, onChange } = this.props;

    return (
      <InputBehavior>
        {({
          hasHover,
          onMouseEnter,
          onMouseLeave,
          hasFocus,
          onFocus,
          onBlur
        }) => (
          <InputPresenter
            value={value}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onChange={onChange}
            hasHover={hasHover}
            hasFocus={hasFocus}
          />
        )}
      </InputBehavior>
    );
  }
}

export default Input;
