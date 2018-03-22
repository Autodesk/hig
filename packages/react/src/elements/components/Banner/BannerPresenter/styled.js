/* eslint-disable react/prop-types */

import React from "react";
import cx from "classnames";
import "./styles.scss";

import placements from "../placements";
import types from "../types";

import BasicIcon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Text from "../../Typography/Text";

const { types: iconButtonTypes } = IconButton;
const { names: iconNames, sizes: iconSizes } = BasicIcon;

/** @type {Object.<string, string>} */
const classNames = Object.freeze({
  action: "hig__banner__action",
  actionsWrapper: "hig__banner__action-wrapper",
  content: "hig__banner__content",
  dismissButton: "hig__banner__dismiss-button",
  iconBackground: "hig__banner__icon-background",
  interactionsWrapper: "hig__banner__interactions-wrapper",
  notification: "hig__banner__notification",
  wrapper: "hig__banner",
  wrapperBottom: "hig__banner--bottom",
  wrapperDanger: "hig__banner--danger",
  wrapperInteractive: "hig__banner--interactive",
  wrapperPrimary: "hig__banner--primary",
  wrapperSuccess: "hig__banner--success",
  wrapperTop: "hig__banner--top",
  wrapperWarning: "hig__banner--warning",
  wrapperWrapping: "hig__banner--wrapping"
});

/** @type {Object.<string, string>} */
const wrapperModifiersByPlacement = {
  [placements.BOTTOM]: classNames.wrapperBottom,
  [placements.TOP]: classNames.wrapperTop
};

/** @type {Object.<string, string>} */
const wrapperModifiersByStatus = {
  [types.PRIMARY]: classNames.wrapperPrimary,
  [types.SUCCESS]: classNames.wrapperSuccess,
  [types.WARNING]: classNames.wrapperWarning,
  [types.DANGER]: classNames.wrapperDanger
};

/** @type {Object.<string, string>} */
const iconNamesByStatus = {
  [types.PRIMARY]: iconNames.INFO,
  [types.SUCCESS]: iconNames.COMPLETE,
  [types.WARNING]: iconNames.ISSUE,
  [types.DANGER]: iconNames.ERROR
};

/**
 * @typedef {Object} WrapperProps
 * @property {string} type
 * @property {string} placement
 * @property {boolean} hasActions
 * @property {string} [labelledBy]
 * @property {boolean} isWrapping
 * @property {any} children
 */

/**
 * @param {WrapperProps} props
 * @returns {JSX.Element}
 */
export function Wrapper(props) {
  const {
    type,
    placement,
    hasActions,
    labelledBy,
    isWrapping,
    children
  } = props;

  const classes = cx(
    classNames.wrapper,
    wrapperModifiersByStatus[type],
    wrapperModifiersByPlacement[placement],
    hasActions ? classNames.wrapperInteractive : undefined,
    isWrapping ? classNames.wrapperWrapping : undefined
  );

  return (
    <div role="alert" aria-labelledby={labelledBy} className={classes}>
      {children}
    </div>
  );
}

/**
 * @typedef {Object} ContentProps
 * @property {any} children
 */

/**
 * @param {ContentProps} props
 * @returns {JSX.Element}
 */
export function Content({ children }) {
  return <div className={classNames.content}>{children}</div>;
}

/**
 * @typedef {Object} DismissButtonProps
 * @property {string} title
 * @property {Function} onClick
 */

/**
 * @param {DismissButtonProps} props
 * @returns {JSX.Element}
 */
export function DismissButton({ title, onClick }) {
  return (
    <div className={classNames.dismissButton}>
      <IconButton
        type={iconButtonTypes.TRANSPARENT}
        icon={iconNames.CLOSE_NOTIFICATION}
        title={title}
        aria-label={title}
        onClick={onClick}
      />
    </div>
  );
}

/**
 * @typedef {Object} IconProps
 * @property {string} type
 */

/**
 * @param {IconProps} props
 * @returns {JSX.Element}
 */
export function Icon({ type }) {
  return (
    <figure className={classNames.iconBackground}>
      <BasicIcon name={iconNamesByStatus[type]} size={iconSizes.MEDIUM} />
    </figure>
  );
}

/**
 * @typedef {Object} NotificationProps
 * @property {any} children
 */

/**
 * @param {NotificationProps} props
 * @returns {JSX.Element}
 */
export function Notification({ innerRef, children }) {
  return (
    <p className={classNames.notification} ref={innerRef}>
      {children}
    </p>
  );
}

/**
 * @typedef {Object} LabelProps
 * @property {any} children
 */

/**
 * @param {LabelProps} props
 * @returns {JSX.Element}
 */
export function Label({ id, children }) {
  return <Text id={id}>{`${children}: `}</Text>;
}

/**
 * @typedef {Object} MessageProps
 * @property {any} children
 */

/**
 * @param {MessageProps} props
 * @returns {JSX.Element}
 */
export function Message({ children }) {
  if (typeof children === "string") {
    return <Text>{children}</Text>;
  }

  if (typeof children === "function") {
    return children();
  }

  return children;
}

/**
 * @typedef {Object} InteractionsWrapperProps
 * @property {Function} innerRef
 * @property {any} children
 */

/**
 * @param {InteractionsWrapperProps} props
 * @returns {JSX.Element}
 */
export function InteractionsWrapper({ children, innerRef }) {
  return (
    <div className={classNames.interactionsWrapper} ref={innerRef}>
      {children}
    </div>
  );
}
