import React, { Component } from "react";
import SkeletonItem from "@hig/skeleton-item";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import "./side-nav-skeleton.scss";

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
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div className={cx("hig__side-nav-skeleton", themeClass)}>
            {skeletonItemStyles.map((style, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SkeletonItem key={index} {...style} />
            ))}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
