import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";
import { CheckmarkXsUI, OperatorMinusXsUI } from "@hig/icons";

import stylesheet from "./stylesheet";

const CheckPresenter = (props) => {
  const {
    checked,
    disabled,
    hasFocus,
    hasHover,
    indeterminate,
    isPressed,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;

  const { className } = otherProps;
  const checkboxCheckWrapperClassName = createCustomClassNames(
    className,
    "checkbox-check-wrapper"
  );
  const checkboxCheckboxClassName = createCustomClassNames(
    className,
    "checkbox-checkbox"
  );
  const checkboxIndeterminateClassName = createCustomClassNames(
    className,
    "checkbox-indeterminate"
  );

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            checked,
            disabled,
            hasFocus,
            hasHover,
            indeterminate,
            isPressed,
            stylesheet: customStylesheet,
          },
          resolvedRoles
        );

        return (
          <span
            className={cx([
              checkboxCheckWrapperClassName,
              css(styles.checkboxCheckWrapper),
            ])}
          >
            <span
              className={cx([
                checkboxCheckboxClassName,
                css(styles.checkboxCheck),
              ])}
            >
              <CheckmarkXsUI />
            </span>
            <span
              className={cx([
                checkboxIndeterminateClassName,
                css(styles.checkboxIndeterminate),
              ])}
            >
              <OperatorMinusXsUI />
            </span>
          </span>
        );
      }}
    </ThemeContext.Consumer>
  );
};

CheckPresenter.propTypes = {
  /**
   * Checks the checkbox
   */
  checked: PropTypes.bool,
  /**
   * Prevents user actions on the checkbox
   */
  disabled: PropTypes.bool,
  /**
   * Returns whether or not the checkbox is currently focused
   */
  hasFocus: PropTypes.bool,
  /**
   * Returns whether or not the checkbox is currently hovered
   */
  hasHover: PropTypes.bool,
  /**
   * Returns whether or not the checkbox is currently pressed
   */
  isPressed: PropTypes.bool,
  /**
   * Sets indeterminate state for checkbox
   */
  indeterminate: PropTypes.bool,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
};

CheckPresenter.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
};

export default CheckPresenter;
