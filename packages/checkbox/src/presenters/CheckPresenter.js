import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { CheckmarkXsUI, OperatorMinusXsUI } from "@hig/icons";

import stylesheet from "./stylesheet";

export default class CheckPresenter extends Component {
  static propTypes = {
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
    indeterminate: PropTypes.bool
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false
  };

  render() {
    const {
      checked,
      disabled,
      hasFocus,
      hasHover,
      indeterminate,
      isPressed
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            { checked, disabled, hasFocus, hasHover, indeterminate, isPressed },
            resolvedRoles
          );

          return (
            <span className={css(styles.checkboxCheckWrapper)}>
              <span className={css(styles.checkboxCheck)}>
                <CheckmarkXsUI />
              </span>
              <span className={css(styles.checkboxIndeterminate)}>
                <OperatorMinusXsUI />
              </span>
            </span>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
