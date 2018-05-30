import React from "react";
import PropTypes from "prop-types";

import { types, AVAILABLE_TYPES } from "../types";

import {
  Content,
  DismissButton,
  InteractionsWrapper,
  Message,
  Notification,
  Wrapper
} from "./presenters";
import IconBackground from "../presenters/IconBackground";

/**
 * @typedef {Object} BannerPresenterProps
 * @property {string} [type]
 * @property {string} [label]
 * @property {string} [labelledBy]
 * @property {any} [actions]
 * @property {string} [dismissButtonTitle]
 * @property {Function} [onDismiss]
 * @property {boolean} [isWrappingContent]
 * @property {function(HTMLDivElement): any} [refContent]
 * @property {function(HTMLParagraphElement): any} [refNotification]
 * @property {function(HTMLDivElement): any} [refInteractionsWrapper]
 * @property {any} [children]
 */

/**
 * @param {BannerPresenterProps} props
 * @returns {JSX.Element}
 * @type {Component<BannerPresenterProps>}
 */
export default function BannerPresenter(props) {
  const {
    type,
    label,
    labelledBy,
    actions,
    dismissButtonTitle,
    onDismiss,
    isWrappingContent,
    refContent,
    refNotification,
    refInteractionsWrapper,
    children: message
  } = props;

  const hasActions = React.Children.count(actions) > 0;

  return (
    <Wrapper
      type={type}
      hasActions={hasActions}
      isWrappingContent={isWrappingContent}
      label={label}
      labelledBy={labelledBy}
    >
      <IconBackground type={type} />
      <Content innerRef={refContent}>
        <Notification innerRef={refNotification}>
          <Message>{message}</Message>
        </Notification>
        {hasActions ? (
          <InteractionsWrapper innerRef={refInteractionsWrapper}>
            {actions}
          </InteractionsWrapper>
        ) : null}
      </Content>
      <DismissButton title={dismissButtonTitle} onClick={onDismiss} />
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
  /** The label of the message displayed */
  label: PropTypes.string,
  /** The ID used for ARIA labeling */
  labelledBy: PropTypes.string,
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
  children: PropTypes.node
};
