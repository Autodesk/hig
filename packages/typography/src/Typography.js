import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import ThemeContext from "@hig/theme-context";

import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_FONT_WEIGHTS,
  AVAILABLE_VARIANTS,
} from "./_constants";

import stylesheet from "./Typography.stylesheet";

const Typography = (props) => {
  const onElementType = () => {
    const { elementType, variant } = props;

    if (elementType) {
      return elementType;
    }

    return ["h1", "h2", "h3"].includes(variant) ? variant : "p";
  };

  const {
    align,
    children,
    fontWeight,
    variant,
    stylesheet: customStylesheet,
    elementType, // we don't want this included in the otherProps that appear in the DOM
    typographyRef,
    ...otherProps
  } = props;

  const { className } = otherProps;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            stylesheet: customStylesheet,
            align,
            fontWeight,
            variant,
            ...props,
          },
          resolvedRoles
        );

        const ElementType = onElementType();

        return (
          <ElementType
            {...otherProps}
            className={cx(css(styles.typography), className)}
            ref={typographyRef}
          >
            {children}
          </ElementType>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Typography.displayName = "Typography";

Typography.propTypes = {
  /**
   * Sets the horizontal alignment of the text
   */
  align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
  /**
   * Enables specifying the semantic element to be rendered by the component
   * If this prop is not provided, the semantic element will default to matching the variant (e.g. if the component
   * variant is h1, the element will be `<h1>`) or if there is no semantic element matching the variant, it
   * will default to `<p>`. You can provide elementType as a string, like "figcaption", or as a function, like
   * `({children}) => (<figcaption>{children}</figcaption>)`.
   */
  elementType: PropTypes.node,
  /**
   * Text to render
   */
  children: PropTypes.node,
  /**
   * Specifies the weight (or boldness) of the font
   */
  fontWeight: PropTypes.oneOf(AVAILABLE_FONT_WEIGHTS),
  /**
   * A callback ref that gets passed to the root HTML element
   */
  typographyRef: PropTypes.func,
  /**
   * Indicates the initial Typography style
   */
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
};

export default Typography;
