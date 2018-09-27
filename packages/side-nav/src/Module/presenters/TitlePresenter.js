import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { ThemeContext } from "@hig/themes";
import { memoizeCreateButtonEventHandlers } from "@hig/utils";

import { targets, AVAILABLE_TARGETS } from "../../targets";
import ExternalLinkIcon from "../../presenters/ExternalLinkIcon";

function getClassName({ active, activeChildren, themeClass }) {
  return cx(themeClass, "hig__side-nav__module__link", {
    "hig__side-nav__module__link--active": active,
    "hig__side-nav__module__link--active-children": activeChildren
  });
}

export default class TitlePresenter extends Component {
  static propTypes = {
    active: PropTypes.bool,
    activeChildren: PropTypes.bool,
    icon: PropTypes.node,
    link: PropTypes.string,
    onClick: PropTypes.func,
    tabIndex: PropTypes.string.isRequired,
    target: PropTypes.oneOf(AVAILABLE_TARGETS),
    title: PropTypes.string.isRequired
  };

  createEventHandlers = memoizeCreateButtonEventHandlers();

  render() {
    const {
      active,
      activeChildren,
      icon,
      link,
      onClick,
      tabIndex,
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
            className={getClassName({ active, activeChildren, themeClass })}
            href={link}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role={role}
            tabIndex={tabIndex}
            target={wrapperTarget}
          >
            <div className="hig__side-nav__module__link__icon">{icon}</div>
            <div className="hig__side-nav__module__link__title">{title}</div>
            {isExternalLink ? (
              <div className="hig__side-nav__module__link__external-link-icon">
                <ExternalLinkIcon />
              </div>
            ) : null}
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}
