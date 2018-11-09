import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import stylesheet from "./stylesheet";

function stylesheetOverride() {
  return {};
}

export default function PointerPresenter(props) {
  const { borderWidth, size, customStyles } = props;
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
        const hasCustomStyles = Object.keys(customStyles()).length > 0;
        const pointerStyles = hasCustomStyles
          ? { ...styles.pointer, ...customStyles() }
          : styles.pointer;

        return (
          <svg
            className={css(pointerStyles)}
            height={size.toString()}
            viewBox={`0 0 ${size} ${size}`}
            width={width.toString()}
          >
            <polygon
              points={[
                `0,${height}`,
                `${widthMidpoint},0`,
                `${width},${height}`
              ].join(" ")}
            />
            <polygon
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
  size: 24,
  customStyles: stylesheetOverride
};

PointerPresenter.propTypes = {
  borderWidth: PropTypes.number,
  size: PropTypes.number,
  customStyles: PropTypes.func
};
