import React, { Component } from "react";
import PropTypes from "prop-types";
import { polyfill } from "react-lifecycles-compat";

import InputBehavior from "./InputBehavior";
import InputPresenter from "./InputPresenter";

class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool
  };

  render() {
    const { value, disabled } = this.props;

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
            hasHover={hasHover}
            hasFocus={hasFocus}
          />
        )}
      </InputBehavior>
    );
  }
}

export default polyfill(Input);
