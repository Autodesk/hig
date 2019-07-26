import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { Back24, Back16 } from "@hig/icons";
import Typography from "@hig/typography";
import TextLink from "@hig/text-link";
import IconButton from "@hig/icon-button";

import stylesheet from "./stylesheet";

export default class SideNav extends Component {
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
    /** Title at the top of the SideNav */
    superHeaderLabel: PropTypes.string,
    /** An href for the SideNav Title */
    superHeaderLink: PropTypes.string,
    /** Called when superHeaderLink is clicked */
    onClickSuperHeader: PropTypes.func
  };

  static defaultProps = {
    onMinimize: () => {},
    showMinimizeButton: false
  };

  _renderHeader = (link, label, styles, onClick) => {
    if (!label) {
      return null;
    }

    if (link || onClick) {
      return (
        <TextLink link={link} style={styles} onClick={onClick}>
          {label}
        </TextLink>
      );
    }

    return <Typography style={styles}>{label}</Typography>;
  };

  _renderHeaders = resolvedRoles => {
    const {
      headerLabel,
      headerLink,
      onClickHeader,
      superHeaderLabel,
      superHeaderLink,
      onClickSuperHeader
    } = this.props;

    if (!(superHeaderLabel || headerLabel)) {
      return null;
    }

    return (
      <div>
        {this._renderHeader(
          superHeaderLink,
          superHeaderLabel,
          stylesheet({ isLink: superHeaderLink, ...this.props }, resolvedRoles)
            .headers.super,
          onClickSuperHeader
        )}
        {this._renderHeader(
          headerLink,
          headerLabel,
          stylesheet({ isLink: headerLink, ...this.props }, resolvedRoles)
            .headers.normal,
          onClickHeader
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
      showMinimizeButton
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(this.props, resolvedRoles);

          return (
            <nav className={css(styles.sideNav)}>
              <div className={css(styles.overflow)}>
                {this._renderHeaders(resolvedRoles)}

                {groups && <div>{groups}</div>}

                {children && <div className={css(styles.slot)}>{children}</div>}

                {links && <div className={css(styles.links)}>{links}</div>}

                {copyright && (
                  <div className={css(styles.copyright)}>{copyright}</div>
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
