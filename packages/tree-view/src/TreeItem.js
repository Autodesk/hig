import React, { Component } from "react";
import PropTypes from "prop-types";
import { PressedBehavior } from "@hig/behaviors";

import TreeItemBehaviorWM from "./behaviors/TreeItemBehaviorWM";
import TreeItemBehaviorRR from "./behaviors/TreeItemBehaviorRR";
import TreeItemPresenter from "./presenters/TreeItemPresenter";

// import { roles, AVAILABLE_ROLES } from "./constants";

export default class TreeItem extends Component {
  static propTypes = {
    /**
     * Content of the Option
     */
    children: PropTypes.node.isRequired,
    /**
     * Labels the TreeItem, this is rendered before all children
     */
    label: PropTypes.string,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  render() {
    const {
      children,
      label,
      stylesheet,
      test,
      ...otherProps
    } = this.props;
    const {
      onFocus,
      onMouseDown,
      onMouseLeave,
      onMouseUp
    } = otherProps;
    // Test mode
    const TreeItemBehavior = test === 'WM' ? TreeItemBehaviorWM : TreeItemBehaviorRR;

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
                label={label}
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
