import React from "react";
import PropTypes from "prop-types";

export default function SVGPresenter(props) {
  const { height, width, original, svgData } = props;
  const polygons = svgData.map(item => (
    <polygon
      key={item.points}
      className={item.className}
      fill={item.fill}
      fillRule={item.fillRule}
      points={item.points}
    />
  ));

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${original} ${original}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {polygons}
    </svg>
  );
}

SVGPresenter.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  original: PropTypes.number,
  svgData: PropTypes.arrayOf(PropTypes.object)
};
