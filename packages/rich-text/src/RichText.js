import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default class RichText extends Component {
  static propTypes = {
    /**
     * React-generated markup to style with HIG typography rules
     */
    children: PropTypes.node,
    /**
     * HTML string to be rendered and styled with HIG typography rules
     */
    dangerouslySetInnerHTML: PropTypes.shape({
      __html: PropTypes.string
    })
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const {
            children,
            dangerouslySetInnerHTML,
            ...otherProps
          } = this.props;
          const { className } = otherProps;
          const styles = stylesheet(resolvedRoles);
          return children ? (
            <div className={cx(css(styles.richText), className)}>
              {children}
            </div>
          ) : (
            <div
              className={cx(css(styles.richText), className)}
              dangerouslySetInnerHTML={dangerouslySetInnerHTML} // eslint-disable-line react/no-danger
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
