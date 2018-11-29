import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

import {
  availableSizes,
  availableTargets,
  availableTypes,
  availableWidths,
  sizes,
  types,
  widths
} from "../constants";

const classNamesBySize = {
  [sizes.SMALL]: "hig__button-v1--size-small",
  [sizes.STANDARD]: "hig__button-v1--size-standard",
  [sizes.LARGE]: "hig__button-v1--size-large"
};

const classNamesByType = {
  [types.PRIMARY]: "hig__button-v1--type-primary",
  [types.SOLID]: "hig__button-v1--type-primary",
  [types.SECONDARY]: "hig__button-v1--type-secondary",
  [types.OUTLINE]: "hig__button-v1--type-secondary",
  [types.FLAT]: "hig__button-v1--type-flat"
};

const classNameByWidth = {
  [widths.SHRINK]: "hig__button-v1--width-shrink",
  [widths.GROW]: "hig__button-v1--width-grow"
};

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
        {({ metadata, resolvedRoles }) => {
          const { className } = metadata;
          const styles = stylesheet(
            { disabled, hasFocus, hasHover, isPressed, size, type, width },
            resolvedRoles
          );
          const buttonClassName = cx(
            css(styles.button),
            className,
            "hig__button-v1",
            classNamesBySize[size],
            classNamesByType[type],
            classNameByWidth[width],
            {
              "hig__button-v1--disabled": disabled
            }
          );
          const iconClassName = cx(
            css(styles.icon),
            className,
            "hig__button-v1__icon"
          );

          return (
            <Wrapper
              className={buttonClassName}
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
              {icon && <span className={iconClassName}>{icon}</span>}
              <span className="hig__button__title">{title}</span>
            </Wrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
