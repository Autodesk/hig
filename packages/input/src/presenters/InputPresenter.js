import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "../../../themes/build";

import stylesheet from "./InputPresenter.stylesheet";
import { availableTypes } from "../constants";

export default function InputPresenter({
  disabled,
  hasFocus,
  hasHover,
  onBlur,
  onChange,
  onFocus,
  onInput,
  onMouseEnter,
  onMouseLeave,
  value,
  type
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
            className={css(styles.input)}
            disabled={disabled}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onInput={onInput}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            value={value}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

InputPresenter.propTypes = {
  disabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.oneOf(availableTypes)
};
