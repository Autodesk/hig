import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { createCustomClassNames } from "@hig/utils";
import stylesheet from "../stylesheet";

const collapseStatus = {
  BEFORE_COLLAPSE: "before_collapse",
  COLLAPSING: "collapsing",
  COLLAPSED: "collapsed",
  BEFORE_EXPAND: "before_expand",
  EXPANDING: "expanding",
  EXPANDED: "expanded"
};

function ContentPresenter(props) {
  const { collapsed } = props;
  const [status, setStatus] = useState(collapseStatus.COLLAPSED);
  const contentWrapper = useRef(null);

  const expand = () => setStatus(collapseStatus.EXPANDING);
  const afterCollapsed = () => setStatus(collapseStatus.COLLAPSED);
  const afterExpanded = () => setStatus(collapseStatus.EXPANDED);

  // const prevCollapsed = useCompare(collapsed);

  const setContentWrapperRef = element => {
    contentWrapper.current = element;
  };

  const onTransitionEnd = ({ target, propertyName }) => {
    if (target === contentWrapper && propertyName === "height") {
      if (collapsed) {
        afterCollapsed();
      } else {
        afterExpanded();
      }
    }
  };

  const getContentHeight = () => `${contentWrapper.clientHeight}px`;

  const getTransitionStyles = statusParam => {
    const defaultCollapsedStyles = {
      height: "0",
      overflow: "hidden",
      visibility: "hidden"
    };

    if (statusParam === collapseStatus.EXPANDING) {
      return {
        ...defaultCollapsedStyles,
        height: getContentHeight(),
        visibility: "visible",
        overflow: "hidden"
      };
    }
    if (statusParam === collapseStatus.EXPANDED) {
      return {
        ...defaultCollapsedStyles,
        height: "auto",
        visibility: "visible",
        overflow: "visible"
      };
    }
    if (statusParam === collapseStatus.BEFORE_COLLAPSE) {
      return {
        ...defaultCollapsedStyles,
        height: getContentHeight(),
        visibility: "visible",
        overflow: "visible"
      };
    }
    if (statusParam === collapseStatus.COLLAPSING) {
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
      setTimeout(() => setStatus(collapseStatus.COLLAPSED));
    });
  };

  useEffect(() => {
    if (!collapsed && contentWrapper) {
      afterExpanded();
    }
  }, []);

  useEffect(
    () => {
      if (!contentWrapper) {
        return;
      }
      if (collapsed) {
        collapse();
      }
      if (!collapsed) {
        expand();
      }
    },
    [collapsed]
  );

  const { children, ...otherProps } = props;
  const { className } = otherProps;

  const contentClassName = createCustomClassNames(className, "content");
  const styles = stylesheet();
  const transitionStyles = getTransitionStyles(status);

  return (
    <div
      ref={setContentWrapperRef}
      className={cx(
        css(styles.contentTransitionWrapper),
        css(transitionStyles),
        contentClassName
      )}
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </div>
  );
}

ContentPresenter.displayName = "ContentPresenter";

ContentPresenter.propTypes = {
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool
};

ContentPresenter.defaultProps = {
  collapsed: false
};

export default ContentPresenter;
