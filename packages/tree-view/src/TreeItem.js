import React from "react";
import PropTypes from "prop-types";

import TreeItemBehavior from "./behaviors/TreeItemBehavior";
import TreeItemPresenter from "./presenters/TreeItemPresenter";

const TreeItem = props => {
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
  } = props;
  const { getActiveTreeItemId, getCurrentItemClicked, onFocus } = otherProps;

  return (
    <TreeItemBehavior
      {...otherProps}
      collapsed={collapsed}
      defaultCollapsed={defaultCollapsed}
      id={id}
    >
      {({
        getIsCollapsed,
        handleClick,
        handleOperatorClick,
        setIsCollapsed
      }) => (
        <TreeItemPresenter
          {...otherProps}
          collapsed={getIsCollapsed()}
          getIsCollapsed={getIsCollapsed}
          getKeyboardOpenId={getKeyboardOpenId}
          highlighted={getActiveTreeItemId() === id}
          icon={icon}
          id={id}
          keyboardOpenId={getKeyboardOpenId()}
          label={label}
          onClick={handleClick}
          onFocus={onFocus}
          onOperatorClick={handleOperatorClick}
          selected={getCurrentItemClicked() === id}
          setIsCollapsed={setIsCollapsed}
          setKeyboardOpenId={setKeyboardOpenId}
          stylesheet={stylesheet}
        >
          {children}
        </TreeItemPresenter>
      )}
    </TreeItemBehavior>
  );
};

TreeItem.displayName = "TreeItem";

TreeItem.propTypes = {
  /**
   * Accepts other TreeItem components
   */
  children: PropTypes.node,
  /**
   * Controlled value, specifies whether the TreeItem is collapsed or not
   * When provided, it overrides the TreeItem's collapsed state
   */
  collapsed: PropTypes.bool,
  /**
   * Specifies whether the TreeItem is initially collapsed
   */
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

TreeItem.defaultProps = {
  defaultCollapsed: true
};

export default TreeItem;
