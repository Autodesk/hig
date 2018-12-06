import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import {
  CheckboxChecked16,
  CheckmarkIndeterminate16,
  CheckDisabled16,
  CheckWhite24
} from "@hig/icons";

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
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            { checked, disabled, hasFocus, hasHover, indeterminate, isPressed },
            resolvedRoles,
            metadata.colorSchemeId
          );
          const Checkmark =
            metadata.colorSchemeId === "hig-light" ? (
              <CheckWhite24 />
            ) : (
              <CheckboxChecked16 />
            );
          const DisabledCheckmark =
            metadata.colorSchemeId === "hig-light" ? (
              <CheckDisabled16 />
            ) : (
              <CheckboxChecked16 />
            );
          const CheckmarkIcon = disabled ? DisabledCheckmark : Checkmark;

          return (
            <span className={css(styles.checkboxCheckWrapper)}>
              <span className={css(styles.checkboxCheck)}>{CheckmarkIcon}</span>
              <span className={css(styles.checkboxIndeterminate)}>
                <CheckmarkIndeterminate16 />
              </span>
            </span>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
