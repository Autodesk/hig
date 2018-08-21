import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import RichText from "@hig/rich-text";
import {
  UNMOUNTED,
  EXITED,
  ENTERING,
  ENTERED,
  EXITING
} from "react-transition-group/Transition";

import { types, AVAILABLE_TYPES } from "../types";
import DismissButtonPresenter from "./DismissButtonPresenter";
import "./NotificationPresenter.scss";

const modifiersByType = {
  [types.ERROR]: "hig__notification-v1__content--error",
  [types.PRIMARY]: "hig__notification-v1__content--primary",
  [types.SUCCESS]: "hig__notification-v1__content--success",
  [types.WARNING]: "hig__notification-v1__content--warning"
};

const modifiersByTransitionStatus = {
  [EXITED]: "hig__notification-v1--exited",
  [EXITING]: "hig__notification-v1--exiting"
};

export default function NotificationPresenter(props) {
  const {
    children,
    dismissButtonTitle,
    featured,
    height,
    image,
    innerRef,
    onDismissButtonClick,
    showDismissButton,
    timestamp,
    transitionStatus,
    type,
    unread
  } = props;

  const notificationClasses = cx(
    "hig__notification-v1",
    modifiersByTransitionStatus[transitionStatus]
  );

  const contentClasses = cx(
    "hig__notification-v1__content",
    modifiersByType[type],
    {
      "hig__notification-v1__content--featured": featured,
      "hig__notification-v1__content--unread": unread
    }
  );

  return (
    <div
      className={notificationClasses}
      ref={innerRef}
      role="listitem"
      style={{ height }}
    >
      <div className={contentClasses}>
        {image ? (
          <div className="hig__notification-v1__content-image">{image}</div>
        ) : null}
        <div className="hig__notification-v1__content-text">
          <RichText size="small">{children}</RichText>
          {timestamp}
          {showDismissButton ? (
            <DismissButtonPresenter
              onClick={onDismissButtonClick}
              title={dismissButtonTitle}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

NotificationPresenter.propTypes = {
  children: PropTypes.node,
  dismissButtonTitle: PropTypes.string,
  featured: PropTypes.bool,
  height: PropTypes.string,
  image: PropTypes.node,
  innerRef: PropTypes.func,
  onDismissButtonClick: PropTypes.func,
  showDismissButton: PropTypes.bool,
  timestamp: PropTypes.node,
  transitionStatus: PropTypes.oneOf([
    UNMOUNTED,
    EXITED,
    ENTERING,
    ENTERED,
    EXITING
  ]),
  type: PropTypes.oneOf(AVAILABLE_TYPES),
  unread: PropTypes.bool
};
