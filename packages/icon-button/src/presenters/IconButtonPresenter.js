import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default class IconButtonPresenter extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    hasFocus: PropTypes.bool,
    hasHover: PropTypes.bool,
    icon: PropTypes.element,
    isPressed: PropTypes.bool,
    link: PropTypes.string,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    title: PropTypes.string.isRequired
  };

  render() {
    const {
      disabled,
      hasFocus,
      hasHover,
      isPressed,
      link,
      onClick,
      onBlur,
      onFocus,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      title
    } = this.props;

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
            onClick,
            onBlur,
            onFocus,
            onMouseDown,
            onMouseEnter,
            onMouseLeave,
            onMouseUp,
            title
          };
          const Element = this.props.link ? "a" : "button";
          const styles = stylesheet(props, resolvedRoles, metadata.densityId);
          const icon = React.cloneElement(this.props.icon, {
            className: css(styles.iconButtonIcon)
          });

          return (
            <Element className={css(styles.iconButton)} {...props}>
              {icon}
            </Element>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
