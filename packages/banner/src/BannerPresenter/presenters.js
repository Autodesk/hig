/* eslint-disable react/prop-types */

import React from "react";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import IconButton from "@hig/icon-button";
import { Close24 } from "@hig/icons";
import Typography from "@hig/typography";
import { types } from "../types";
import stylesheet from "./stylesheet";

/**
 * @typedef {Object} StyledProps
 * @property {Function} [innerRef]
 * @property {any} [children]
 */

/**
 * @typedef {Object} WrapperProps
 * @property {string} type
 * @property {boolean} hasActions
 * @property {boolean} isWrappingContent
 * @property {any} children
 */

/**
 * @param {WrapperProps} props
 * @returns {JSX.Element}
 */
export function Wrapper(props) {
  const { type, children } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div className={css(stylesheet(props, resolvedRoles).bannerBackground)}>
          <div
            role="alert"
            aria-live={type === types.URGENT ? "assertive" : "polite"}
            className={css(stylesheet(props, resolvedRoles).banner)}
          >
            {children}
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

/**
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function Content({ isWrappingContent, innerRef, children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={css(
            stylesheet({ isWrappingContent }, resolvedRoles).content
          )}
          ref={innerRef}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

/**
 * @typedef {Object} DismissButtonProps
 * @property {Function} [onClick]
 */

/**
 * @param {DismissButtonProps} props
 * @returns {JSX.Element}
 */
export function DismissButton({ onClick }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const closeIcon =
          metadata.densityId === "medium-density" ? <CloseMUI /> : <CloseSUI />;
        return (
          <div className={css(stylesheet({}, resolvedRoles).dismissButton)}>
            <IconButton icon={closeIcon} onClick={onClick} title="Close" />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

/**
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function Notification({ innerRef, children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={css(stylesheet({}, resolvedRoles).message)}
          ref={innerRef}
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
export function Message({ children }) {
  if (typeof children === "string") {
    return <Typography variant="body">{children}</Typography>;
  }

  return children;
}

/**
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function InteractionsWrapper({ innerRef, children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={css(stylesheet({}, resolvedRoles).interactionsWrapper)}
          ref={innerRef}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
