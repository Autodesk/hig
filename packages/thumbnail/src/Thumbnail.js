import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";
import { AVAILABLE_FITS, AVAILABLE_RATIOS, AVAILABLE_SIZES } from "./constants";

const Thumbnail = (props) => {
  const {
    alt,
    aspectRatio = "fullscreen",
    fit = "contain",
    size = "m",
    src,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const imageClassName = createCustomClassNames(className, "image");
  const borderClassName = createCustomClassNames(className, "border");

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          { aspectRatio, fit, size, stylesheet: customStylesheet },
          resolvedRoles,
          metadata
        );

        return (
          <div
            {...otherProps}
            className={cx([className, css(styles?.thumbnail?.wrapper)])}
          >
            <div
              className={cx([borderClassName, css(styles?.thumbnail?.border)])}
            />
            <img
              alt={alt}
              className={cx([imageClassName, css(styles?.thumbnail?.image)])}
              src={src}
            />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Thumbnail.displayName = "Thumbnail";

Thumbnail.propTypes = {
  /** The HTML alt attribute for the image */
  alt: PropTypes.string,
  /** The aspect ratio of the image, corresponds with the properties of css aspect-ratio */
  aspectRatio: PropTypes.oneOf(AVAILABLE_RATIOS),
  /** How the image fills the container, corresponds with the properties of css object-fit */
  fit: PropTypes.oneOf(AVAILABLE_FITS),
  /** Used for passing custom values to the spacer, in lieu of a fixed amount */
  size: PropTypes.oneOf(AVAILABLE_SIZES),
  /** The HTML src attribute of the image */
  src: PropTypes.string.isRequired,
  /** Adds custom/overriding styles */
  stylesheet: PropTypes.func,
};

Thumbnail.defaultProps = {
  aspectRatio: "fullscreen",
  fit: "contain",
  size: "m",
};

export default Thumbnail;
