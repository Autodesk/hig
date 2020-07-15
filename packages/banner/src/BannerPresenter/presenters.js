/* eslint-disable react/prop-types */

import React from "react";
import ThemeContext from "@hig/theme-context";
import IconButton from "@hig/icon-button";
import Typography from "@hig/typography";
import { cx, css } from "emotion";
import { createCustomClassNames } from "@hig/utils";
import {
  CloseSUI,
  CloseMUI,
  Complete16,
  Complete24,
  Error16,
  Error24,
  Info16,
  Info24,
  Alert16,
  Alert24
} from "@hig/icons";

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
  const { type, children, ...otherProps } = props;
  const { className } = otherProps;
  const bannerClassName = createCustomClassNames(className, "banner");
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={cx(
            css(stylesheet(props, resolvedRoles).bannerBackground),
            className
          )}
        >
          <div
            role="alert"
            aria-live={type === types.URGENT ? "assertive" : "polite"}
            className={cx(
              css(stylesheet(props, resolvedRoles).banner),
              bannerClassName
            )}
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
export function Content({
  isWrappingContent,
  innerRef,
  children,
  stylesheet: customStylesheet,
  className
}) {
  const contentClassName = createCustomClassNames(className, "content");
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={cx(
            css(
              stylesheet(
                { isWrappingContent, stylesheet: customStylesheet },
                resolvedRoles
              ).content
            ),
            contentClassName
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
export function DismissButton({
  onClick,
  stylesheet: customStylesheet,
  className
}) {
  const dismissClassName = createCustomClassNames(className, "dismiss-button");
  const dismissIconClassName = createCustomClassNames(
    className,
    "dismiss-button-icon"
  );
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const closeIcon =
          metadata.densityId === "medium-density" ? <CloseMUI /> : <CloseSUI />;
        return (
          <div
            className={cx(
              css(
                stylesheet({ stylesheet: customStylesheet }, resolvedRoles)
                  .dismissButton
              ),
              dismissClassName
            )}
          >
            <IconButton
              className={dismissIconClassName}
              icon={closeIcon}
              onClick={onClick}
              title="Close"
            />
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
export function Notification({
  innerRef,
  children,
  stylesheet: customStylesheet,
  className
}) {
  const notifClassName = createCustomClassNames(className, "message");
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={cx(
            css(
              stylesheet({ stylesheet: customStylesheet }, resolvedRoles)
                .message
            ),
            notifClassName
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
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function Message({ children, className }) {
  const notifClassName = createCustomClassNames(className, "message-text");
  if (typeof children === "string") {
    return (
      <Typography className={notifClassName} variant="body">
        {children}
      </Typography>
    );
  }

  return children;
}

/**
 * @param {StyledProps} props
 * @returns {JSX.Element}
 */
export function InteractionsWrapper({
  innerRef,
  children,
  stylesheet: customStylesheet,
  className
}) {
  const interactionClassName = createCustomClassNames(
    className,
    "interactions-wrapper"
  );
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          className={cx(
            css(
              stylesheet({ stylesheet: customStylesheet }, resolvedRoles)
                .interactionsWrapper
            ),
            interactionClassName
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
 * @property {string} type
 */

export function IconBackground({
  type,
  stylesheet: customStylesheet,
  className
}) {
  const iconClassName = createCustomClassNames(className, "icon-background");
  const iconImageClassName = createCustomClassNames(
    className,
    "icon-background-image"
  );

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
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const density =
          metadata.densityId === "medium-density" ? "medium" : "high";
        const Icon = iconNamesByType[type][density];
        return (
          <figure
            className={cx(
              css(
                stylesheet(
                  { type, stylesheet: customStylesheet },
                  resolvedRoles
                ).iconBackground
              ),
              iconClassName
            )}
          >
            <Icon className={iconImageClassName} />
          </figure>
        );
      }}
    </ThemeContext.Consumer>
  );
}
