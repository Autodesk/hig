import React, { Component } from "react";
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
  EXPANDED: "expanded",
};

export default class ContentPresenter extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    children: PropTypes.node.isRequired,
    collapsed: PropTypes.bool,
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    collapsed: false,
  };

  constructor(props) {
    super(props);
    this.contentWrapper = null;
    this.setContentWrapperRef = (element) => {
      this.contentWrapper = element;
    };

    this.state = {
      status: collapseStatus.COLLAPSED,
    };
  }

  componentDidMount() {
    if (!this.props.collapsed && this.contentWrapper) {
      this.afterExpanded();
    }
  }

  componentDidUpdate({ collapsed: previousCollapsed }) {
    const { collapsed: currentCollapsed } = this.props;

    if (!this.contentWrapper) {
      return;
    }
    if (currentCollapsed && !previousCollapsed) {
      this.collapse();
    }
    if (!currentCollapsed && previousCollapsed) {
      this.expand();
    }
  }

  onTransitionEnd = ({ target, propertyName }) => {
    if (target === this.contentWrapper && propertyName === "height") {
      if (this.props.collapsed) {
        this.afterCollapsed();
      } else {
        this.afterExpanded();
      }
    }
  };

  getContentHeight = () => `${this.contentWrapper.scrollHeight}px`;

  getTransitionStyles = (status) => {
    const defaultCollapsedStyles = {
      height: "0",
      overflow: "hidden",
      visibility: "hidden",
    };

    if (status === collapseStatus.EXPANDING) {
      return {
        ...defaultCollapsedStyles,
        height: this.getContentHeight(),
        visibility: "visible",
        overflow: "hidden",
      };
    }
    if (status === collapseStatus.EXPANDED) {
      return {
        ...defaultCollapsedStyles,
        height: "auto",
        visibility: "visible",
        overflow: "visible",
      };
    }
    if (status === collapseStatus.BEFORE_COLLAPSE) {
      return {
        ...defaultCollapsedStyles,
        height: this.getContentHeight(),
        visibility: "visible",
        overflow: "visible",
      };
    }
    if (status === collapseStatus.COLLAPSING) {
      return {
        ...defaultCollapsedStyles,
        height: "0",
        visibility: "visible",
        overflow: "hidden",
      };
    }

    return defaultCollapsedStyles;
  };

  collapse = () => {
    this.setState({ status: collapseStatus.BEFORE_COLLAPSE });
    window.requestAnimationFrame(() => {
      setTimeout(() => this.setState({ status: collapseStatus.COLLAPSED }));
    });
  };

  expand = () => this.setState({ status: collapseStatus.EXPANDING });

  afterCollapsed = () => this.setState({ status: collapseStatus.COLLAPSED });

  afterExpanded = () => this.setState({ status: collapseStatus.EXPANDED });

  render() {
    const { children, ...otherProps } = this.props;
    const { className } = otherProps;
    const { status } = this.state;

    const contentClassName = createCustomClassNames(className, "content");
    const styles = stylesheet();
    const transitionStyles = this.getTransitionStyles(status);

    return (
      <div
        ref={this.setContentWrapperRef}
        className={cx(
          css(styles.contentTransitionWrapper),
          css(transitionStyles),
          contentClassName
        )}
        onTransitionEnd={this.onTransitionEnd}
      >
        {children}
      </div>
    );
  }
}
