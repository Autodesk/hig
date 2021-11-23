/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import { css, cx } from "emotion";
import { createCustomClassNames } from "@hig/utils";

import TreeObjectNestedSubTreeItem from "./fileview/TreeObjectNestedSubTreeItem";
import TreeObjectSubTreeItem from "./fileview/TreeObjectSubTreeItem";
import TreeItem from "../TreeItem";
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
  const [status, setStatus] = useState(collapseStatus.COLLAPSED);
  const [mount, setMount] = useState(false);
  const subTreeWrapper = useRef(null);

  const setSubTreeWrapperRef = element => {
    subTreeWrapper.current = element;
  };

  const afterCollapsed = () => setStatus(collapseStatus.COLLAPSED);
  const afterExpanded = () => setStatus(collapseStatus.EXPANDED);

  const onTransitionEnd = ({ target, propertyName }) => {
    if (target === subTreeWrapper && propertyName === "height") {
      if (props.collapsed) {
        afterCollapsed();
        setMount(false);
      } else {
        afterExpanded();
      }
    }
  };

  const getContentHeight = () => `${subTreeWrapper.scrollHeight}px`;

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
              {clonedChildren.map((child, index) => (
                <TreeItem
                  {...child.props}
                  themeData={themeData}
                  density={density}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${id}-${index}`}
                />
              ))}
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
    if (!props.collapsed && subTreeWrapper) {
      afterExpanded();
    }
  }, []);

  useEffect(
    () => {
      // const { collapsed: previousCollapsed } = previousProps;
      const { collapsed: currentCollapsed } = props;

      if (!subTreeWrapper) {
        return;
      }
      if (currentCollapsed) {
        collapse();
      }
      if (!currentCollapsed) {
        expand();
      }
    },
    [props]
  );

  return props.isObject
    ? renderSubTreeViewObject()
    : renderSubTreeViewPresenter();
};

export default SubTreeViewCombined;
