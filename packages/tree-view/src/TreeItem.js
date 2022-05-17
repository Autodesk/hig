import React from "react";
import PropTypes from "prop-types";

import TreeItemBehavior from "./behaviors/TreeItemBehavior";
import TreeItemPresenter from "./presenters/TreeItemPresenter";

const TreeItem = props => {
  const {
    children,
    collapsed,
    defaultCollapsed,
    expandByDoubleClick,
    icon,
    id,
    label,
    stylesheet,
    itemSelected,
    ...otherProps
  } = props;
  const {
    defaultSelected,
    getActiveTreeItemId,
    getCurrentItemClicked,
    getKeyboardOpenId,
    isControlled,
    onFocus,
    selected,
    setKeyboardOpenId
  } = otherProps;
  const getActiveId = () => {
    if (isControlled()) {
      return selected;
    }
    return getCurrentItemClicked() || defaultSelected;
  };

  return (
    <TreeItemBehavior
      {...otherProps}
      collapsed={collapsed}
      defaultCollapsed={defaultCollapsed}
      expandByDoubleClick={expandByDoubleClick}
      id={id}
    >
      {({
        getIsCollapsed,
        handleClick,
        handleDoubleClick,
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
          onDoubleClick={handleDoubleClick}
          onFocus={onFocus}
          onOperatorClick={handleOperatorClick}
          selected={(getActiveId() === id) || itemSelected}
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
   * Double click to expand or collapse tree item
   */
  expandByDoubleClick: PropTypes.bool,
  /**
   * Presentational icon
   */
  icon: PropTypes.node,
  /**
   * Unique HTML id attribute
   */
  id: PropTypes.string.isRequired,
  /**
   * Used to assign a ref object to the current tree item
   */
  itemRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.arrayOf(PropTypes.any) })
  ]),
  /**
   * Labels the TreeItem, this is rendered before all children
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * Specifies whether the TreeItem is in selected status
   */
  itemSelected: PropTypes.bool,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func
};

TreeItem.defaultProps = {
  defaultCollapsed: true,
  expandByDoubleClick: false
};

export default TreeItem;
