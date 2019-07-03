import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import SVGPresenter from "./SVGPresenter";

import Small from "./smallSVG";
import Medium from "./mediumSVG";
import ExtraSmall from "./xsmallSVG";
import { availableSizes, availableSurfaces } from "../constants";
import stylesheet from "./stylesheet";

const sizes = {
  xs: {
    svg: ExtraSmall,
    size: 20
  },
  s: {
    svg: Small,
    size: 28
  },
  m: {
    svg: Medium,
    size: 72
  },
  l: {
    svg: Medium,
    size: 144
  },
  xl: {
    svg: Medium,
    size: 242
  }
};

export default function ProgressRingPresenter(props) {
  const {
    innerRef,
    percentComplete,
    size,
    cssTransitionState,
    surface,
    mask
  } = props;
  const SVG = sizes[size].svg;
  const originalSize = sizes[size].svg === Medium ? 72 : sizes[size].size;

  return (
    <div
      className={css(stylesheet(props, {}).ring)}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={percentComplete}
      ref={innerRef}
    >
      <SVGPresenter
        height={sizes[size].size}
        width={sizes[size].size}
        original={originalSize}
        svgData={SVG}
        cssTransitionState={cssTransitionState}
        surface={surface}
        mask={mask}
      />
    </div>
  );
}

ProgressRingPresenter.defaultProps = { size: "m", surface: 100 };

ProgressRingPresenter.propTypes = {
  innerRef: PropTypes.func,
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(availableSizes),
  cssTransitionState: PropTypes.string,
  surface: PropTypes.oneOf(availableSurfaces),
  mask: PropTypes.string
};
