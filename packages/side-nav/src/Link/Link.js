import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { sizes as iconSizes } from "@hig/icons";
import { ThemeContext } from "@hig/themes";

import { AVAILABLE_TARGETS } from "../targets";
import ExternalLinkIcon from "../presenters/ExternalLinkIcon";
import "./link.scss";

/** @todo Consider extending TextLink */
export default class Link extends Component {
  static propTypes = {
    /** URL to navigate to when clicking this link */
    link: PropTypes.string,
    /** Called when link is clicked  */
    onClick: PropTypes.func,
    /** Called when link is focused  */
    onFocus: PropTypes.func,
    /** Called when hovering over the link */
    onMouseOver: PropTypes.func,
    /** Corresponds to the anchor tag's target */
    target: PropTypes.oneOf(AVAILABLE_TARGETS),
    /** Link text */
    title: PropTypes.string
  };

  static defaultProps = {
    onClick: () => {},
    onMouseOver: () => {}
  };

  _renderExternalLinkIcon = () =>
    this.props.target === "_blank" && (
      <ExternalLinkIcon size={iconSizes.PX_16} />
    );

  render() {
    const { title, link, onClick, onFocus, onMouseOver, target } = this.props;
    const classes = themeClass => cx(themeClass, "hig__side-nav__link");

    const Wrapper = link ? "a" : "div";

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <Wrapper
            className={classes(themeClass)}
            href={link}
            target={target}
            onClick={onClick}
            onFocus={onFocus}
            onMouseOver={onMouseOver}
          >
            {title}
            {this._renderExternalLinkIcon()}
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}
