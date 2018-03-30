/* eslint-disable react/prop-types */

import React from "react";
import cx from "classnames";

import "./banner-presenter.scss";

import { placements } from "../placements";
import { types } from "../types";

import BasicIcon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Text from "../../Typography/Text";

/** @todo Reference from constant on `Text` component */
const TEXT_COLOR = "hig-cool-gray-70";

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
  wrapperUrgent: "hig__banner--urgent",
  wrapperInteractive: "hig__banner--interactive",
  wrapperPrimary: "hig__banner--primary",
  wrapperComplete: "hig__banner--complete",
  wrapperTop: "hig__banner--top",
  wrapperWarning: "hig__banner--warning",
  wrapperWrapContent: "hig__banner--wrap-content"
});

/** @type {Object.<string, string>} */
const wrapperModifiersByPlacement = {
  [placements.BOTTOM]: classNames.wrapperBottom,
  [placements.TOP]: classNames.wrapperTop
};

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
 * @property {string} placement
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
    placement,
    hasActions,
    labelledBy,
    isWrappingContent,
    children
  } = props;

  const classes = cx(
    classNames.wrapper,
    wrapperModifiersByType[type],
    wrapperModifiersByPlacement[placement],
    hasActions ? classNames.wrapperInteractive : undefined,
    isWrappingContent ? classNames.wrapperWrapContent : undefined
  );

  return (
    <div role="alert" aria-labelledby={labelledBy} className={classes}>
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
 * @typedef {Object} LabelProps
 * @property {string} [id]
 * @property {any} [children]
 */

/**
 * @param {LabelProps} props
 * @returns {JSX.Element}
 */
export function Label({ id, children }) {
  return <Text color={TEXT_COLOR} id={id}>{`${children}: `}</Text>;
}

/**
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function Message({ children }) {
  if (typeof children === "string") {
    return <Text color={TEXT_COLOR}>{children}</Text>;
  }

  if (typeof children === "function") {
    return children();
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
