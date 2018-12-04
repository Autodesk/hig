import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";
import { Back24 } from "@hig/icons";
import IconButton, { types as iconButtonTypes } from "@hig/icon-button";

import "./side-nav.scss";

export default class SideNav extends Component {
  static propTypes = {
    /** Additional content to include below navigation items */
    children: PropTypes.node,
    /** Copyright text to include  */
    copyright: PropTypes.string,
    /** 0 or more SideNav Groups */
    groups: PropTypes.node,
    /** Subtitle at the top of the SideNav */
    headerLabel: PropTypes.string,
    /** An href for the SideNav Subtitle */
    headerLink: PropTypes.string,
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
    superHeaderLink: PropTypes.string
  };

  static defaultProps = {
    onMinimize: () => {},
    showMinimizeButton: false
  };

  _renderHeaders = () => {
    const {
      headerLabel,
      headerLink,
      superHeaderLabel,
      superHeaderLink
    } = this.props;

    if (!(superHeaderLabel || headerLabel)) {
      return null;
    }

    const SuperHeaderWrapper = superHeaderLink ? "a" : "div";
    const HeaderWrapper = headerLink ? "a" : "div";

    return (
      <div className="hig__side-nav__headers">
        {superHeaderLabel && (
          <h3 className="hig__side-nav__super-header">
            <SuperHeaderWrapper
              className="hig__side-nav__super-header-link"
              href={superHeaderLink}
            >
              {superHeaderLabel}
            </SuperHeaderWrapper>
          </h3>
        )}
        {headerLabel && (
          <h4 className="hig__side-nav__header">
            <HeaderWrapper
              className="hig__side-nav__header-link"
              href={headerLink}
            >
              {headerLabel}
            </HeaderWrapper>
          </h4>
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

    const classes = themeClass => cx(themeClass, "hig__side-nav");

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <nav className={classes(themeClass)}>
            <div className="hig__side-nav__overflow">
              {this._renderHeaders()}

              {groups && <div className="hig__side-nav__groups">{groups}</div>}

              {children && (
                <div className="hig__side-nav__slot">{children}</div>
              )}

              {links && <div className="hig__side-nav__links">{links}</div>}

              {copyright && (
                <div className="hig__side-nav__copyright">{copyright}</div>
              )}
            </div>

            {search}

            {showMinimizeButton && (
              <div className="hig__side-nav__minimize">
                <IconButton
                  type={iconButtonTypes.TRANSPARENT}
                  icon={<Back24 />}
                  title="Minimize"
                  aria-label="Minimize"
                  onClick={onMinimize}
                />
              </div>
            )}
          </nav>
        )}
      </ThemeContext.Consumer>
    );
  }
}
