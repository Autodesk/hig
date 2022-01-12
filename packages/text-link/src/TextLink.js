import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { ControlBehavior } from "@hig/behaviors";

import { availableTargets } from "./targets";
import stylesheet from "./stylesheet";

export default class TextLink extends Component {
  static propTypes = {
    /** Text content of the link */
    children: PropTypes.node,
    /** The href to link to. Note that this was previously 'href'
     in the version distributed with hig-react. */
    link: PropTypes.string,
    /** Called when link is clicked */
    onClick: PropTypes.func,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called when user changes the value of the field
     */
    onChange: PropTypes.func,
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
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
    /** Specify the anchor tag's target */
    target: PropTypes.oneOf(availableTargets)
  };

  render() {
    const {
      children,
      link,
      target,
      onClick,
      onBlur,
      onFocus,
      onMouseUp,
      onMouseDown,
      onMouseLeave,
      onMouseEnter,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const Element = link ? "a" : "span";
    const linkProps = link
      ? {
          href: link,
          target
        }
      : { role: "button" };

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => (
          <ControlBehavior
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
          >
            {({
              hasFocus,
              hasHover,
              isPressed,
              onBlur: handleBlur,
              onFocus: handleFocus,
              onMouseDown: handleMouseDown,
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave,
              onMouseUp: handleMouseUp
            }) => {
              const { stylesheet: customStylesheet } = this.props;
              const styles = stylesheet(
                {
                  stylesheet: customStylesheet,
                  hasFocus,
                  hasHover,
                  isPressed,
                  ...this.props
                },
                resolvedRoles
              );
              return (
                <Element
                  {...linkProps}
                  {...otherProps}
                  className={cx(css(styles), className)}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  onMouseDown={handleMouseDown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onClick={onClick}
                >
                  {children}
                </Element>
              );
            }}
          </ControlBehavior>
        )}
      </ThemeContext.Consumer>
    );
  }
}
