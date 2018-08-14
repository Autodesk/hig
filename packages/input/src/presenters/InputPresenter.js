import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/themes";

import stylesheet from "./InputPresenter.stylesheet";
import { availableTypes } from "../constants";
import htmlInputPropTypes from "../htmlInputPropTypes";

export default function InputPresenter({
  autoComplete,
  defaultValue,
  disabled,
  hasFocus,
  hasHover,
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
  type,
  value
}) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const styles = stylesheet(
          { isDisabled: disabled, hasFocus, hasHover, type },
          themeData
        );

        return (
          <input
            autoComplete={autoComplete}
            className={css(styles.input)}
            defaultValue={defaultValue}
            disabled={disabled}
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
  ...htmlInputPropTypes,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  type: PropTypes.oneOf(availableTypes)
};
