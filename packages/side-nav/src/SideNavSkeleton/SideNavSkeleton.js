import React, { Component } from "react";
import PropTypes from "prop-types";
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
  static propTypes = {
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func
  };

  render() {
    const { stylesheet: customStylesheet } = this.props;

    return (
      <div
        className={css(
          stylesheet({ stylesheet: customStylesheet, ...this.props })
        )}
      >
        {skeletonItemStyles.map((style, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkeletonItem key={index} {...style} />
        ))}
      </div>
    );
  }
}
