import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function SVGPresenter(props) {
  const { height, original, svgData, width } = props;

  const buildPolygons = (svgs, resolvedRoles) =>
    svgs.map((item) => {
      // we need this if we don't want to manually edit
      // the svg files
      const map = {
        "hig__progress-ring__background": "background",
        "hig__progress-ring__mask": "mask",
        "hig__progress-ring__segment": "segment",
      };
      const styles = stylesheet(props, resolvedRoles)[map[item.className]];
      return (
        <polygon
          key={item.points}
          className={cx(item.className, css(styles))}
          fill={item.fill}
          fillRule={item.fillRule}
          points={item.points}
        />
      );
    });

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${original} ${original}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {buildPolygons(svgData, resolvedRoles)}
        </svg>
      )}
    </ThemeContext.Consumer>
  );
}

SVGPresenter.propTypes = {
  height: PropTypes.number,
  original: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  svgData: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
};
