import React, { Component } from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";
import { polyfill } from "react-lifecycles-compat";

import { anchorPoints, availableAnchorPoints } from "./anchorPoints";
import FlyoutPresenter from "./FlyoutPresenter";
import getFlyoutPosition from "./getFlyoutPosition";

const TRANSITION_DURATION = 300;

class Flyout extends Component {
  static propTypes = {
    /** Where the flyout will be anchored relative to target */
    anchorPoint: PropTypes.oneOf(availableAnchorPoints),
    /** Target component to open the flyout. Can be either a node or a render function */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Content for the flyout */
    content: PropTypes.node,
    /** Max height of the flyout content, in pixels */
    maxHeight: PropTypes.number,
    /** Function called when the flyout is open, and a click event occurs outside the flyout */
    onClickOutside: PropTypes.func,
    /** Function called when the flyout panel is scrolled */
    onScroll: PropTypes.func,
    /** When provided, it overrides the flyout's open state */
    open: PropTypes.bool,
    /** Width of the flyout content with one of the supported modifiers */
    size: PropTypes.oneOf(Object.freeze(["small", "medium", "large"])),
  };

  static defaultProps = {
    anchorPoint: anchorPoints.RIGHT_TOP
  };

  /**
   * @param {FlyoutProps} nextProps
   * @param {FlyoutState} prevState
   * @returns {FlyoutState | null}
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    const { open } = nextProps;
    const { isVisible } = prevState;

    if (open === isVisible) return null;

    return { isVisible: open };
  }

  state = {
    isVisible: false
  };

  componentDidMount() {
    window.document.body.addEventListener("click", this.handleBodyClick);
  }

  componentWillUnmount() {
    window.document.body.removeEventListener("click", this.handleBodyClick);
  }

  getPresenterPositionProps() {
    const { action, panel } = this;

    if (!action || !panel) return { top: 0, left: 0 };

    const actionRect = action.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const viewportRect = window.document.documentElement.getBoundingClientRect();
    const { anchorPoint } = this.props;

    return getFlyoutPosition({
      anchorPoint,
      actionRect,
      panelRect,
      viewportRect
    });
  }

  /** @type {HTMLElement} */
  action;

  /** @type {HTMLDivElement} */
  container;

  /** @type {HTMLDivElement} */
  panel;

  /** @type {HTMLDivElement} */
  wrapper;

  handleChildClick = () => {
    this.toggleVisibility();
  };

  /**
   * @param {MouseEvent} event
   */
  handleBodyClick = event => {
    const { wrapper } = this;
    const { isVisible } = this.state;
    const { onClickOutside } = this.props;
    const flyoutClicked =
      event.target === wrapper || wrapper.contains(event.target);

    if (flyoutClicked || !isVisible) return;
    if (onClickOutside) onClickOutside(event);

    this.toggleVisibility();
  };

  /**
   * @param {HTMLElement} action
   */
  refAction = action => {
    this.action = action;
  };

  /**
   * @param {HTMLDivElement} container
   */
  refContainer = container => {
    this.container = container;
  };

  /**
   * @param {HTMLDivElement} panel
   */
  refPanel = panel => {
    this.panel = panel;
  };

  /**
   * @param {HTMLDivElement} wrapper
   */
  refWrapper = wrapper => {
    this.wrapper = wrapper;
  };

  toggleVisibility() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  createPresenterProps(transitionStatus) {
    const { content, maxHeight, onScroll, size } = this.props;
    const { refContainer, refPanel, refAction, refWrapper } = this;
    const {
      anchorPoint,
      topOffset,
      leftOffset
    } = this.getPresenterPositionProps();

    return {
      anchorPoint,
      topOffset,
      leftOffset,
      content,
      maxHeight,
      size,
      refAction,
      refContainer,
      refPanel,
      refWrapper,
      transitionStatus,
      onScroll
    };
  }

  renderChildren() {
    const { children } = this.props;
    const { handleChildClick } = this;

    if (typeof children === "function") {
      return children({ handleClick: handleChildClick });
    }

    if (React.Children.count(children) === 1) {
      return React.cloneElement(children, { onClick: handleChildClick });
    }

    return children;
  }

  renderPresenter = transitionStatus => (
    <FlyoutPresenter {...this.createPresenterProps(transitionStatus)}>
      {this.renderChildren()}
    </FlyoutPresenter>
  );

  render() {
    return (
      <Transition in={this.state.isVisible} timeout={TRANSITION_DURATION}>
        {this.renderPresenter}
      </Transition>
    );
  }
}

export default polyfill(Flyout);
