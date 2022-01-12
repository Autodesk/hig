import { css, cx } from "emotion";
import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./SkeletonItem.stylesheet";

const SkeletonItem = props => {
  const {
    height,
    marginBottom,
    maxWidth,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            maxWidth,
            marginBottom,
            height,
            stylesheet: customStylesheet
          },
          resolvedRoles
        );
        return <div className={cx(css(styles.skeletonItem), className)} />;
      }}
    </ThemeContext.Consumer>
  );
};

SkeletonItem.displayName = "SkeletonItem";

SkeletonItem.propTypes = {
  /** Sets height of the skeleton item */
  height: PropTypes.string,
  /** Sets max width of the skeleton item */
  maxWidth: PropTypes.string,
  /** Sets spacing below the skeleton item */
  marginBottom: PropTypes.string,
  /** Adds custom/overriding styles */
  stylesheet: PropTypes.func
};

export default SkeletonItem;
