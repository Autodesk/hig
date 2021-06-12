import React, { Component } from "react";
import PropTypes from "prop-types";

import TreeItemBehavior from "./behaviors/TreeItemBehavior";
import TreeItemPresenter from "./presenters/TreeItemPresenter";

// import { roles, AVAILABLE_ROLES } from "./constants";

export default class TreeItem extends Component {
  static propTypes = {
    /**
     * Content of the Option
     */
    children: PropTypes.node,
    /**
     * Presentational icon
     */
    icon: PropTypes.node,
    /**
     * Unique HTML id attribute
     */
    id: PropTypes.string,
    /**
     * Labels the TreeItem, this is rendered before all children
     */
    label: PropTypes.node,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
  };

  render() {
    const {
      children,
      collapsed,
      icon,
      id,
      label,
      stylesheet,
      ...otherProps
    } = this.props;
    const {
      getActiveTreeItemId,
      onFocus,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
    } = otherProps;

    return (
      <TreeItemBehavior {...otherProps} id={id} collapsed={collapsed}>
        {({
          getIsCollapsed,
          handleClick,
          handleMouseEnter,
          handleMouseLeave,
          setIsCollapsed
        }) => (
          <TreeItemPresenter
            {...otherProps}
            collapsed={getIsCollapsed()}
            getIsCollapsed={getIsCollapsed}
            icon={icon}
            id={id}
            label={label}
            onClick={handleClick}
            onFocus={onFocus}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            selected={getActiveTreeItemId() === id}
            setIsCollapsed={setIsCollapsed}
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
