import React, { Component } from "react";
import PropTypes from "prop-types";

import TreeViewBehavior from "./behaviors/TreeViewBehavior";

import TreeViewPresenter from "./presenters/TreeViewPresenter";

import { AVAILABLE_INDICATORS } from "./constants";

export default class TreeView extends Component {
  static propTypes = {
    alternateBg: PropTypes.bool,
    /**
     * Content of the TreeView
     * Accepts TreeItem components
     */
    children: PropTypes.node,
    guidelines: PropTypes.bool,
    /**
     * Indicator icon
     */
    indicator: PropTypes.oneOf(AVAILABLE_INDICATORS),
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
    /**
     * If treeNode prop is used it will render instead
     * of children.
     */
    treeNode: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        parentId: PropTypes.number,
        meta: PropTypes.shape({
          label: PropTypes.string,
          collapsed: PropTypes.bool,
          active: PropTypes.bool,
          icon: PropTypes.node
        })
      })
    )
  };

  static defaultProps = {};

  render() {
    const {
      children,
      alternateBg,
      guidelines,
      stylesheet,
      treeNode,
      ...otherProps
    } = this.props;
    const { onClick, onKeyDown } = otherProps;

    return (
      <TreeViewBehavior {...otherProps} onKeyDown={onKeyDown} onClick={onClick}>
        {({
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          getKeyboardOpenId,
          getTreeItemArray,
          setActiveTreeItemId,
          setActiveTreeItemIndex,
          setKeyboardOpenId,
          setTreeItemArray,
          handleKeyDown,
          setTreeViewRef,
          treeViewRef
        }) => (
          <TreeViewPresenter
            {...otherProps}
            alternateBg={alternateBg}
            treeNode={treeNode}
            getActiveTreeItemId={getActiveTreeItemId}
            getActiveTreeItemIndex={getActiveTreeItemIndex}
            getKeyboardOpenId={getKeyboardOpenId}
            getTreeItemArray={getTreeItemArray}
            setActiveTreeItemId={setActiveTreeItemId}
            setActiveTreeItemIndex={setActiveTreeItemIndex}
            setKeyboardOpenId={setKeyboardOpenId}
            setTreeItemArray={setTreeItemArray}
            guidelines={guidelines}
            onKeyDown={handleKeyDown}
            setTreeViewRef={setTreeViewRef}
            stylesheet={stylesheet}
            treeViewRef={treeViewRef}
          >
            {children}
          </TreeViewPresenter>
        )}
      </TreeViewBehavior>
    );
  }
}
