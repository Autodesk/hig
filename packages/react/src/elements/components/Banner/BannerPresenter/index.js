import React, { Component } from "react";
import PropTypes from "prop-types";

import types from "../types";
import placements from "../placements";

import {
  Content,
  DismissButton,
  Icon,
  InteractionsWrapper,
  Label,
  Message,
  Notification,
  Wrapper
} from "./styled";

/**
 * @typedef {Object} BannerPresenterProps
 * @property {string} [type]
 * @property {string} [placement]
 * @property {string} [label]
 * @property {string} [message]
 * @property {string} [dismissButtonTitle]
 * @property {Function} [onDismiss]
 * @property {string} [labelId]
 * @property {any} [children]
 */

/**
 * @typedef {Object} BannerPresenterState
 * @property {boolean} isWrapping
 */

/** @type {Component<BannerPresenterProps, BannerPresenterState>} */
export default class BannerPresenter extends Component {
  static types = types;
  static placements = placements;

  /** @type {BannerPresenterProps} */
  static defaultProps = {
    type: types.PRIMARY,
    placement: placements.STANDARD,
    label: "STATUS",
    message: "Message",
    dismissButtonTitle: "Dismiss",
    onDismiss: undefined
  };

  static propTypes = {
    /** Indicates the style of banner */
    type: PropTypes.oneOf(Object.values(types)),
    /** Determines the intended placement of banner */
    placement: PropTypes.oneOf(Object.values(placements)),
    /** The label of the message displayed */
    label: PropTypes.string,
    /** The displayed message */
    message: PropTypes.string,
    /** Accessibility text for the dismiss button */
    dismissButtonTitle: PropTypes.string,
    /** Called when the banner is dismissed */
    onDismiss: PropTypes.func,
    /** The ID used for ARIA labeling */
    labelId: PropTypes.string,
    /** A render prop; Renders banner interactions */
    children: PropTypes.func
  };

  /** @type {BannerPresenterState} */
  state = {
    isWrapping: false
  };

  /** @todo Add listener based on `children` prop */
  componentWillMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentDidMount() {
    this.updateWrapping(this.triggerReady);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.cancelAnimationFrame(this.animationFrame);
  }

  /** @type {BannerPresenterProps} */
  props;

  /** @type {number} */
  animationFrame;

  /** @type {HTMLDivElement} */
  notification;

  /** @type {HTMLDivElement} */
  interactionsWrapper;

  /**
   * @param {HTMLDivElement} notification
   */
  refNotification = notification => {
    this.notification = notification;
  };

  /**
   * @param {HTMLDivElement} interactionsWrapper
   */
  refInteractionsWrapper = interactionsWrapper => {
    this.interactionsWrapper = interactionsWrapper;
  };

  handleResize = () => {
    if (this.animationFrame !== undefined) return;

    this.animationFrame = window.requestAnimationFrame(this.updateWrapping);
  };

  updateWrapping = () => {
    /** @todo Refactor so that this function isn't called if the references don't exist */
    const { notification, interactionsWrapper } = this;

    if (!notification || !interactionsWrapper) return;

    const isWrapping =
      notification.offsetLeft === interactionsWrapper.offsetLeft;

    if (isWrapping !== this.state.isWrapping) {
      this.setState({ isWrapping });
    }

    delete this.animationFrame;
  };

  render() {
    const {
      type,
      placement,
      label,
      message,
      dismissButtonTitle,
      onDismiss,
      labelId,
      children: renderActions
    } = this.props;

    const hasLabel = !!label;
    const hasActions = !!renderActions;
    const wrapperLabelledBy = hasLabel ? labelId : undefined;
    const { isWrapping } = this.state;

    return (
      <Wrapper
        type={type}
        placement={placement}
        hasActions={hasActions}
        isWrapping={isWrapping}
        labelledBy={wrapperLabelledBy}
      >
        <Icon type={type} />
        <Content>
          <Notification innerRef={this.refNotification}>
            {hasLabel ? <Label id={labelId}>{label}</Label> : null}
            <Message>{message}</Message>
          </Notification>
          {hasActions ? (
            <InteractionsWrapper innerRef={this.refInteractionsWrapper}>
              {renderActions({ isWrapping })}
            </InteractionsWrapper>
          ) : null}
        </Content>
        <DismissButton title={dismissButtonTitle} onClick={onDismiss} />
      </Wrapper>
    );
  }
}
