import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./InputPresenter.stylesheet";
import { availableVariants } from "../constants";

export default function InputPresenter({
  disabled,
  hasFocus,
  hasHover,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  variant,
  ...otherProps
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
            className={css(styles.input)}
            disabled={disabled}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...otherProps}
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
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  variant: PropTypes.oneOf(availableVariants)
};
