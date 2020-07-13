import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";

import { types, AVAILABLE_TYPES } from "../types";

import {
  Content,
  DismissButton,
  InteractionsWrapper,
  Message,
  Notification,
  Wrapper,
  IconBackground
} from "./presenters";

import stylesheet from "./stylesheet"

/**
 * @typedef {Object} BannerPresenterProps
 * @property {string} [type]
 * @property {any} [actions]
 * @property {string} [dismissButtonTitle]
 * @property {Function} [onDismiss]
 * @property {boolean} [isWrappingContent]
 * @property {function(HTMLDivElement): any} [refContent]
 * @property {function(HTMLParagraphElement): any} [refNotification]
 * @property {function(HTMLDivElement): any} [refInteractionsWrapper]
 * @property {any} [children]
 * @property {Function} [stylesheet]
 */

/**
 * @param {BannerPresenterProps} props
 * @returns {JSX.Element}
 * @type {Component<BannerPresenterProps>}
 */
export default function BannerPresenter(props) {
  const {
    type,
    actions,
    dismissButtonTitle,
    onDismiss,
    isWrappingContent,
    refContent,
    refNotification,
    refInteractionsWrapper,
    children: message,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const hasActions = React.Children.count(actions) > 0;

  return (
    <Wrapper
      type={type}
      hasActions={hasActions}
      isWrappingContent={isWrappingContent}
      stylesheet={customStylesheet}
    >
      <IconBackground type={type} stylesheet={customStylesheet}/>
      <Content isWrappingContent innerRef={refContent} stylesheet={customStylesheet}>
        <Notification innerRef={refNotification} stylesheet={customStylesheet}>
          <Message >{message}</Message>
        </Notification>
        {hasActions ? (
          <InteractionsWrapper innerRef={refInteractionsWrapper} stylesheet={customStylesheet}>
            {actions}
          </InteractionsWrapper>
        ) : null}
      </Content>
      {onDismiss ? (
        <DismissButton title={dismissButtonTitle} onClick={onDismiss} stylesheet={customStylesheet}/>
      ) : null}
    </Wrapper>
  );
}

/** @type {BannerPresenterProps} */
BannerPresenter.defaultProps = {
  type: types.PRIMARY,
  dismissButtonTitle: "Dismiss",
  isWrappingContent: false,
  children: "Message"
};

BannerPresenter.propTypes = {
  /** Indicates the style of banner */
  type: PropTypes.oneOf(AVAILABLE_TYPES),
  /** Banner actions */
  actions: PropTypes.node,
  /** Accessibility text for the dismiss button */
  dismissButtonTitle: PropTypes.string,
  /** Called when the banner is dismissed */
  onDismiss: PropTypes.func,
  /** Determines whether the banner content wraps */
  isWrappingContent: PropTypes.bool,
  /** References content element */
  refContent: PropTypes.func,
  /** References notification element */
  refNotification: PropTypes.func,
  /** References interactions wrapper element */
  refInteractionsWrapper: PropTypes.func,
  /** The displayed message */
  children: PropTypes.node,
  /** Adds custom/overriding style */
  stylesheet: PropTypes.func
};
