import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import { availableTargets } from "./targets";
import stylesheet from "./stylesheet";

export default class TextLink extends Component {
  static propTypes = {
    /** Text content of the link */
    children: PropTypes.node,
    /** The href to link to. Note that this was previously 'href' in the version distributed with hig-react. */
    link: PropTypes.string,
    /** Called when link is clicked */
    onClick: PropTypes.func,
    /** Specify the anchor tag's target */
    target: PropTypes.oneOf(availableTargets),
  };

  render() {
    const { children, link, target, onClick, ...otherProps } = this.props;
    const Element = link ? "a" : "span";
    const linkProps = link
      ? {
          href: link,
          target
        }
      : { role: "button" };

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          return <Element
            {...linkProps}
            className={css(stylesheet(this.props, resolvedRoles))}
            onClick={onClick}
            {...otherProps}
          >
            {children}
          </Element>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
