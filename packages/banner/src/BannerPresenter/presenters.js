/* eslint-disable react/prop-types */

import React from "react";
import cx from "classnames";

import { default as BasicIcon, names as iconNames, sizes as iconSizes } from '@hig/icon';
import IconButton, { types as iconButtonTypes } from '@hig/icon-button';
import { Text } from '@hig/typography';

import "./banner-presenter.scss";
import { types } from "../types";

/** @todo Reference from constant on `Text` component */
const TEXT_COLOR = "hig-cool-gray-70";

/** @type {Object.<string, string>} */
const classNames = Object.freeze({
  action: "hig__banner__action",
  actionsWrapper: "hig__banner__action-wrapper",
  content: "hig__banner__content",
  dismissButton: "hig__banner__dismiss-button",
  iconBackground: "hig__banner__icon-background",
  interactionsWrapper: "hig__banner__interactions-wrapper",
  notification: "hig__banner__message",
  wrapper: "hig__banner",
  wrapperBottom: "hig__banner--bottom",
  wrapperUrgent: "hig__banner--urgent",
  wrapperInteractive: "hig__banner--interactive",
  wrapperPrimary: "hig__banner--primary",
  wrapperComplete: "hig__banner--complete",
  wrapperTop: "hig__banner--top",
  wrapperWarning: "hig__banner--warning",
  wrapperWrapContent: "hig__banner--wrap-content"
});

/** @type {Object.<string, string>} */
const wrapperModifiersByType = {
  [types.PRIMARY]: classNames.wrapperPrimary,
  [types.COMPLETE]: classNames.wrapperComplete,
  [types.WARNING]: classNames.wrapperWarning,
  [types.URGENT]: classNames.wrapperUrgent
};

/** @type {Object.<string, string>} */
const iconNamesByType = {
  [types.PRIMARY]: iconNames.INFO,
  [types.COMPLETE]: iconNames.COMPLETE,
  [types.WARNING]: iconNames.ISSUE,
  [types.URGENT]: iconNames.ERROR
};

/**
 * @typedef {Object} StyledProps
 * @property {Function} [innerRef]
 * @property {any} [children]
 */

/**
 * @typedef {Object} WrapperProps
 * @property {string} type
 * @property {boolean} hasActions
 * @property {string | undefined} [labelledBy]
 * @property {boolean} isWrappingContent
 * @property {any} children
 */

/**
 * @param {WrapperProps} props
 * @returns {JSX.Element}
 */
export function Wrapper(props) {
  const {
    type,
    hasActions,
    label,
    labelledBy,
    isWrappingContent,
    children
  } = props;

  const classes = cx(
    classNames.wrapper,
    wrapperModifiersByType[type],
    hasActions ? classNames.wrapperInteractive : undefined,
    isWrappingContent ? classNames.wrapperWrapContent : undefined
  );

  return (
    <div
      role="alert"
      aria-label={label}
      aria-labelledby={labelledBy}
      className={classes}
    >
      {children}
    </div>
  );
}

/**
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function Content({ innerRef, children }) {
  return (
    <div className={classNames.content} ref={innerRef}>
      {children}
    </div>
  );
}

/**
 * @typedef {Object} DismissButtonProps
 * @property {string} [title]
 * @property {Function} [onClick]
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
        name={iconNames.CLOSE_NOTIFICATION}
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
      <BasicIcon name={iconNamesByType[type]} size={iconSizes.MEDIUM} />
    </figure>
  );
}

/**
 * @param {StyledProps} props
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
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function Message({ children }) {
  if (typeof children === "string") {
    return <Text color={TEXT_COLOR}>{children}</Text>;
  }

  return children;
}

/**
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function InteractionsWrapper({ innerRef, children }) {
  return (
    <div className={classNames.interactionsWrapper} ref={innerRef}>
      {children}
    </div>
  );
}
