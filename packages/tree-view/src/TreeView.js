import React, { Component } from "react";
import PropTypes from "prop-types";

import TreeViewBehavior from "./behaviors/TreeViewBehavior";

import TreeViewPresenter from "./presenters/TreeViewPresenter";
import TreeViewPresenterObject from "./presenters/TreeViewPresenterObject";

import { AVAILABLE_INDICATORS } from "./constants";

export default class TreeView extends Component {
  static propTypes = {
    /**
     * Sets the icon padding on children TreeItems
     */
    iconAlignment: PropTypes.bool,
    indicator: PropTypes.oneOf(AVAILABLE_INDICATORS),
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
  };

  static defaultProps = {};

  render() {
    const {
      children,
      alternateBg,
      guidelines,
      stylesheet,
      dataObject,
      ...otherProps
    } = this.props;
    const { onBlur, onClick, onFocus, onKeyDown } = otherProps;

    const TreeViewPresenterType = dataObject
      ? TreeViewPresenterObject
      : TreeViewPresenter;

    return (
      <TreeViewBehavior
        {...otherProps}
        onKeyDown={onKeyDown}
        onClick={onClick}
      >
        {({
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          setTreeItemArray,
          handleBlur,
          handleFocus,
          handleKeyDown,
          handleClick,
          setTreeViewRef,
          treeViewRef,
        }) => (
          <TreeViewPresenterType
            {...otherProps}
            alternateBg={alternateBg}
            dataObject={dataObject}
            getActiveTreeItemId={getActiveTreeItemId}
            getActiveTreeItemIndex={getActiveTreeItemIndex}
            setTreeItemArray={setTreeItemArray}
            guidelines={guidelines}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            setTreeViewRef={setTreeViewRef}
            stylesheet={stylesheet}
            treeViewRef={treeViewRef}
          >
            {children}
          </TreeViewPresenterType>
        )}
      </TreeViewBehavior>
    );
  }
}
