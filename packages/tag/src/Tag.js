import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import TagBehavior from "./behaviors/TagBehavior";
import TagPresenter from "./presenters/TagPresenter";

const Tag = (props) => {
  const { children, disabled, onClose, selected, stylesheet, ...otherProps } =
    props;
  const {
    onBlur,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
  } = otherProps;

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
        <TagBehavior {...otherProps} onClose={onClose}>
          {({ onKeyboardClose }) => (
            <TagPresenter
              {...otherProps}
              disabled={disabled}
              hasFocus={hasFocus}
              hasHover={hasHover}
              isPressed={isPressed}
              onBlur={handleBlur}
              onClose={onClose}
              onFocus={handleFocus}
              onKeyDown={onKeyboardClose}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              selected={selected}
              stylesheet={stylesheet}
            >
              {children}
            </TagPresenter>
          )}
        </TagBehavior>
      )}
    </ControlBehavior>
  );
};

Tag.propTypes = {
  /**
   * The content that goes to the label of the Tag
   */
  children: PropTypes.node.isRequired,
  /**
   * Disables the tag
   */
  disabled: PropTypes.bool,
  /**
   * Called when the close button is clicked
   * Also calls when the ESC key is pressed
   * The close button only appears when onClose is defined
   */
  onClose: PropTypes.func,
  /**
   * Puts the Tag in the selected state
   */
  selected: PropTypes.bool,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
};

export default Tag;
