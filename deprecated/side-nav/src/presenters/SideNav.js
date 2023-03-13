import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { Back24, Back16 } from "@hig/icons";
import Typography from "@hig/typography";
import TextLink from "@hig/text-link";
import IconButton from "@hig/icon-button";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default class SideNav extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    /** Additional content to include below navigation items */
    children: PropTypes.node,
    /** Copyright text to include  */
    copyright: PropTypes.node,
    /** 0 or more SideNav Groups */
    groups: PropTypes.node,
    /** Subtitle at the top of the SideNav */
    headerLabel: PropTypes.string,
    /** An href for the SideNav Subtitle */
    headerLink: PropTypes.string,
    /** Called when headerLink is clicked */
    onClickHeader: PropTypes.func,
    /** 0 or more SideNav Links */
    links: PropTypes.node,
    /** Called when minimize button is clicked */
    onMinimize: PropTypes.func,
    /** A SideNav Search element */
    search: PropTypes.node,
    /** Renders a button to minimize the SideNav */
    showMinimizeButton: PropTypes.bool,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
    /** Title at the top of the SideNav */
    superHeaderLabel: PropTypes.string,
    /** An href for the SideNav Title */
    superHeaderLink: PropTypes.string,
    /** Called when superHeaderLink is clicked */
    onClickSuperHeader: PropTypes.func,
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    onMinimize: () => {},
    showMinimizeButton: false,
  };

  // eslint-disable-next-line class-methods-use-this
  _renderHeader = (link, label, styles, onClick, className) => {
    if (!label) {
      return null;
    }

    if (link || onClick) {
      return (
        <TextLink
          link={link}
          style={styles}
          onClick={onClick}
          className={className}
        >
          {label}
        </TextLink>
      );
    }

    return (
      <Typography style={styles} className={className}>
        {label}
      </Typography>
    );
  };

  _renderHeaders = (resolvedRoles) => {
    const {
      headerLabel,
      headerLink,
      onClickHeader,
      stylesheet: customStylesheet,
      superHeaderLabel,
      superHeaderLink,
      onClickSuperHeader,
      ...otherProps
    } = this.props;
    const { className } = otherProps;

    if (!(superHeaderLabel || headerLabel)) {
      return null;
    }

    return (
      <div>
        {this._renderHeader(
          superHeaderLink,
          superHeaderLabel,
          stylesheet(
            {
              isLink: superHeaderLink,
              stylesheet: customStylesheet,
              ...this.props,
            },
            resolvedRoles
          ).headers.super,
          onClickSuperHeader,
          createCustomClassNames(className, "headers__super")
        )}
        {this._renderHeader(
          headerLink,
          headerLabel,
          stylesheet(
            { isLink: headerLink, stylesheet: customStylesheet, ...this.props },
            resolvedRoles
          ).headers.normal,
          onClickHeader,
          createCustomClassNames(className, "headers__normal")
        )}
      </div>
    );
  };

  render() {
    const {
      children,
      copyright,
      groups,
      links,
      onMinimize,
      search,
      showMinimizeButton,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const overflowClassName = createCustomClassNames(className, "overflow");
    const slotClassName = createCustomClassNames(className, "slot");
    const linksClassName = createCustomClassNames(className, "links");
    const copyrightClassName = createCustomClassNames(className, "copyright");

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            { stylesheet: customStylesheet, ...otherProps },
            resolvedRoles
          );

          return (
            <nav className={cx([css(styles.sideNav), className])}>
              <div className={cx([css(styles.overflow), overflowClassName])}>
                {this._renderHeaders(resolvedRoles)}

                {groups && <div>{groups}</div>}

                {children && (
                  <div className={cx([css(styles.slot), slotClassName])}>
                    {children}
                  </div>
                )}

                {links && (
                  <div className={cx([css(styles.links), linksClassName])}>
                    {links}
                  </div>
                )}

                {copyright && (
                  <div
                    className={cx([css(styles.copyright), copyrightClassName])}
                  >
                    {copyright}
                  </div>
                )}
              </div>

              {search}

              {showMinimizeButton && (
                <div className={css(styles.minimize)}>
                  <IconButton
                    icon={
                      metadata.densityId === "medium-density" ? (
                        <Back24 />
                      ) : (
                        <Back16 />
                      )
                    }
                    title="Minimize"
                    aria-label="Minimize"
                    onClick={onMinimize}
                  />
                </div>
              )}
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
