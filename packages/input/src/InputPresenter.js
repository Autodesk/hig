import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/themes";

import stylesheet from "./stylesheet";

export default function InputPresenter({
  disabled,
  hasFocus,
  hasHover,
  value,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  onChange
}) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const styles = stylesheet(
          { isDisabled: disabled, hasFocus, hasHover },
          themeData
        );

        return (
          <div className={css(styles.inputWrapper)}>
            <input
              className={css(styles.input)}
              value={value}
              disabled={disabled}
              onFocus={onFocus}
              onBlur={onBlur}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onChange={onChange}
            />
            <div className={css(styles.halo)} />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

InputPresenter.propTypes = {
  disabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onChange: PropTypes.func
};
