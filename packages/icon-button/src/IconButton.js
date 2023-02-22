import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@weave-design/behaviors";

import {
  surfaces,
  variants,
  AVAILABLE_SURFACES,
  AVAILABLE_VARIANTS,
} from "./constants";
import IconButtonPresenter from "./presenters/IconButtonPresenter";

const IconButton = (props) => {
  const {
    disabled,
    onBlur,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    stylesheet,
    ...otherProps
  } = props;

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
        onMouseUp: handleMouseUp,
      }) => (
        <IconButtonPresenter
          disabled={disabled}
          hasFocus={hasFocus && !disabled}
          hasHover={hasHover && !disabled}
          isPressed={isPressed && !disabled}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          stylesheet={stylesheet}
          {...otherProps}
        />
      )}
    </ControlBehavior>
  );
};

IconButton.displayName = "IconButton";

IconButton.propTypes = {
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
   * The icon-button is toggled to on when this is set
   */
  on: PropTypes.bool,
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
   * Function to modify the component's styles
   */
  stylesheet: PropTypes.func,
  /**
   * Surface color level that the icon-button will be sitting on
   */
  surface: PropTypes.oneOf(AVAILABLE_SURFACES),
  /**
   * Title of the button for accessibility purposes
   */
  title: PropTypes.string,
  /**
   * The visual variant of the icon-button
   */
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

IconButton.defaultProps = {
  surface: surfaces.SURFACELEVEL100,
  variant: variants.DYNAMIC,
};

export default IconButton;
