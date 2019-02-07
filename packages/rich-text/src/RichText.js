import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
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
          const styles = stylesheet(resolvedRoles);
          return this.props.children ? (
            <div className={css(styles.richText)}>{this.props.children}</div>
          ) : (
            <div
              className={css(styles.richText)}
              dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML} // eslint-disable-line react/no-danger
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
