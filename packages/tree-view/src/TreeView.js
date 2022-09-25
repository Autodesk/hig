import React from "react";
import PropTypes from "prop-types";

import TreeViewBehavior from "./behaviors/TreeViewBehavior";

import TreeViewPresenter from "./presenters/TreeViewPresenter";

import { AVAILABLE_INDICATORS, indicators } from "./constants";

const TreeView = (props) => {
  const {
    children,
    defaultSelected,
    alternateBg,
    guidelines,
    onKeyDown,
    selected,
    stylesheet,
    treeNode,
    ...otherProps
  } = props;

  return (
    <TreeViewBehavior
      {...otherProps}
      defaultSelected={defaultSelected}
      onKeyDown={onKeyDown}
      selected={selected}
      treeNode={treeNode}
    >
      {({
        getActiveTreeItemId,
        getActiveTreeItemIndex,
        getCurrentItemClicked,
        getKeyboardOpenId,
        getTreeItemArray,
        isControlled,
        setActiveTreeItemId,
        setActiveTreeItemIndex,
        setKeyboardOpenId,
        setTreeItemArray,
        handleKeyDown,
        setTreeViewRef,
        treeViewRef,
      }) => (
        <TreeViewPresenter
          {...otherProps}
          alternateBg={alternateBg}
          defaultSelected={defaultSelected}
          getActiveTreeItemId={getActiveTreeItemId}
          getActiveTreeItemIndex={getActiveTreeItemIndex}
          getCurrentItemClicked={getCurrentItemClicked}
          getKeyboardOpenId={getKeyboardOpenId}
          getTreeItemArray={getTreeItemArray}
          guidelines={guidelines}
          isControlled={isControlled}
          onKeyDown={handleKeyDown}
          setActiveTreeItemId={setActiveTreeItemId}
          setActiveTreeItemIndex={setActiveTreeItemIndex}
          setKeyboardOpenId={setKeyboardOpenId}
          setTreeItemArray={setTreeItemArray}
          selected={selected}
          setTreeViewRef={setTreeViewRef}
          stylesheet={stylesheet}
          treeNode={treeNode}
          treeViewRef={treeViewRef}
        >
          {children}
        </TreeViewPresenter>
      )}
    </TreeViewBehavior>
  );
};

TreeView.displayName = "TreeView";

TreeView.propTypes = {
  /**
   * Alternating background stripes
   */
  alternateBg: PropTypes.bool,
  /**
   * Content of the TreeView
   * Accepts TreeItem components
   */
  children: PropTypes.node,
  /**
   * Default selected TreeItem
   */
  defaultSelected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Visual guidelines for each TreeItem
   */
  guidelines: PropTypes.bool,
  /**
   * Indicator icon
   */
  indicator: PropTypes.oneOf(AVAILABLE_INDICATORS),
  /**
   * Called when active TreeItem changes
   */
  onChange: PropTypes.func,
  /**
   * Triggers when a key is pressed
   * In addition to passing back the event you get the
   * following internal methods in an object:
   *  - getActiveTreeItemId(): => gets the active treeitem's id
   *  - getActiveTreeItemIndex(): =>  gets the active treeitem's index
   *  - getTreeItemArray(): => gets the array of treeitems that are visible
   *  - setActiveTreeItemId(id: string): => sets the active treeitem's id
   *  - setActiveTreeItemIndex(index: number) => sets the active treeitem's index
   *  - setKeyboardOpenId(id: string) => opens the treeitem
   */
  onKeyDown: PropTypes.func,
  /**
   * Controls the selected TreeItem
   */
  selected: PropTypes.arrayOf([PropTypes.number, PropTypes.string]),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * If treeNode prop is used it will render instead of children.
   * Additional info can be passed into the meta property
   * Additional HTML attributes can be added to the top level of and spread to the HTML elements
   * Assigning ref(s) to the treeNode is not supported, please use the children instead of treeNode if needed.
   */
  treeNode: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      parentId: PropTypes.number,
      meta: PropTypes.shape({
        active: PropTypes.bool,
        collapsed: PropTypes.bool,
        expandByDoubleClick: PropTypes.bool,
        icon: PropTypes.node,
        label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
      }),
    })
  ),
};

TreeView.defaultProps = {
  indicator: indicators.CARET,
};

export default TreeView;
