import React, { Component } from "react";
import PropTypes from "prop-types";
import { FocusBehavior } from "@hig/behaviors";

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
      test,
      dataObject,
      ...otherProps
    } = this.props;
    const { onBlur, onClick, onFocus, onKeyDown } = otherProps;

    const TreeViewPresenterType = dataObject
      ? TreeViewPresenterObject
      : TreeViewPresenter;

    return (
      <FocusBehavior onBlur={onBlur} onFocus={onFocus}>
        {({ hasFocus, onBlur: handleBlur, onFocus: handleFocus }) => (
          <TreeViewBehavior
            {...otherProps}
            hasFocus={hasFocus}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={onKeyDown}
            onClick={onClick}
          >
            {({
              getActiveTreeItemId,
              getActiveTreeItemIndex,
              setTreeItemArray,
              handleBlur: handleMenuBehaviorBlur,
              handleFocus: handleMenuBehaviorFocus,
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
                onBlur={handleMenuBehaviorBlur}
                onFocus={handleMenuBehaviorFocus}
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
        )}
      </FocusBehavior>
    );
  }
}
