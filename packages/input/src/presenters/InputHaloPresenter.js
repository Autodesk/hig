import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";

import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./InputHaloPresenter.stylesheet";
import { availableVariants } from "../constants";

const InputHaloPresenter = props => {
  const {
    children,
    hasFocus,
    hasHover,
    isDisabled,
    stylesheet: customStylesheet,
    variant,
    error,
    ...otherProps
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          { isDisabled, hasFocus, hasHover, variant, error },
          resolvedRoles
        );
        const cssStyles = customStylesheet
          ? customStylesheet(
              styles,
              props,
              resolvedRoles,
              metadata.colorSchemeId
            )
          : styles;

        const { className } = otherProps;

        return (
          <div className={cx(css(cssStyles.wrapper), className)}>
            {children}
            <div
              className={cx(
                css(cssStyles.halo),
                className
                  ? className
                      .split(" ")
                      .reduce((acc, cur) => cx(acc, `${cur.trim()}__halo`), "")
                  : ""
              )}
            />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
InputHaloPresenter.displayName = "InputHaloPresenter";

InputHaloPresenter.propTypes = {
  children: PropTypes.node,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  isDisabled: PropTypes.bool,
  stylesheet: PropTypes.func,
  variant: PropTypes.oneOf(availableVariants),
  error: PropTypes.bool
};

export default InputHaloPresenter;
