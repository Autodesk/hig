import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";

import { sizes as iconSizes } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import {
  createCustomClassNames,
  memoizeCreateButtonEventHandlers,
} from "@hig/utils";

import { targets, AVAILABLE_TARGETS } from "../../targets";
import ExternalLinkIcon from "../../presenters/ExternalLinkIcon";
import stylesheet from "./stylesheet";

export default class TitlePresenter extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    active: PropTypes.bool,
    /* eslint-disable react/no-unused-prop-types */
    activeChildren: PropTypes.bool,
    icon: PropTypes.node,
    link: PropTypes.string,
    onClick: PropTypes.func,
    stylesheet: PropTypes.func,
    tabIndex: PropTypes.string.isRequired,
    target: PropTypes.oneOf(AVAILABLE_TARGETS),
    title: PropTypes.string.isRequired,
  };

  createEventHandlers = memoizeCreateButtonEventHandlers();

  render() {
    const {
      active,
      icon,
      link,
      onClick,
      stylesheet: customStylesheet,
      tabIndex,
      target,
      title,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const { handleClick, handleKeyDown } = this.createEventHandlers(onClick, {
      // Allow default on hyperlinks to trigger navigation
      preventDefault: !link,
    });
    const Wrapper = link ? "a" : "div";
    const isExternalLink = link && target === targets.BLANK;
    const role = link ? undefined : "button";
    const wrapperTarget = link ? target : undefined;
    const iconClassName = createCustomClassNames(className, "icon");
    const titleClassName = createCustomClassNames(className, "title");
    const externalIconClassName = createCustomClassNames(
      className,
      "external_icon"
    );

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            { stylesheet: customStylesheet, ...this.props },
            resolvedRoles
          );

          return (
            <Wrapper
              href={link}
              className={cx([css(styles.wrapper), className])}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              role={role}
              tabIndex={tabIndex}
              target={wrapperTarget}
            >
              <div className={cx([css(styles.icon), iconClassName])}>
                {icon}
              </div>
              <div className={cx([css(styles.title), titleClassName])}>
                {title}
              </div>
              {isExternalLink && (
                <div
                  className={cx([
                    css(styles.externalIcon),
                    externalIconClassName,
                  ])}
                >
                  <ExternalLinkIcon
                    active={active}
                    size={
                      metadata.densityId === "medium-density"
                        ? iconSizes.PX_24
                        : iconSizes.PX_16
                    }
                  />
                </div>
              )}
            </Wrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
