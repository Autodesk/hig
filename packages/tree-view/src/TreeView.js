import React, { Component } from "react";
import PropTypes from "prop-types";
import { FocusBehavior } from "@hig/behaviors";

import TreeViewBehaviorWM from "./behaviors/TreeViewBehaviorWM";
import TreeViewBehaviorRR from "./behaviors/TreeViewBehaviorRR";
import TreeViewPresenter from "./presenters/TreeViewPresenter";

export default class TreeView extends Component {
  static propTypes = {
    /**
     * Shows a checkmark selection indicator
     */
    checkmark: PropTypes.bool,
    /**
     * Accepts Option components
     */
    children: PropTypes.node.isRequired,
    /**
     * Default Selected Option(s)
     * Should be the HTML id of the Option
     */
    defaultSelected: PropTypes.arrayOf(PropTypes.any),
    /**
     * Shows a divider at the bottom of the menu
     */
    divider: PropTypes.bool,
    /**
     * A callback ref that gets passed to the HTML
     * element with `role="listbox"`
     */
    menuRef: PropTypes.func,
    /**
     * Enables multiple selection
     */
    multiple: PropTypes.bool,
    /**
     * Called when an option is selected/unselected
     */
    onChange: PropTypes.func,
    /**
     * Controls the selected Option(s)
     * This will not work if this is the child
     * of a MenuGroup component
     */
    selected: PropTypes.arrayOf(PropTypes.any),
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  static defaultProps = {
  };

  render() {
    const {
      checkmark,
      children,
      defaultSelected,
      divider,
      menuRef,
      multiple,
      onChange,
      selected,
      stylesheet,
      test,
      ...otherProps
    } = this.props;
    const { onBlur, onFocus, onKeyDown } = otherProps;
    // Test mode
    const TreeViewBehavior = test === "WM" ? TreeViewBehaviorWM : TreeViewBehaviorRR;

    return (
      <FocusBehavior onBlur={onBlur} onFocus={onFocus}>
        {({ hasFocus, onBlur: handleBlur, onFocus: handleFocus }) => (
          <TreeViewBehavior
            {...otherProps}
            defaultSelected={defaultSelected}
            hasFocus={hasFocus}
            menuRef={menuRef}
            multiple={multiple}
            onBlur={handleBlur}
            onChange={onChange}
            onFocus={handleFocus}
            onKeyDown={onKeyDown}
            selected={selected}
          >
            {({
              handleBlur: handleMenuBehaviorBlur,
              handleFocus: handleMenuBehaviorFocus,
              handleKeyDown,
            }) => (
              <TreeViewPresenter
                {...otherProps}
                checkmark={checkmark}
                divider={divider}
                onBlur={handleMenuBehaviorBlur}
                onFocus={handleMenuBehaviorFocus}
                onKeyDown={handleKeyDown}
                stylesheet={stylesheet}
              >
                {children}
              </TreeViewPresenter>
            )}
          </TreeViewBehavior>
        )}
      </FocusBehavior>
    );
  }
}
