import React, { Component } from "react";
import PropTypes from "prop-types";
import { FocusBehavior } from "@hig/behaviors";

import TreeViewBehaviorWM from "./behaviors/TreeViewBehaviorWM";
import TreeViewBehaviorRR from "./behaviors/TreeViewBehaviorRR";
import TreeViewPresenter from "./presenters/TreeViewPresenter";
import TreeViewPresenterObject from "./presenters/TreeViewPresenterObject";

export default class TreeView extends Component {
  static propTypes = {
    /**
     * Sets the icon padding on children TreeItems
     */
    iconAlignment: PropTypes.bool,
    indicator: PropTypes.string,
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
    const { onBlur, onFocus, onKeyDown } = otherProps;
    // Test mode
    const TreeViewBehavior =
      test === "WM" ? TreeViewBehaviorWM : TreeViewBehaviorRR;
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
          >
            {({
              handleBlur: handleMenuBehaviorBlur,
              handleFocus: handleMenuBehaviorFocus,
              handleKeyDown,
            }) => (
              <TreeViewPresenterType
                {...otherProps}
                alternateBg={alternateBg}
                guidelines={guidelines}
                onBlur={handleMenuBehaviorBlur}
                onFocus={handleMenuBehaviorFocus}
                onKeyDown={handleKeyDown}
                stylesheet={stylesheet}
                dataObject={dataObject}
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
