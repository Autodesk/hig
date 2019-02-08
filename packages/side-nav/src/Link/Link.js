import React, { Component } from "react";
import PropTypes from "prop-types";
import { sizes as iconSizes } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";
import { css } from "emotion";

import { AVAILABLE_TARGETS } from "../targets";
import ExternalLinkIcon from "../presenters/ExternalLinkIcon";
import stylesheet from "./stylesheet";

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

  _renderExternalLinkIcon = styles =>
    this.props.target === "_blank" && (
      <div className={css(styles.externalIcon)}>
        <ExternalLinkIcon size={iconSizes.PX_24} />
      </div>
    );

  render() {
    const { title, link, onClick, onFocus, onMouseOver, target } = this.props;
    const Wrapper = link ? "a" : "div";

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(this.props, resolvedRoles);
          return (
            <Wrapper
              className={css(styles.wrapper)}
              href={link}
              target={target}
              onClick={onClick}
              onFocus={onFocus}
              onMouseOver={onMouseOver}
            >
              <Typography elementType="span" style={styles.typography}>
                {title}
              </Typography>
              {this._renderExternalLinkIcon(styles)}
            </Wrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
