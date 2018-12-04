import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { sizes as iconSizes } from "@hig/icons";
import { ThemeContext } from "@hig/themes";
import { memoizeCreateButtonEventHandlers } from "@hig/utils";

import { AVAILABLE_TARGETS, targets } from "../targets";
import ExternalLinkIcon from "../presenters/ExternalLinkIcon";
import "./submodule.scss";

function getClassName({ active, themeClass }) {
  return cx(themeClass, "hig__side-nav__submodule", {
    "hig__side-nav__submodule--active": active
  });
}

export default class Submodule extends Component {
  static propTypes = {
    /** Indicates this submodule is currently active */
    active: PropTypes.bool,
    /** URL to navigate to when clicking this submodule */
    link: PropTypes.string,
    /** Called when clicking on the submodule */
    onClick: PropTypes.func,
    /** Called when link is focused  */
    onFocus: PropTypes.func,
    /** Called when hovering over the submodule */
    onMouseOver: PropTypes.func,
    /** Anchor target. Applicable only if link is provided */
    target: PropTypes.oneOf(AVAILABLE_TARGETS),
    /** Text to render */
    title: PropTypes.string
  };

  createEventHandlers = memoizeCreateButtonEventHandlers();

  render() {
    const {
      active,
      link,
      onClick,
      onFocus,
      onMouseOver,
      target,
      title
    } = this.props;
    const { handleClick, handleKeyDown } = this.createEventHandlers(onClick, {
      // Allow default on hyperlinks to trigger navigation
      preventDefault: !link
    });
    const Wrapper = link ? "a" : "div";
    const isExternalLink = link && target === targets.BLANK;
    const role = link ? undefined : "button";
    const wrapperTarget = link ? target : undefined;

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <Wrapper
            className={getClassName({ active, themeClass })}
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
              <ExternalLinkIcon size={iconSizes.PX_16} />
            ) : null}
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}
