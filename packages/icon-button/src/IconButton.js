import React, { Component } from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import IconButtonPresenter from "./presenters/IconButtonPresenter";

export default class IconButton extends Component {
  static propTypes = {
    /**
     * Prevents user actions on the button
     */
    disabled: PropTypes.bool,
    /**
     * Icon or svg to be rendered
     */
    icon: PropTypes.element,
    /**
     * Url button will navigate to when clicked
     */
    link: PropTypes.string,
    /**
     * Called when user moves focus away from the button
     */
    onBlur: PropTypes.func,
    /**
     * Called when user clicks the button
     */
    onClick: PropTypes.func,
    /**
     * Called when user moves focus onto the button
     */
    onFocus: PropTypes.func,
    /**
     * Called when mouse is pressed over the button
     */
    onMouseDown: PropTypes.func,
    /**
     * Called when mouse begins to move over the button
     */
    onMouseEnter: PropTypes.func,
    /**
     * Called when mouse stops moving over the button
     */
    onMouseLeave: PropTypes.func,
    /**
     * Called when mouse is released over the button
     */
    onMouseUp: PropTypes.func,
    /**
     * Surface color level that the icon-button will be sitting on
     */
    surface: PropTypes.number,
    /**
     * Title of the button for accessibility purposes
     */
    title: PropTypes.string.isRequired
  };

  render() {
    const {
      onBlur,
      onFocus,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      ...props
    } = this.props;

    return (
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
        }) => (
          <IconButtonPresenter
            hasFocus={hasFocus}
            hasHover={hasHover}
            isPressed={isPressed}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            {...props}
          />
        )}
      </ControlBehavior>
    );
  }
}
