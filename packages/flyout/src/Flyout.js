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
 * @property {function(HTMLElement): void} innerRef
 * @property {function(): void} hideFlyout
 * @property {JSX} [content]
 * @property {function(UIEvent): void} [handleScroll]
 * @property {number} [maxHeight]
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
    /** Function called when the flyout closes */
    onClose: PropTypes.func,
    /** Function called when the flyout opens */
    onOpen: PropTypes.func,
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
   * @type {Object}
   * @property {boolean} open Used to direct the flyout's transition behavior
   */
  state = {
    open: false
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

  /**
   * @param {boolean} open
   */
  setOpen(open) {
    const { onClose, onOpen } = this.props;

    if (open && onOpen) {
      onOpen();
    } else if (!open && onClose) {
      onClose();
    }

    this.setState({ open });
  }

  isOpenControlled() {
    return this.props.open !== undefined;
  }

  isOpen() {
    return this.isOpenControlled() ? this.props.open : this.state.open;
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
    if (!this.isOpenControlled()) {
      this.toggleOpen();
    }
  };

  /**
   * @param {MouseEvent} event
   */
  handleBodyClick = event => {
    const { wrapperRef } = this;
    const { onClickOutside } = this.props;
    const flyoutClicked =
      event.target === wrapperRef || wrapperRef.contains(event.target);

    if (flyoutClicked || !this.isOpen()) return;
    if (onClickOutside) onClickOutside(event);
    if (!this.isOpenControlled()) this.toggleOpen();
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
    this.setOpen(false);
  };

  toggleOpen() {
    this.setOpen(!this.state.open);
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
      <Transition in={this.isOpen()} timeout={TRANSITION_DURATION}>
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
