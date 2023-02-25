import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@weave-design/theme-context";
import { css, cx } from "emotion";
import stylesheet from "./Surface.stylesheet";
import {
  AVAILABLE_LEVELS,
  AVAILABLE_SPACINGS,
  AVAILABLE_SHADOWS,
  AVAILABLE_BORDER_RADII,
} from "./constants";

const Surface = (props) => {
  const {
    borderRadius,
    children,
    horizontalPadding,
    verticalPadding,
    level,
    shadow,
    stylesheet: customStylesheet,
    tagName,
    ...otherProps
  } = props;
  const { className } = otherProps;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            borderRadius,
            stylesheet: customStylesheet,
            horizontalPadding,
            verticalPadding,
            level,
            shadow,
          },
          resolvedRoles
        );

        const Element = tagName;

        return (
          Element && (
            <Element className={cx(css(styles.surface), className)}>
              {children}
            </Element>
          )
        );
      }}
    </ThemeContext.Consumer>
  );
};

Surface.displayName = "Surface";

Surface.propTypes = {
  /**
   * Specifies the the radius of the border. The default is no radius.
   */
  borderRadius: PropTypes.oneOf(AVAILABLE_BORDER_RADII),
  /**
   * Children to be rendered within the component.
   */
  children: PropTypes.node,
  /**
   * Specifies the amount of padding to be applied horizontally to the element. The default is no padding.
   */
  horizontalPadding: PropTypes.oneOf(AVAILABLE_SPACINGS),
  /**
   * Specifies the amount of padding to be applied vertically to the element. The default is no padding.
   */
  verticalPadding: PropTypes.oneOf(AVAILABLE_SPACINGS),
  /**
   * Specifies the color level of the background color for the element, respective of theme. The default is 100.
   */
  level: PropTypes.oneOf(AVAILABLE_LEVELS),
  /**
   * Specifies the level of shadow to surround the element.
   */
  shadow: PropTypes.oneOf(AVAILABLE_SHADOWS),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Enables specifying the semantic element to be rendered by the component
   * The default is "div"
   */
  tagName: PropTypes.string,
};

Surface.defaultProps = {
  level: 100,
  tagName: "div",
};

export default Surface;
