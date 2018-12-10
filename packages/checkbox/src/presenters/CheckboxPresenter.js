import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import CheckPresenter from "./CheckPresenter";
import stylesheet from "./stylesheet";

export default class CheckboxPresenter extends Component {
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
     * Sets indeterminate state for checkbox
     */
    indeterminate: PropTypes.bool,
    /**
     * Returns whether or not the checkbox is currently pressed
     */
    isPressed: PropTypes.bool,
    /**
     * The name of the checkbox as submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called when the checkbox is changed
     */
    onChange: PropTypes.func,
    /**
     * Called when user clicks on the checkbox
     */
    onClick: PropTypes.func,
    /**
     * Called when user puts focus on the field
     */
    onFocus: PropTypes.func,
    /**
     * Triggers when the user's mouse is pressed over the checkbox
     */
    onMouseDown: PropTypes.func,
    /**
     * Triggers when the user's mouse is over the checkbox
     */
    onMouseEnter: PropTypes.func,
    /**
     * Triggers when the user's mouse is no longer over the checkbox
     */
    onMouseLeave: PropTypes.func,
    /**
     * Triggers when the user's mouse is no longer pressed over the checkbox
     */
    onMouseUp: PropTypes.func,
    /**
     * Value submitted with a form if checked
     */
    value: PropTypes.string
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    name: "checkbox",
    value: "value"
  };

  setIndeterminate = input => {
    if (input) {
      // Workaround for https://github.com/facebook/react/issues/1798
      // eslint-disable-next-line no-param-reassign
      input.indeterminate = this.props.indeterminate;
    }
  };

  render() {
    const {
      checked,
      disabled,
      hasFocus,
      hasHover,
      indeterminate,
      isPressed,
      name,
      onBlur,
      onChange,
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      onFocus,
      value,
      ...otherProps
    } = this.props;

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
              isPressed
            },
            resolvedRoles
          );

          return (
            <div className={css(styles.checkboxWrapper)}>
              <input
                checked={checked}
                className={css(styles.checkboxInput)}
                disabled={disabled}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                onClick={onClick}
                onFocus={onFocus}
                onMouseDown={onMouseDown}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                ref={this.setIndeterminate}
                type="checkbox"
                value={value}
                {...otherProps}
              />
              <CheckPresenter
                checked={checked}
                disabled={disabled}
                hasFocus={hasFocus}
                hasHover={hasHover}
                indeterminate={indeterminate}
                isPressed={isPressed}
              />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
