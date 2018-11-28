import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import stylesheet from "./stylesheet";

export default function PointerPresenter(props) {
  const { borderWidth, size } = props;
  const height = size / 2;
  const width = size;
  const widthMidpoint = width / 2;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { transitionStatus: null, anchorPoint: null },
          resolvedRoles
        );
        const cssStyles = props.stylesheet
          ? props.stylesheet(styles, props, resolvedRoles)
          : styles;

        return (
          <svg
            height={size.toString()}
            viewBox={`0 0 ${size} ${size}`}
            width={width.toString()}
          >
            <polygon
              className={css(cssStyles.pointerBorder)}
              points={[
                `0,${height}`,
                `${widthMidpoint},0`,
                `${width},${height}`
              ].join(" ")}
            />
            <polygon
              className={css(cssStyles.pointerBody)}
              points={[
                `${borderWidth},${height}`,
                `${widthMidpoint},${borderWidth}`,
                `${width - borderWidth},${height}`
              ].join(" ")}
            />
          </svg>
        );
      }}
    </ThemeContext.Consumer>
  );
}

PointerPresenter.defaultProps = {
  borderWidth: 2.5,
  size: 24
};

PointerPresenter.propTypes = {
  borderWidth: PropTypes.number,
  size: PropTypes.number,
  stylesheet: PropTypes.func
};
