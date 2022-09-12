import React from "react";
import PropTypes from "prop-types";
import { FocusBehavior } from "@hig/behaviors";

import MenuBehavior from "./behaviors/MenuBehavior";
import MenuPresenter from "./presenters/MenuPresenter";

const Menu = (props) => {
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
    unselect,
    ...otherProps
  } = props;
  const { onBlur, onFocus, onKeyDown } = otherProps;
  return (
    <FocusBehavior onBlur={onBlur} onFocus={onFocus}>
      {({ hasFocus, onBlur: handleBlur, onFocus: handleFocus }) => (
        <MenuBehavior
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
          unselect={unselect}
        >
          {({
            getActiveOption,
            getHighlightIndex,
            getOptionsInfo,
            getPreviousEvent,
            handleBlur: handleMenuBehaviorBlur,
            handleFocus: handleMenuBehaviorFocus,
            handleKeyDown,
            handleMouseMove,
            setActiveOption,
            setHighlightIndex,
            setMenuRef,
            setOptionsInfo,
            setPreviousEvent,
          }) => (
            <MenuPresenter
              {...otherProps}
              checkmark={checkmark}
              divider={divider}
              getActiveOption={getActiveOption}
              getHighlightIndex={getHighlightIndex}
              getOptionsInfo={getOptionsInfo}
              getPreviousEvent={getPreviousEvent}
              menuRef={setMenuRef}
              multiple={multiple}
              onBlur={handleMenuBehaviorBlur}
              onFocus={handleMenuBehaviorFocus}
              onKeyDown={handleKeyDown}
              onMouseMove={handleMouseMove}
              selected={selected}
              setActiveOption={setActiveOption}
              setHighlightIndex={setHighlightIndex}
              setOptionsInfo={setOptionsInfo}
              setPreviousEvent={setPreviousEvent}
              stylesheet={stylesheet}
            >
              {children}
            </MenuPresenter>
          )}
        </MenuBehavior>
      )}
    </FocusBehavior>
  );
};

Menu.displayName = "Menu";

Menu.propTypes = {
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
  // eslint-disable-next-line react/forbid-prop-types
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
   * Triggers when a key is pressed
   * In addition to passing back the event you get the
   * following in an object:
   *  - currentHighlightedId: string
   */
  onKeyDown: PropTypes.func,
  /**
   * Controls the selected Option(s)
   * This will not work if this is the child
   * of a MenuGroup component
   */
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.arrayOf(PropTypes.any),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Shows a ability of checkmark to be unchecked if required
   */
  unselect: PropTypes.bool,
};

Menu.defaultProps = {
  multiple: false,
  unselect: true,
};

export default Menu;
