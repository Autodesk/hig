import React, { Component } from "react";
import PropTypes from "prop-types";
import { PressedBehavior } from "@hig/behaviors";

import TreeItemBehavior from "./behaviors/TreeItemBehavior";
import TreeItemPresenter from "./presenters/TreeItemPresenter";

import { roles, AVAILABLE_ROLES } from "./constants";

export default class TreeItem extends Component {
  static propTypes = {
    /**
     * Allows for an asset before the Option text
     * Can be from @hig/avatar, @hig/icons or
     * whatever image of yor choosing
     */
    asset: PropTypes.node,
    /**
     * Content of the Option
     */
    children: PropTypes.node.isRequired,
    /**
     * Disables the Option
     */
    disabled: PropTypes.bool,
    /**
     * HTML unique id for the element
     */
    id: PropTypes.string.isRequired,
    /**
     * HTML attribute for accessibility
     */
    role: PropTypes.oneOf(AVAILABLE_ROLES),
    /**
     * Allows for a keyboard shortcut or any
     * content to the right of the Option content
     */
    shortcut: PropTypes.node,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  static defaultProps = {
    role: roles.OPTION
  };

  render() {
    const {
      asset,
      children,
      disabled,
      id,
      role,
      shortcut,
      stylesheet,
      ...otherProps
    } = this.props;
    const {
      getHighlightIndex,
      onFocus,
      onMouseDown,
      onMouseLeave,
      onMouseUp
    } = otherProps;

    return (
      <PressedBehavior
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {({
          isPressed,
          onMouseDown: handleMouseDown,
          onMouseUp: handleMouseUp,
          onPressedMouseLeave: handlePressedMouseLeave
        }) => (
          <TreeItemBehavior
            {...otherProps}
            onMouseLeave={handlePressedMouseLeave}
          >
            {({
              handleClick,
              handleMouseEnter,
              handleMouseLeave
            }) => (
              <TreeItemPresenter
                {...otherProps}
                isPressed={isPressed}
                onClick={handleClick}
                onFocus={onFocus}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                // onMouseOver={handleMouseOver}
                onMouseUp={handleMouseUp}
                stylesheet={stylesheet}
              >
                {children}
              </TreeItemPresenter>
            )}
          </TreeItemBehavior>
        )}
      </PressedBehavior>
    );
  }
}
