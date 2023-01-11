import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function SVGPresenter(props) {
  const { height, original, svgData, width } = props;

  const buildPaths = (svgs, resolvedRoles) =>
    svgs.map((item, index) => {
      // the background is always the first svg path
      const styleKey = index === 0 ? "background" : "segment";

      const styles = stylesheet(props, resolvedRoles);
      return (
        <path
          key={item.d}
          className={cx(item.className, css(styles[styleKey]))}
          fill={item.fill}
          fillRule={item.fillRule}
          d={item.d}
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
          {buildPaths(svgData, resolvedRoles)}
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
