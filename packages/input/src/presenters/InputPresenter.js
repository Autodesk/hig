import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/themes-poc";

import stylesheet from "./InputPresenter.stylesheet";
import { availableVariants, availableInputModes } from "../constants";

export default function InputPresenter({
  autoComplete,
  defaultValue,
  disabled,
  hasFocus,
  hasHover,
  id,
  inputMode,
  maxLength,
  minLength,
  name,
  onBlur,
  onChange,
  onFocus,
  onInput,
  onMouseEnter,
  onMouseLeave,
  pattern,
  readOnly,
  required,
  spellCheck,
  tabIndex,
  value,
  variant
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { isDisabled: disabled, hasFocus, hasHover, variant },
          resolvedRoles
        );

        return (
          <input
            autoComplete={autoComplete}
            className={css(styles.input)}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            inputMode={inputMode}
            maxLength={maxLength}
            minLength={minLength}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onInput={onInput}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            pattern={pattern}
            readOnly={readOnly}
            required={required}
            spellCheck={spellCheck}
            tabIndex={tabIndex}
            value={value}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

InputPresenter.propTypes = {
  autoComplete: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  id: PropTypes.string,
  inputMode: PropTypes.oneOf(availableInputModes),
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  pattern: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  spellCheck: PropTypes.bool,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(availableVariants)
};
