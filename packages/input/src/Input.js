import React from "react";
import PropTypes from "prop-types";
import InputBehavior from "./behaviors/InputBehavior";
import InputPresenter from "./presenters/InputPresenter";
import InputHaloPresenter from "./presenters/InputHaloPresenter";

import { types, availableTypes } from "./constants";
import htmlInputPropTypes from "./htmlInputPropTypes";

function Wrapper(props) {
  if (props.type === "plain") {
    return props.children;
  }

  return <InputHaloPresenter {...props} />;
}

Wrapper.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(availableTypes)
};

function Input(props) {
  return (
    <InputBehavior
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {({
        hasHover,
        onMouseEnter,
        onMouseLeave,
        hasFocus,
        onFocus,
        onBlur
      }) => (
        <Wrapper
          isDisabled={props.disabled}
          hasFocus={hasFocus}
          hasHover={hasHover}
          type={props.type}
        >
          <InputPresenter
            autoComplete={props.autoComplete}
            defaultValue={props.defaultValue}
            disabled={props.disabled}
            hasFocus={hasFocus}
            hasHover={hasHover}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            name={props.name}
            onBlur={onBlur}
            onChange={props.onChange}
            onFocus={onFocus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            pattern={props.pattern}
            readOnly={props.readOnly}
            required={props.required}
            spellCheck={props.spellCheck}
            tabIndex={props.tabIndex}
            type={props.type}
            value={props.value}
          />
        </Wrapper>
      )}
    </InputBehavior>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(availableTypes),
  ...htmlInputPropTypes
};

Input.defaultProps = {
  type: types.LINE
};

export default Input;
