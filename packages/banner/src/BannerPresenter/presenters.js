/* eslint-disable react/prop-types */

import React from "react";
import cx from "classnames";

import { CloseNotification24 } from "@hig/icons";
import IconButton, { types as iconButtonTypes } from "@hig/icon-button";
import { Text } from "@hig/typography";
import { ThemeContext } from "@hig/themes";

import "./banner-presenter.scss";
import { types } from "../types";
import classNames from "../presenters/classNames";

/** @todo Reference from constant on `Text` component */
const TEXT_COLOR = "hig-cool-gray-70";

/** @type {Object.<string, string>} */
const wrapperModifiersByType = {
  [types.PRIMARY]: classNames.wrapperPrimary,
  [types.COMPLETE]: classNames.wrapperComplete,
  [types.WARNING]: classNames.wrapperWarning,
  [types.URGENT]: classNames.wrapperUrgent
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

  function classes(themeClass) {
    return cx(
      classNames.wrapper,
      wrapperModifiersByType[type],
      hasActions ? classNames.wrapperInteractive : undefined,
      isWrappingContent ? classNames.wrapperWrapContent : undefined,
      themeClass
    );
  }

  return (
    <ThemeContext.Consumer>
      {({ themeClass }) => (
        <div
          role="alert"
          aria-label={label}
          aria-labelledby={labelledBy}
          aria-live={type === types.URGENT ? "assertive" : "polite"}
          className={classes(themeClass)}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
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
        icon={<CloseNotification24 />}
        title={title}
        aria-label={title}
        onClick={onClick}
      />
    </div>
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
