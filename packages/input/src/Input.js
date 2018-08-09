import React from "react";

import inputPropTypes from "./inputPropTypes";
import InputBehavior from "./behaviors/InputBehavior";
import InputPresenter from "./presenters/InputPresenter";

function Input({ value, disabled, onInput, onChange, onFocus, onBlur }) {
  return (
    <InputBehavior onBlur={onBlur} onFocus={onFocus}>
      {({
        handleBlur,
        handleFocus,
        hasFocus,
        hasHover,
        handleMouseEnter,
        handleMouseLeave
      }) => (
        <InputPresenter
          value={value}
          disabled={disabled}
          hasHover={hasHover}
          hasFocus={hasFocus}
          onBlur={handleBlur}
          onChange={onChange}
          onFocus={handleFocus}
          onInput={onInput}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </InputBehavior>
  );
}

Input.propTypes = inputPropTypes;

export default Input;
