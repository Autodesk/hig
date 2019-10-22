import React from "react";
import { cx, css } from "emotion";
import PropTypes from "prop-types";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./TabsPresenter.stylesheet";
import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_VARIANTS,
  AVAILABLE_ORIENTATIONS,
  alignments,
  variants,
  orientations
} from "../constants";

export default function TabsPresenter({
  children,
  align,
  variant,
  orientation,
  ...otherProps
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { align, variant, orientation },
          resolvedRoles
        );

        const { className } = otherProps;
        const customClassName = createCustomClassNames(className, "tabs");

        return (
          <ul className={cx(css(styles.tabsWrapper), customClassName)}>
            {children}
          </ul>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TabsPresenter.propTypes = {
  align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  orientation: PropTypes.oneOf(AVAILABLE_ORIENTATIONS),
  children: PropTypes.node
};

TabsPresenter.defaultProps = {
  align: alignments.LEFT,
  variant: variants.UNDERLINE,
  orientation: orientations.HORIZONTAL
};
