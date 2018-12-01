import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

import {
  availableSizes,
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
    size: PropTypes.oneOf(availableSizes),
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
      size,
      target,
      title,
      type,
      width
    } = this.props;

    const href = link || undefined;
    const tabIndex = disabled ? "-1" : "0";
    const Wrapper = link ? "a" : "button";
    const wrapperTarget = link ? target : undefined;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            { disabled, hasFocus, hasHover, isPressed, size, type, width },
            resolvedRoles
          );
          return (
            <Wrapper
              className={css(styles.button)}
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
            >
              {icon && <span className={css(styles.icon)}>{icon}</span>}
              <span className="hig__button__title">{title}</span>
            </Wrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
