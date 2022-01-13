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
    if (props.onClick) {
      props.onClick(event);
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

  return props.children({
    getIsCollapsed,
    handleClick,
    handleOperatorClick,
    setIsCollapsed
  });
};

TreeItemBehavior.displayName = "TreeItemBehavior";

TreeItemBehavior.propTypes = {
  children: PropTypes.func,
  collapsed: PropTypes.bool,
  defaultCollapsed: PropTypes.bool,
  getTreeItemArray: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  setActiveTreeItemId: PropTypes.func,
  setActiveTreeItemIndex: PropTypes.func,
  payload: PropTypes.shape({
    getTreeItemArray: PropTypes.func,
    setActiveTreeItemId: PropTypes.func,
    setActiveTreeItemIndex: PropTypes.func
  })
};

export default TreeItemBehavior;
