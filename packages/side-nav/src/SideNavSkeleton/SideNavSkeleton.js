import React from "react";
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

const SideNavSkeleton = (props) => {
  const { stylesheet: customStylesheet, ...otherProps } = props;
  const { className } = otherProps;

  return (
    <div
      className={cx([
        css(stylesheet({ stylesheet: customStylesheet, ...props })),
        className,
      ])}
    >
      {skeletonItemStyles.map((style, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SkeletonItem key={index} {...style} />
      ))}
    </div>
  );
};

SideNavSkeleton.displayName = "SideNavSkeleton";

SideNavSkeleton.propTypes = {
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};

export default SideNavSkeleton;
