import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

const RichText = props => (
  <ThemeContext.Consumer>
    {({ resolvedRoles }) => {
      const { children, dangerouslySetInnerHTML, ...otherProps } = props;
      const { className } = otherProps;
      const styles = stylesheet(props, resolvedRoles);
      return children ? (
        <div className={cx(css(styles.richText), className)}>{children}</div>
      ) : (
        <div
          className={cx(css(styles.richText), className)}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML} // eslint-disable-line react/no-danger
        />
      );
    }}
  </ThemeContext.Consumer>
);

RichText.displayName = "RichText";

RichText.propTypes = {
  /**
   * React-generated markup to style with HIG typography rules
   */
  children: PropTypes.node,
  /**
   * HTML string to be rendered and styled with HIG typography rules
   */
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string
  }),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func
};

export default RichText;
