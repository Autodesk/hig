import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { sizes as iconSizes } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import {
  createCustomClassNames,
  memoizeCreateButtonEventHandlers
} from "@hig/utils";

import { AVAILABLE_TARGETS, targets } from "../targets";
import ExternalLinkIcon from "../presenters/ExternalLinkIcon";
import stylesheet from "./stylesheet";

export default class Submodule extends Component {
  static propTypes = {
    /** Indicates this submodule is currently active */
    /* eslint-disable react/no-unused-prop-types */
    active: PropTypes.bool,
    /** URL to navigate to when clicking this submodule */
    link: PropTypes.string,
    /** Called when clicking on the submodule */
    onClick: PropTypes.func,
    /** Called when link is focused  */
    onFocus: PropTypes.func,
    /** Called when hovering over the submodule */
    onMouseOver: PropTypes.func,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
    /** Anchor target. Applicable only if link is provided */
    target: PropTypes.oneOf(AVAILABLE_TARGETS),
    /** Text to render */
    title: PropTypes.string
  };

  createEventHandlers = memoizeCreateButtonEventHandlers();

  render() {
    const {
      link,
      onClick,
      onFocus,
      onMouseOver,
      stylesheet: customStylesheet,
      target,
      title,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const { handleClick, handleKeyDown } = this.createEventHandlers(onClick, {
      // Allow default on hyperlinks to trigger navigation
      preventDefault: !link
    });
    const Wrapper = link ? "a" : "div";
    const isExternalLink = link && target === targets.BLANK;
    const role = link ? undefined : "button";
    const wrapperTarget = link ? target : undefined;
    const externalIconClassName = createCustomClassNames(
      className,
      "external_icon"
    );

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => (
          <Wrapper
            className={cx([
              css(
                stylesheet(
                  { stylesheet: customStylesheet, ...this.props },
                  resolvedRoles
                ).wrapper
              ),
              className
            ])}
            href={link}
            onClick={handleClick}
            onFocus={onFocus}
            onKeyDown={handleKeyDown}
            onMouseOver={onMouseOver}
            role={role}
            tabIndex="0"
            target={wrapperTarget}
          >
            {title}
            {isExternalLink ? (
              <div
                className={cx([
                  css(stylesheet(this.props, resolvedRoles).externalIcon),
                  externalIconClassName
                ])}
              >
                <ExternalLinkIcon
                  size={
                    metadata.densityId === "medium-density"
                      ? iconSizes.PX_24
                      : iconSizes.PX_16
                  }
                />
              </div>
            ) : null}
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}
