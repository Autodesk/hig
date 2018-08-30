import React from "react";
import PropTypes from "prop-types";

import Medium from "./progress-ring-m.svg";
import Small from "./progress-ring-s.svg";
import ExtraSmall from "./progress-ring-xs.svg";

import availableSizes from "../availableSizes";
import "./ProgressRingPresenter.scss";

const sizes = {
  xs: {
    svg: ExtraSmall,
    size: 20,
    scale: 1
  },
  s: {
    svg: Small,
    size: 28,
    scale: 1
  },
  m: {
    svg: Medium,
    size: 72,
    scale: 1
  },
  l: {
    svg: Medium,
    size: 144,
    scale: 2
  },
  xl: {
    svg: Medium,
    size: 242,
    scale: 3.35
  }
};

export default function ProgressRingPresenter(props) {
  const { innerRef, percentComplete, size } = props;
  const SVG = sizes[size].svg;

  return (
    <div
      className="hig__progress-ring"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={percentComplete}
      ref={innerRef}
    >
      <SVG width={sizes[size].size} height={sizes[size].size} />
    </div>
  );
}

ProgressRingPresenter.defaultProps = { size: "m" };

ProgressRingPresenter.propTypes = {
  innerRef: PropTypes.func,
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(availableSizes)
};
