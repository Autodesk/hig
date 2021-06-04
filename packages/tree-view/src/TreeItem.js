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
    children: PropTypes.node,
    id: PropTypes.string.required,
    /**
     * Labels the TreeItem, this is rendered before all children
     */
    label: PropTypes.node,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  render() {
    const {
      children,
      id,
      label,
      stylesheet,
      test,
      ...otherProps
    } = this.props;
    const {
      getActiveTreeItemId,
      onFocus,
      onMouseDown,
      onMouseLeave,
      onMouseUp
    } = otherProps;
    // Test mode
    const TreeItemBehavior = test === 'WM' ? TreeItemBehaviorWM : TreeItemBehaviorRR;

    return (
      <TreeItemBehavior
        {...otherProps}
        id={id}
      >
        {({
          handleClick,
          handleMouseEnter,
          handleMouseLeave
        }) => (
          <TreeItemPresenter
            {...otherProps}
            id={id}
            label={label}
            onClick={handleClick}
            onFocus={onFocus}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            selected={getActiveTreeItemId() === id}
            // onMouseOver={handleMouseOver}
            stylesheet={stylesheet}
          >
            {children}
          </TreeItemPresenter>
        )}
      </TreeItemBehavior>
    );
  }
}
