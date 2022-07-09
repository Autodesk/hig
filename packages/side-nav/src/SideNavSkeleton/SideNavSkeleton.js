import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import SkeletonItem from "@hig/skeleton-item";
import stylesheet from "./stylesheet";

const skeletonItemStyles = Object.freeze([
  {
    maxWidth: "180px",
    marginBottom: "48px",
  },
  {
    maxWidth: "180px",
    marginBottom: "24px",
  },
  {
    maxWidth: "180px",
    marginBottom: "24px",
  },
  {
    maxWidth: "124px",
    marginBottom: "48px",
  },
  {
    maxWidth: "180px",
    marginBottom: "24px",
  },
  {
    maxWidth: "180px",
    marginBottom: "24px",
  },
  {
    maxWidth: "180px",
    marginBottom: "24px",
  },
  {
    maxWidth: "180px",
    marginBottom: "24px",
  },
  {
    maxWidth: "124px",
  },
]);

export default class SideNavSkeleton extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
  };

  render() {
    const { stylesheet: customStylesheet, ...otherProps } = this.props;
    const { className } = otherProps;

    return (
      <div
        className={cx([
          css(stylesheet({ stylesheet: customStylesheet, ...this.props })),
          className,
        ])}
      >
        {skeletonItemStyles.map((style, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkeletonItem key={index} {...style} />
        ))}
      </div>
    );
  }
}
