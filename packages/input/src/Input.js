import React from "react";

import inputPropTypes from "./inputPropTypes";
import InputBehavior from "./behaviors/InputBehavior";
import InputPresenter from "./presenters/InputPresenter";

function Input({ value, disabled, onChange }) {
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

Input.propTypes = inputPropTypes;

export default Input;
