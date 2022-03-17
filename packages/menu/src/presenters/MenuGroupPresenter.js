import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import Menu from "../Menu";
import createChildren from "../behaviors/createChildren";
import stylesheet from "./stylesheet";

const MenuGroupPresenter = props => {
  const mounted = useRef();
  const getMenus = () => createChildren(props.children, Menu);

  const renderMenu = ({ key, props: propsOrigin }) => {
    const {
      defaultSelected,
      getActiveOption,
      getHighlightIndex,
      getOptionsInfo,
      getPreviousEvent,
      multiple,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onMouseMove: handleMouseMove,
      selected,
      setActiveOption,
      setHighlightIndex,
      setOptionsInfo,
      setPreviousEvent,
      unselect
    } = props;
    const payload = {
      ...propsOrigin,
      defaultSelected,
      key,
      role: "group",
      tabIndex: "-1",
      getActiveOption,
      getHighlightIndex,
      getOptionsInfo,
      getPreviousEvent,
      handleBlur,
      handleFocus,
      handleKeyDown,
      handleMouseMove,
      multiple,
      selected,
      setActiveOption,
      setHighlightIndex,
      setOptionsInfo,
      setPreviousEvent,
      unselect
    };

    return <Menu {...payload} />;
  };

  const renderMenus = () => getMenus().map(renderMenu);

  const {
    getHighlightIndex,
    getOptionsInfo,
    menuRef,
    multiple,
    stylesheet: customStylesheet,
    unselect,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const ariaPayload = {
    ...(getHighlightIndex() !== 0 && {
      "aria-activedescendant": getOptionsInfo()[getHighlightIndex() - 1].id
    }),
    ...(multiple && { "aria-multiselectable": multiple })
  };
  const payload = { ...otherProps };
  delete payload.defaultSelected;
  delete payload.getActiveOption;
  delete payload.getPreviousEvent;
  delete payload.setActiveOption;
  delete payload.setHighlightIndex;
  delete payload.setOptionsInfo;
  delete payload.setPreviousEvent;

  useEffect(() => {
    if (!mounted.current) {
      const menusInfo = {};
      const mergedOptions = [];
      React.Children.forEach(props.children, (child, index) => {
        menusInfo[index] = child.props;
      });

      Object.keys(menusInfo).forEach(index => {
        if (menusInfo[index] === Menu) {
          if (Array.isArray(menusInfo[index].children)) {
            menusInfo[index].children.forEach(child => {
              mergedOptions.push(child.props);
            });
          } else {
            mergedOptions.push(menusInfo[index].children.props);
          }
        }
      });

      props.setOptionsInfo(mergedOptions);
      mounted.current = true;
    } else {
      // update options if they change
      const previousOptions = props.getOptionsInfo();
      const menusInfo = {};
      const mergedOptions = [];
      const currentIds = [];
      const prevIds = [];

      // get current menus
      React.Children.forEach(props.children, (child, index) => {
        if (child.type === Menu) {
          menusInfo[index] = child.props;
        }
      });

      // get current options
      Object.keys(menusInfo).forEach(index => {
        if (Array.isArray(menusInfo[index].children)) {
          menusInfo[index].children.forEach(child => {
            mergedOptions.push(child.props);
            currentIds.push(child.props.id);
          });
        } else {
          mergedOptions.push(menusInfo[index].children.props);
          currentIds.push(menusInfo[index].children.props.id);
        }
      });

      // get previous options
      Object.keys(previousOptions).forEach(index => {
        prevIds.push(previousOptions[index].id);
      });

      // check for changes and update option info if there is a change
      if (JSON.stringify(currentIds) !== JSON.stringify(prevIds)) {
        props.setOptionsInfo(mergedOptions);
      }
    }
  });

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { stylesheet: customStylesheet },
          resolvedRoles
        );

        return (
          <div
            {...payload}
            {...ariaPayload}
            className={cx([className, css(styles.menuGroup)])}
            ref={menuRef}
            role="listbox" // conditional or required
            tabIndex="0" // conditional w/ MenuGroup
          >
            {renderMenus()}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

MenuGroupPresenter.displayName = "MenuGroupPresenter";

MenuGroupPresenter.propTypes = {
  children: PropTypes.node,
  defaultSelected: PropTypes.arrayOf(PropTypes.any),
  getActiveOption: PropTypes.func,
  getHighlightIndex: PropTypes.func,
  getOptionsInfo: PropTypes.func,
  getPreviousEvent: PropTypes.func,
  menuRef: PropTypes.func,
  multiple: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  selected: PropTypes.bool,
  setActiveOption: PropTypes.func,
  setHighlightIndex: PropTypes.func,
  setOptionsInfo: PropTypes.func,
  setPreviousEvent: PropTypes.func,
  stylesheet: PropTypes.func,
  unselect: PropTypes.bool
};

export default MenuGroupPresenter;
