import React from "react";

import inputPropTypes from "./inputPropTypes";
import InputBehavior from "./behaviors/InputBehavior";
import InputPresenter from "./presenters/InputPresenter";
import InputHaloPresenter from "./presenters/InputHaloPresenter";

function UnderlineInput({ value, disabled, onChange }) {
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
        <InputHaloPresenter
          isDisabled={disabled}
          hasFocus={hasFocus}
          hasHover={hasHover}
        >
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
        </InputHaloPresenter>
      )}
    </InputBehavior>
  );
}

UnderlineInput.propTypes = inputPropTypes;

export default UnderlineInput;
