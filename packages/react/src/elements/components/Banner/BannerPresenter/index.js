import React from "react";
import PropTypes from "prop-types";

import { types, AVAILABLE_TYPES } from "../types";
import { placements, AVAILABLE_PLACEMENTS } from "../placements";

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
    placement,
    label,
    message,
    dismissButtonTitle,
    onDismiss,
    labelId,
    isWrappingContent,
    refContent,
    refNotification,
    refInteractionsWrapper,
    children
  } = props;

  const hasLabel = !!label;
  const hasActions = React.Children.count(children) > 0;
  const wrapperLabelledBy = hasLabel ? labelId : undefined;

  return (
    <Wrapper
      type={type}
      placement={placement}
      hasActions={hasActions}
      isWrappingContent={isWrappingContent}
      labelledBy={wrapperLabelledBy}
    >
      <Icon type={type} />
      <Content innerRef={refContent}>
        <Notification innerRef={refNotification}>
          {hasLabel ? <Label id={labelId}>{label}</Label> : null}
          <Message>{message}</Message>
        </Notification>
        {hasActions ? (
          <InteractionsWrapper innerRef={refInteractionsWrapper}>
            {children}
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
  placement: placements.STANDARD,
  message: "Message",
  dismissButtonTitle: "Dismiss",
  isWrappingContent: false
};

BannerPresenter.propTypes = {
  /** Indicates the style of banner */
  type: PropTypes.oneOf(AVAILABLE_TYPES),
  /** Determines the intended placement of banner */
  placement: PropTypes.oneOf(AVAILABLE_PLACEMENTS),
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
  /** Determines whether the banner content wraps */
  isWrappingContent: PropTypes.bool,
  /** References content element */
  refContent: PropTypes.func,
  /** References notification element */
  refNotification: PropTypes.func,
  /** References interactions wrapper element */
  refInteractionsWrapper: PropTypes.func,
  /** Banner actions */
  children: PropTypes.node
};
