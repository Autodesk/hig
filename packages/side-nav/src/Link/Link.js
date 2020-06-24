import React, { Component } from "react";
import PropTypes from "prop-types";
import { sizes as iconSizes } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";
import { createCustomClassNames } from "@hig/utils";
import { css, cx } from "emotion";

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
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
    /** Corresponds to the anchor tag's target */
    target: PropTypes.oneOf(AVAILABLE_TARGETS),
    /** Link text */
    title: PropTypes.string
  };

  static defaultProps = {
    onClick: () => {},
    onMouseOver: () => {}
  };

  _renderExternalLinkIcon = (styles, size) =>
    this.props.target === "_blank" && (
      <div className={css(styles.externalIcon)}>
        <ExternalLinkIcon size={size} />
      </div>
    );

  render() {
    const {
      link,
      title,
      onClick,
      onFocus,
      onMouseOver,
      stylesheet: customStylesheet,
      target,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const typographyClassName = createCustomClassNames(className, "typography");
    const Wrapper = link ? "a" : "div";

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              stylesheet: customStylesheet,
              ...this.props
            },
            resolvedRoles
          );
          const size =
            metadata.densityId === "medium-density"
              ? iconSizes.PX_24
              : iconSizes.PX_16;
          return (
            <Wrapper
              className={cx([css(styles.wrapper), className])}
              href={link}
              target={target}
              onClick={onClick}
              onFocus={onFocus}
              onMouseOver={onMouseOver}
            >
              <Typography
                elementType="span"
                style={styles.typography}
                className={typographyClassName}
              >
                {title}
              </Typography>
              {this._renderExternalLinkIcon(styles, size)}
            </Wrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
