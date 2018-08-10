import React from "react";
import PropTypes from "prop-types";
import InputBehavior from "./behaviors/InputBehavior";
import InputPresenter from "./presenters/InputPresenter";
import InputHaloPresenter from "./presenters/InputHaloPresenter";

import { types, availableTypes } from "./constants";

const wrappers = {
  [types.LINE]: InputHaloPresenter,
  [types.BOX]: InputHaloPresenter,
  [types.PLAIN]: "div"
};

function Input({ type, value, disabled, onChange }) {
  const Wrapper = wrappers[type];
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
        <Wrapper
          isDisabled={disabled}
          hasFocus={hasFocus}
          hasHover={hasHover}
          type={type}
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
            type={type}
          />
        </Wrapper>
      )}
    </InputBehavior>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(availableTypes),
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: types.LINE
};

export default Input;
