import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

import {
  availableTargets,
  availableTypes,
  availableWidths
} from "../constants";

export default class ButtonPresenter extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    hasFocus: PropTypes.bool,
    hasHover: PropTypes.bool,
    isPressed: PropTypes.bool,
    icon: PropTypes.node,
    link: PropTypes.string,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    stylesheet: PropTypes.func,
    target: PropTypes.oneOf(availableTargets),
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(availableTypes),
    width: PropTypes.oneOf(availableWidths)
  };

  render() {
    const {
      disabled,
      hasFocus,
      hasHover,
      isPressed,
      icon,
      link,
      onBlur,
      onClick,
      onFocus,
      onHover,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      stylesheet: customStylesheet,
      target,
      title,
      type,
      width,
      ...otherProps
    } = this.props;

    const { className } = otherProps;

    const href = link || undefined;
    const tabIndex = disabled ? "-1" : "0";
    const Wrapper = link ? "a" : "button";
    const wrapperTarget = link ? target : undefined;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            { disabled, hasFocus, hasHover, isPressed, type, width },
            resolvedRoles,
            metadata
          );
          const cssStyles = customStylesheet
            ? customStylesheet(styles, this.props, resolvedRoles, metadata)
            : styles;

          return (
            <Wrapper
              {...otherProps}
              className={cx(css(cssStyles.button), className)}
              href={href}
              tabIndex={tabIndex}
              target={wrapperTarget}
              onBlur={onBlur}
              onClick={onClick}
              onFocus={onFocus}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseOver={onHover}
              onMouseUp={onMouseUp}
              disabled={disabled}
            >
              {icon && <span className={css(cssStyles.icon)}>{icon}</span>}
              <span className={icon ? css(cssStyles.iconText) : ""}>
                {title}
              </span>
            </Wrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
