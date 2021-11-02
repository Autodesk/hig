import React, { Component } from "react";
import PropTypes from "prop-types";

import TreeViewBehavior from "./behaviors/TreeViewBehavior";

import TreeViewPresenter from "./presenters/TreeViewPresenter";

import { AVAILABLE_INDICATORS, indicators } from "./constants";

export default class TreeView extends Component {
  static propTypes = {
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
     * Visual guidelines for each TreeItem
     */
    guidelines: PropTypes.bool,
    /**
     * Indicator icon
     */
    indicator: PropTypes.oneOf(AVAILABLE_INDICATORS),
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
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
    /**
     * If treeNode prop is used it will render instead
     * of children.
     * Additional info can be passed into the meta property
     * Additional HTML attributes can be added to the top
     * level of and spread to the HTML elements
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

  static defaultProps = {
    indicator: indicators.CARET
  };

  render() {
    const {
      children,
      alternateBg,
      guidelines,
      onKeyDown,
      stylesheet,
      treeNode,
      ...otherProps
    } = this.props;

    return (
      <TreeViewBehavior
        {...otherProps}
        onKeyDown={onKeyDown}
        treeNode={treeNode}
      >
        {({
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          getCurrentItemClicked,
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
            getCurrentItemClicked={getCurrentItemClicked}
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
