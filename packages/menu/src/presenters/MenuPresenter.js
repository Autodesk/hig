import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";

import Option from "../Option";
import createChildren from "../behaviors/createChildren";
import stylesheet from "./stylesheet";

const MenuPresenter = props => {
  const {
    checkmark,
    children,
    divider,
    menuRef,
    multiple,
    stylesheet: customStylesheet,
    unselect,
    ...otherProps
  } = props;
  const {
    id,
    className,
    getHighlightIndex,
    getOptionsInfo,
    role,
    tabIndex
  } = otherProps;
  const mounted = useRef();

  const getOptions = () => createChildren(props.children, Option);

  const renderOption = ({ key, props: propsOrigin }) => {
    const {
      getActiveOption,
      getPreviousEvent,
      onFocus,
      selected,
      setActiveOption,
      setHighlightIndex
    } = props;
    const payload = {
      ...propsOrigin,
      checkmark,
      getActiveOption,
      getHighlightIndex,
      getOptionsInfo,
      getPreviousEvent,
      multiple,
      key,
      onFocus,
      selected,
      setActiveOption,
      setHighlightIndex,
      unselect
    };

    return <Option {...payload} />;
  };

  const ariaPayload =
    role !== `group`
      ? {
          ...(getHighlightIndex() !== 0 && {
            "aria-activedescendant": getOptionsInfo()[getHighlightIndex() - 1]
              .id
          }),
          ...(multiple && { "aria-multiselectable": multiple })
        }
      : {};
  const payload = { ...otherProps };
  delete payload.getActiveOption;
  delete payload.getHighlightIndex;
  delete payload.getOptionsInfo;
  delete payload.getPreviousEvent;
  delete payload.handleBlur;
  delete payload.handleFocus;
  delete payload.handleKeyDown;
  delete payload.handleMouseMove;
  delete payload.setActiveOption;
  delete payload.setHighlightIndex;
  delete payload.setOptionsInfo;
  delete payload.setPreviousEvent;
  delete payload.unselect;

  const renderOptions = () => getOptions().map(renderOption);

  useEffect(() => {
    if (!mounted.current) {
      const optionsInfo = [];
      if (role !== `group`) {
        React.Children.forEach(props.children, child => {
          if (child.type === Option) {
            optionsInfo.push(child.props);
          }
        });
        props.setOptionsInfo(optionsInfo);
      }
      mounted.current = true;
    } else if (props.role !== `group`) {
      const previousOptions = props.getOptionsInfo();
      const optionsInfo = [];
      const currentIds = [];
      const prevIds = [];
      React.Children.forEach(props.children, child => {
        if (child.type === Option) {
          optionsInfo.push(child.props);
          currentIds.push(child.props.id);
        }
      });

      Object.keys(previousOptions).forEach(index => {
        prevIds.push(previousOptions[index].id);
      });

      if (JSON.stringify(currentIds) !== JSON.stringify(prevIds)) {
        props.setOptionsInfo(optionsInfo);
      }
    }
  });

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            checkmark,
            divider,
            stylesheet: customStylesheet
          },
          resolvedRoles
        );
        return (
          <ul
            {...ariaPayload}
            {...payload}
            className={cx([className, css(styles.menu)])}
            id={id}
            ref={menuRef}
            role={role || `listbox`} // set to group if it is w/in a MenuGroup
            tabIndex={tabIndex || `0`} // not focusable if w/in a MenuGroup
          >
            {renderOptions()}
          </ul>
        );
      }}
    </ThemeContext.Consumer>
  );
};

MenuPresenter.displayName = "MenuPresenter";

MenuPresenter.propTypes = {
  checkmark: PropTypes.bool,
  children: PropTypes.node,
  divider: PropTypes.bool,
  getActiveOption: PropTypes.func,
  getOptionsInfo: PropTypes.func,
  getPreviousEvent: PropTypes.func,
  menuRef: PropTypes.func,
  multiple: PropTypes.bool,
  onFocus: PropTypes.func,
  role: PropTypes.string,
  selected: PropTypes.func,
  setActiveOption: PropTypes.func,
  setHighlightIndex: PropTypes.func,
  setOptionsInfo: PropTypes.func,
  stylesheet: PropTypes.func,
  unselect: PropTypes.bool
};

export default MenuPresenter;
