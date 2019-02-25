import React, { Component } from "react";
import { css } from "emotion";
import SkeletonItem from "@hig/skeleton-item";
import stylesheet from "./stylesheet";

const skeletonItemStyles = Object.freeze([
  {
    maxWidth: "180px",
    marginBottom: "48px"
  },
  {
    maxWidth: "180px",
    marginBottom: "24px"
  },
  {
    maxWidth: "180px",
    marginBottom: "24px"
  },
  {
    maxWidth: "124px",
    marginBottom: "48px"
  },
  {
    maxWidth: "180px",
    marginBottom: "24px"
  },
  {
    maxWidth: "180px",
    marginBottom: "24px"
  },
  {
    maxWidth: "180px",
    marginBottom: "24px"
  },
  {
    maxWidth: "180px",
    marginBottom: "24px"
  },
  {
    maxWidth: "124px"
  }
]);

export default class SideNavSkeleton extends Component {
  render() {
    return (
      <div className={css(stylesheet())}>
        {skeletonItemStyles.map((style, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkeletonItem key={index} {...style} />
        ))}
      </div>
    );
  }
}
