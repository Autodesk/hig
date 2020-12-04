import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";
import { AVAILABLE_SURFACES, AVAILABLE_VARIANTS } from "../constants";

export default class IconButtonPresenter extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    hasFocus: PropTypes.bool,
    hasHover: PropTypes.bool,
    icon: PropTypes.element,
    isPressed: PropTypes.bool,
    link: PropTypes.string,
    on: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    stylesheet: PropTypes.func,
    surface: PropTypes.oneOf(AVAILABLE_SURFACES),
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(AVAILABLE_VARIANTS)
  };

  render() {
    const {
      disabled,
      hasFocus,
      hasHover,
      isPressed,
      link,
      on,
      onClick,
      onBlur,
      onFocus,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      stylesheet: customStylesheet,
      surface,
      title,
      variant,
      ...otherProps
    } = this.props;
    const { className } = otherProps;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const linkProps = link
            ? {
                tabIndex: disabled ? "-1" : "0",
                href: link
              }
            : {};
          const props = {
            ...linkProps,
            disabled,
            hasFocus,
            hasHover,
            isPressed,
            on,
            onClick,
            onBlur,
            onFocus,
            onMouseDown,
            onMouseEnter,
            onMouseLeave,
            onMouseUp,
            stylesheet: customStylesheet,
            surface,
            title,
            variant
          };
          const iconButtonIconClassName = createCustomClassNames(
            className,
            "icon-button-icon"
          );
          const Element = this.props.link ? "a" : "button";
          const styles = stylesheet(props, resolvedRoles, metadata.densityId);
          const icon = React.cloneElement(this.props.icon, {
            className: cx(css(styles.iconButtonIcon), iconButtonIconClassName)
          });
          const tabIndex = disabled ? "-1" : "0";

          return (
            <Element
              className={cx(css(styles.iconButton), className)}
              disabled={disabled}
              onClick={onClick}
              onBlur={onBlur}
              onFocus={onFocus}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              tabIndex={tabIndex}
              title={title}
              {...linkProps}
            >
              {icon}
            </Element>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
