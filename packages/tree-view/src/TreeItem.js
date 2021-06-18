import React, { Component } from "react";
import PropTypes from "prop-types";

import TreeItemBehavior from "./behaviors/TreeItemBehavior";
import TreeItemPresenter from "./presenters/TreeItemPresenter";

export default class TreeItem extends Component {
  static propTypes = {
    /**
     * Accepts other TreeItem components
     */
    children: PropTypes.node,
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    /**
     * Presentational icon
     */
    icon: PropTypes.node,
    /**
     * Unique HTML id attribute
     */
    id: PropTypes.string.isRequired,
    /**
     * Labels the TreeItem, this is rendered before all children
     */
    label: PropTypes.node,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  static defaultProps = {
    defaultCollapsed: true
  };

  render() {
    const {
      children,
      collapsed,
      defaultCollapsed,
      getKeyboardOpenId,
      icon,
      id,
      label,
      setKeyboardOpenId,
      stylesheet,
      ...otherProps
    } = this.props;
    const { getActiveTreeItemId, onFocus } = otherProps;

    return (
      <TreeItemBehavior
        {...otherProps}
        collapsed={collapsed}
        defaultCollapsed={defaultCollapsed}
        id={id}
      >
        {({ getIsCollapsed, handleClick, setIsCollapsed }) => (
          <TreeItemPresenter
            {...otherProps}
            collapsed={getIsCollapsed()}
            getIsCollapsed={getIsCollapsed}
            getKeyboardOpenId={getKeyboardOpenId}
            icon={icon}
            id={id}
            keyboardOpenId={getKeyboardOpenId()}
            label={label}
            onClick={handleClick}
            onFocus={onFocus}
            selected={getActiveTreeItemId() === id}
            setIsCollapsed={setIsCollapsed}
            setKeyboardOpenId={setKeyboardOpenId}
            stylesheet={stylesheet}
          >
            {children}
          </TreeItemPresenter>
        )}
      </TreeItemBehavior>
    );
  }
}
