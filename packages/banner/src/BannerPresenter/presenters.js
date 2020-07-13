/* eslint-disable react/prop-types */

import React from "react";
import { cx, css } from "emotion";
import ThemeContext from "@hig/theme-context";
import IconButton from "@hig/icon-button";
import { CloseSUI, CloseMUI } from "@hig/icons";
import Typography from "@hig/typography";
import { types } from "../types";
import stylesheet from "./stylesheet";
import { createCustomClassNames } from "@hig/utils";
import {
  Complete16,
  Complete24,
  Error16,
  Error24,
  Info16,
  Info24,
  Alert16,
  Alert24
} from "@hig/icons"

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
  const { type, children, ...otherProps } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div className={css(stylesheet(props, resolvedRoles).bannerBackground)} >
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
export function Content({ isWrappingContent, innerRef, children, stylesheet:customStylesheet }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={css(
            stylesheet({ isWrappingContent, stylesheet:customStylesheet }, resolvedRoles).content
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
export function DismissButton({ onClick, stylesheet:customStylesheet }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const closeIcon =
          metadata.densityId === "medium-density" ? <CloseMUI /> : <CloseSUI />;
        return (
          <div className={css(stylesheet({stylesheet:customStylesheet}, resolvedRoles).dismissButton)} >
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
export function Notification({ innerRef, children, stylesheet: customStylesheet}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={css(stylesheet({stylesheet: customStylesheet}, resolvedRoles).message)}
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
export function InteractionsWrapper({ innerRef, children, stylesheet:customStylesheet}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={css(stylesheet({stylesheet:customStylesheet}, resolvedRoles).interactionsWrapper)}
          ref={innerRef}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

/** @type {Object.<string, string>} */
const iconNamesByType = {
  [types.PRIMARY]: {
    high: Info16,
    medium: Info24
  },
  [types.COMPLETE]: {
    high: Complete16,
    medium: Complete24
  },
  [types.WARNING]: {
    high: Alert16,
    medium: Alert24
  },
  [types.URGENT]: {
    high: Error16,
    medium: Error24
  }
};

/**
 * @property {string} type
 */

export function IconBackground({ type, stylesheet: customStylesheet }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const density =
          metadata.densityId === "medium-density" ? "medium" : "high";
        const Icon = iconNamesByType[type][density];
        return (
          <figure className={css(stylesheet({ type, stylesheet: customStylesheet }, resolvedRoles).iconBackground)}>
            <Icon />
          </figure>
        );
      }}
    </ThemeContext.Consumer>
  );
}
