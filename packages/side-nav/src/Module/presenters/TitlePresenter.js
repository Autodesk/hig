import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import ThemeContext from "@hig/theme-context";
import { memoizeCreateButtonEventHandlers } from "@hig/utils";

import { targets, AVAILABLE_TARGETS } from "../../targets";
import ExternalLinkIcon from "../../presenters/ExternalLinkIcon";
import stylesheet from "./stylesheet";

export default class TitlePresenter extends Component {
  static propTypes = {
    active: PropTypes.bool,
    /* eslint-disable react/no-unused-prop-types */
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
    const { active, icon, link, onClick, tabIndex, target, title } = this.props;
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
        {({ resolvedRoles }) => {
          const styles = stylesheet(this.props, resolvedRoles);

          return (
            <Wrapper
              href={link}
              className={css(styles.wrapper)}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              role={role}
              tabIndex={tabIndex}
              target={wrapperTarget}
            >
              <div className={css(styles.icon)}>{icon}</div>
              <div className={css(styles.title)}>{title}</div>
              {isExternalLink && (
                <div className={css(styles.externalIcon)}>
                  <ExternalLinkIcon active={active} />
                </div>
              )}
            </Wrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
