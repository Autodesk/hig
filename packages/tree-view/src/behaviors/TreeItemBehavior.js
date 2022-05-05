// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const TreeItemBehavior = props => {
  const [isCollapsed, setIsCollapsedHook] = useState(props.defaultCollapsed);

  const setIsCollapsed = value => {
    setIsCollapsedHook(value);
  };

  const isCollapsedControlled = () => props.collapsed !== undefined;

  const getIsCollapsed = () =>
    isCollapsedControlled() ? props.collapsed : isCollapsed;

  const handleClick = (event, treeItem) => {
    const isLeftKey = 
      (event.which !== undefined && event.which === 1) || (event.button !== undefined && event.button === 0);
    const isRightKey = 
      (event.which !== undefined && event.which === 3) || (event.button !== undefined && event.button === 2);
    if (isLeftKey && props.onClick) {
      props.onClick(event);
    } else if (isRightKey && props.onContextMenu) {
      props.onContextMenu(event);
    }
    // do nothing if controlled and using treeNode
    if (props.payload && props.payload.isControlled()) {
      return;
    }
    // do nothing if controlled and using TreeItem
    if (props.isControlled && props.isControlled()) {
      return;
    }
    // eslint-disable-next-line no-param-reassign
    treeItem = treeItem || {};
    if (props.payload) {
      const {
        payload: {
          getTreeItemArray,
          setActiveTreeItemId,
          setActiveTreeItemIndex
        }
      } = props;
      // eslint-disable-next-line no-param-reassign
      const treeItemArray = getTreeItemArray();
      const index =
        treeItemArray !== null && treeItemArray.indexOf(treeItem.id);
      setActiveTreeItemId(treeItem.id);
      setActiveTreeItemIndex(index);
    } else {
      const {
        id,
        getTreeItemArray,
        setActiveTreeItemId,
        setActiveTreeItemIndex
      } = props;

      const treeItemArray = getTreeItemArray();
      const index = treeItemArray !== null && treeItemArray.indexOf(id);
      setActiveTreeItemId(id);
      setActiveTreeItemIndex(index);
    }
  };

  const handleOperatorClick = () => {
    if (props.payload) {
      setIsCollapsedHook(!getIsCollapsed());
    } else {
      setIsCollapsedHook(!getIsCollapsed());
    }
  };

  const handleDoubleClick = event => {
    if (props.onDoubleClick) {
      props.onDoubleClick(event);
    }

    if (props.expandByDoubleClick) {
      setIsCollapsedHook(!getIsCollapsed());
    }
  };

  return props.children({
    getIsCollapsed,
    handleClick,
    handleDoubleClick,
    handleOperatorClick,
    setIsCollapsed
  });
};

TreeItemBehavior.displayName = "TreeItemBehavior";

TreeItemBehavior.propTypes = {
  children: PropTypes.func,
  collapsed: PropTypes.bool,
  defaultCollapsed: PropTypes.bool,
  expandByDoubleClick: PropTypes.bool,
  getTreeItemArray: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  setActiveTreeItemId: PropTypes.func,
  setActiveTreeItemIndex: PropTypes.func,
  payload: PropTypes.shape({
    getTreeItemArray: PropTypes.func,
    setActiveTreeItemId: PropTypes.func,
    setActiveTreeItemIndex: PropTypes.func
  })
};

export default TreeItemBehavior;
