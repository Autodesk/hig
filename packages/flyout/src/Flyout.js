import React, { Component } from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";
import { polyfill } from "react-lifecycles-compat";

import { anchorPoints, availableAnchorPoints } from "./anchorPoints";
import FlyoutPresenter from "./presenters/FlyoutPresenter";
import getFlyoutPosition from "./getFlyoutPosition";
import PanelPresenter from "./presenters/PanelPresenter";
import PanelContainerPresenter from "./presenters/PanelContainerPresenter";

const TRANSITION_DURATION = 300;

/**
 * @typedef {Object} PanelRendererPayload
 * @property {JSX} [content]
 * @property {function(UIEvent): void} handleScroll
 * @property {function(): void} hideFlyout
 * @property {number} [maxHeight]
 * @property {function(HTMLElement): void} innerRef
 */

class Flyout extends Component {
  static propTypes = {
    /** Where the flyout will be anchored relative to target */
    anchorPoint: PropTypes.oneOf(availableAnchorPoints),
    /** Target component to open the flyout. Can be either a node or a render function */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Content for the flyout. Can be either a node or a render function */
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Use to render a custom flyout panel. Can be either a node or a render function */
    panel: PropTypes.func,
    /** Max height of the flyout content, in pixels */
    maxHeight: PropTypes.number,
    /** Function called when the flyout is open, and a click event occurs outside the flyout */
    onClickOutside: PropTypes.func,
    /** Function called when the flyout panel is scrolled */
    onScroll: PropTypes.func,
    /** When provided, it overrides the flyout's open state */
    open: PropTypes.bool
  };

  static defaultProps = {
    anchorPoint: anchorPoints.RIGHT_TOP,
    /**
     * @param {PanelRendererPayload} payload
     */
    panel({ innerRef, content, handleScroll, maxHeight }) {
      return (
        <PanelContainerPresenter innerRef={innerRef} maxHeight={maxHeight}>
          <PanelPresenter onScroll={handleScroll}>{content}</PanelPresenter>
        </PanelContainerPresenter>
      );
    }
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

  /**
   * @type {Object}
   * @property {boolean} isVisible Used to direct the flyout's transition behavior
   */
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
    const { actionRef, panelRef } = this;

    if (!actionRef || !panelRef) return { top: 0, left: 0 };

    const actionRect = actionRef.getBoundingClientRect();
    const panelRect = panelRef.getBoundingClientRect();
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
  actionRef;

  /** @type {HTMLDivElement} */
  containerRef;

  /** @type {HTMLElement} */
  panelRef;

  /** @type {HTMLDivElement} */
  wrapperRef;

  handleChildClick = () => {
    this.toggleVisibility();
  };

  /**
   * @param {MouseEvent} event
   */
  handleBodyClick = event => {
    const { wrapperRef } = this;
    const { isVisible } = this.state;
    const { onClickOutside } = this.props;
    const flyoutClicked =
      event.target === wrapperRef || wrapperRef.contains(event.target);

    if (flyoutClicked || !isVisible) return;
    if (onClickOutside) onClickOutside(event);

    this.toggleVisibility();
  };

  /**
   * @param {HTMLElement} actionRef
   */
  refAction = actionRef => {
    this.actionRef = actionRef;
  };

  /**
   * @param {HTMLDivElement} containerRef
   */
  refContainer = containerRef => {
    this.containerRef = containerRef;
  };

  /**
   * @param {HTMLElement} panelRef
   */
  refPanel = panelRef => {
    this.panelRef = panelRef;
  };

  /**
   * @param {HTMLDivElement} wrapperRef
   */
  refWrapper = wrapperRef => {
    this.wrapperRef = wrapperRef;
  };

  hideFlyout = () => {
    this.setState({
      isVisible: false
    });
  };

  toggleVisibility() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  createPresenterProps(transitionStatus) {
    const { refContainer, refAction, refWrapper } = this;
    const panel = this.renderPanel();
    const {
      anchorPoint,
      topOffset,
      leftOffset
    } = this.getPresenterPositionProps();

    return {
      anchorPoint,
      leftOffset,
      panel,
      refAction,
      refContainer,
      refWrapper,
      topOffset,
      transitionStatus
    };
  }

  /**
   * @returns {PanelRendererPayload}
   */
  createPanelPayload() {
    const { hideFlyout } = this;
    const { maxHeight, onScroll } = this.props;

    return {
      hideFlyout,
      maxHeight,
      content: this.renderContent(),
      handleScroll: onScroll,
      innerRef: this.refPanel
    };
  }

  renderContent() {
    const { content } = this.props;
    const { hideFlyout } = this;

    if (typeof content === "function") {
      return content({ hideFlyout });
    }

    return content;
  }

  renderPanel() {
    const { panel } = this.props;

    if (typeof panel === "function") {
      return panel(this.createPanelPayload());
    }

    return panel;
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

  render() {
    return (
      <Transition in={this.state.isVisible} timeout={TRANSITION_DURATION}>
        {transitionStatus => (
          <FlyoutPresenter {...this.createPresenterProps(transitionStatus)}>
            {this.renderChildren()}
          </FlyoutPresenter>
        )}
      </Transition>
    );
  }
}

export default polyfill(Flyout);
