/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { css, cx } from "emotion";
import { createCustomClassNames } from "@hig/utils";

import TreeObjectNestedSubTreeItem from "./fileview/TreeObjectNestedSubTreeItem";
import TreeObjectSubTreeItem from "./fileview/TreeObjectSubTreeItem";
import TreeItemBehavior from "../behaviors/TreeItemBehavior";

import stylesheet from "./stylesheet";

const collapseStatus = {
  BEFORE_COLLAPSE: "before_collapse",
  COLLAPSING: "collapsing",
  COLLAPSED: "collapsed",
  BEFORE_EXPAND: "before_expand",
  EXPANDING: "expanding",
  EXPANDED: "expanded"
};

const SubTreeViewCombined = props => {
  const { collapsed } = props;
  const [status, setStatus] = useState(collapseStatus.COLLAPSED);
  const [mount, setMount] = useState(false);
  const subTreeWrapper = useRef(null);
  const previousCollapsed = useRef(collapsed);

  const setSubTreeWrapperRef = element => {
    subTreeWrapper.current = element;
  };

  const afterCollapsed = () => setStatus(collapseStatus.COLLAPSED);
  const afterExpanded = () => setStatus(collapseStatus.EXPANDED);

  const onTransitionEnd = ({ target, propertyName }) => {
    if (target === subTreeWrapper.current && propertyName === "height") {
      if (props.collapsed) {
        afterCollapsed();
        setMount(false);
      } else {
        afterExpanded();
      }
    }
  };

  const getContentHeight = () =>
    `${subTreeWrapper.current && subTreeWrapper.current.scrollHeight}px`;

  const getTransitionStyles = statusParams => {
    const defaultCollapsedStyles = {
      height: "0",
      overflow: "hidden",
      visibility: "hidden"
    };

    if (statusParams === collapseStatus.EXPANDING) {
      return {
        ...defaultCollapsedStyles,
        height: getContentHeight(),
        visibility: "visible",
        overflow: "hidden"
      };
    }
    if (statusParams === collapseStatus.EXPANDED) {
      return {
        ...defaultCollapsedStyles,
        height: "auto",
        visibility: "visible",
        overflow: "visible"
      };
    }
    if (statusParams === collapseStatus.BEFORE_COLLAPSE) {
      return {
        ...defaultCollapsedStyles,
        height: getContentHeight(),
        visibility: "visible",
        overflow: "visible"
      };
    }
    if (statusParams === collapseStatus.COLLAPSING) {
      return {
        ...defaultCollapsedStyles,
        height: "0",
        visibility: "visible",
        overflow: "hidden"
      };
    }

    return defaultCollapsedStyles;
  };

  const collapse = () => {
    setStatus(collapseStatus.BEFORE_COLLAPSE);
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        setStatus(collapseStatus.COLLAPSED);
        setMount(false);
      });
    });
  };

  const expand = () => {
    setStatus(collapseStatus.EXPANDING);
    setMount(true);
  };

  const renderSubTreeViewObject = () => {
    const {
      treeItem: {
        children,
        meta: { className },
        payload
      },
      // eslint-disable-next-line no-shadow
      collapsed,
      density,
      id,
      themeData,
      onFocus,
      getKeyboardOpenId,
      setKeyboardOpenId,
      level
    } = props;
    const styles = stylesheet(props, themeData);

    const transitionStyles = getTransitionStyles(status);
    const higTreeItemSubTreeViewWrapperClassName = createCustomClassNames(
      className,
      `hig-tree-item-sub-tree-view-wrapper`
    );
    const higTreeItemSubTreeViewClassName = createCustomClassNames(
      className,
      `hig-tree-item-sub-tree-view`
    );

    return (
      <div
        className={cx([
          css(styles.higTreeItemSubTreeViewWrapper),
          css(transitionStyles),
          higTreeItemSubTreeViewWrapperClassName
        ])}
        onTransitionEnd={onTransitionEnd}
        ref={setSubTreeWrapperRef}
      >
        {(!collapsed || mount) && (
          <ul
            className={cx([
              css(styles.higTreeItemSubTreeView),
              higTreeItemSubTreeViewClassName
            ])}
            role="group"
          >
            {children
              ? children.map(
                  (child, index) =>
                    child.children ? (
                      <TreeItemBehavior
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${id}-${index}`}
                        {...child}
                        {...payload}
                      >
                        {({
                          getIsCollapsed,
                          handleClick,
                          handleOperatorClick,
                          setIsCollapsed
                        }) => (
                          <TreeObjectNestedSubTreeItem
                            treeItem={{ ...child, payload }}
                            themeData={themeData}
                            density={density}
                            onClick={handleClick}
                            onFocus={onFocus}
                            onOperatorClick={handleOperatorClick}
                            collapsed={getIsCollapsed()}
                            getIsCollapsed={getIsCollapsed}
                            getKeyboardOpenId={getKeyboardOpenId}
                            keyboardOpenId={getKeyboardOpenId()}
                            setIsCollapsed={setIsCollapsed}
                            setKeyboardOpenId={setKeyboardOpenId}
                            // eslint-disable-next-line react/no-array-index-key
                            key={`${id}-${index}`}
                            level={level + 1}
                          />
                        )}
                      </TreeItemBehavior>
                    ) : (
                      <TreeItemBehavior
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${id}-${index}`}
                        {...child}
                        {...payload}
                      >
                        {({ getIsCollapsed, handleClick, setIsCollapsed }) => (
                          <TreeObjectSubTreeItem
                            treeItem={{ ...child, payload }}
                            themeData={themeData}
                            onClick={handleClick}
                            onFocus={onFocus}
                            collapsed={getIsCollapsed()}
                            getIsCollapsed={getIsCollapsed}
                            getKeyboardOpenId={getKeyboardOpenId}
                            keyboardOpenId={getKeyboardOpenId()}
                            setIsCollapsed={setIsCollapsed}
                            setKeyboardOpenId={setKeyboardOpenId}
                            // eslint-disable-next-line react/no-array-index-key
                            key={`${id}-${index}`}
                            level={level + 1}
                          />
                        )}
                      </TreeItemBehavior>
                    )
                )
              : null}
          </ul>
        )}
      </div>
    );
  };

  const renderSubTreeViewPresenter = () => {
    const {
      children,
      // eslint-disable-next-line no-shadow
      collapsed,
      density,
      getActiveTreeItemId,
      getActiveTreeItemIndex,
      getCurrentItemClicked,
      getKeyboardOpenId,
      getTreeItemArray,
      guidelines,
      id,
      indicator,
      level,
      setActiveTreeItemId,
      setActiveTreeItemIndex,
      setKeyboardOpenId,
      themeData,
      ...otherProps
    } = props;
    const { className } = otherProps;
    const styles = stylesheet(props, themeData);
    const clonedChildren = Array.isArray(children)
      ? children.map(child =>
          React.cloneElement(child, {
            getActiveTreeItemId,
            getActiveTreeItemIndex,
            getCurrentItemClicked,
            getKeyboardOpenId,
            getTreeItemArray,
            guidelines,
            indicator,
            keyboardOpenId: getKeyboardOpenId(),
            level: level + 1,
            setActiveTreeItemId,
            setActiveTreeItemIndex,
            setKeyboardOpenId
          })
        )
      : React.cloneElement(children, {
          getActiveTreeItemId,
          getActiveTreeItemIndex,
          getCurrentItemClicked,
          getKeyboardOpenId,
          getTreeItemArray,
          guidelines,
          indicator,
          keyboardOpenId: getKeyboardOpenId(),
          level: level + 1,
          setActiveTreeItemId,
          setActiveTreeItemIndex,
          setKeyboardOpenId
        });
    const transitionStyles = getTransitionStyles(status);
    const higTreeItemSubTreeViewWrapperClassName = createCustomClassNames(
      className,
      `hig-tree-item-sub-tree-view-wrapper`
    );
    const higTreeItemSubTreeViewClassName = createCustomClassNames(
      className,
      `hig-tree-item-sub-tree-view`
    );

    return (
      <div
        className={cx([
          css(styles.higTreeItemSubTreeViewWrapper),
          css(transitionStyles),
          higTreeItemSubTreeViewWrapperClassName
        ])}
        onTransitionEnd={onTransitionEnd}
        ref={setSubTreeWrapperRef}
      >
        {(!collapsed || mount) &&
          Array.isArray(clonedChildren) && (
            <ul
              className={cx([
                css(styles.higTreeItemSubTreeView),
                higTreeItemSubTreeViewClassName
              ])}
              role="group"
            >
              {clonedChildren.map((child, index) => {
                const { type: ComponentType } = child;
                /*
                  this is different to TreeViewPresenter.js
                  all the props has been extracted in the file above and passed to the child.props
                  so, we don't need to extract and assign again
                */
                return (
                  <ComponentType
                    {...child.props}
                    themeData={themeData}
                    density={density}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${id}-${index}`}
                  />
                );
              })}
            </ul>
          )}
        {(!collapsed || mount) &&
          !Array.isArray(clonedChildren) && (
            <ul
              className={cx([
                css(styles.higTreeItemSubTreeView),
                higTreeItemSubTreeViewClassName
              ])}
              role="group"
            >
              {clonedChildren}
            </ul>
          )}
      </div>
    );
  };

  useEffect(() => {
    if (!collapsed && subTreeWrapper) {
      afterExpanded();
    }
  }, []);

  useLayoutEffect(
    () => {
      const { current: currentCollapsed } = previousCollapsed;
      previousCollapsed.current = collapsed;

      if (!subTreeWrapper) {
        return;
      }
      if (!currentCollapsed && collapsed) {
        collapse();
      }
      if (currentCollapsed && !collapsed) {
        expand();
      }
    },
    [collapsed]
  );

  return props.isObject
    ? renderSubTreeViewObject()
    : renderSubTreeViewPresenter();
};

export default SubTreeViewCombined;
