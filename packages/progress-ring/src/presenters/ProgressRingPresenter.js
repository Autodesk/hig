import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";

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
    mask,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const SVG = sizes[size].svg;
  const originalSize = sizes[size].svg === Medium ? 72 : sizes[size].size;

  return (
    <div
      className={cx([className, css(stylesheet(props, {}).ring)])}
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
        {...otherProps}
      />
    </div>
  );
}

ProgressRingPresenter.defaultProps = { size: "m", surface: 100 };

ProgressRingPresenter.propTypes = {
  cssTransitionState: PropTypes.string,
  innerRef: PropTypes.func,
  mask: PropTypes.string,
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(availableSizes),
  stylesheet: PropTypes.func,
  surface: PropTypes.oneOf(availableSurfaces)
};
