import React from "react";
import PropTypes from "prop-types";
import { Pointer } from "@hig/flyout";

const SIZE = 12;

/* eslint-disable-next-line no-unused-vars */
function stylesheetOverride(stylesheet, props, themeData) {
  const styles = {
    ...stylesheet,
    pointerBorder: {
      ...stylesheet.pointerBorder,
      fill: themeData["tooltip.backgroundColor"],
    },
    pointerBody: {
      ...stylesheet.pointerBody,
      fill: themeData["tooltip.backgroundColor"],
    },
  };

  return props.tooltipStylesheet
    ? props.tooltipStylesheet(styles, props, themeData)
    : styles;
}

export default function PointerPresenter(props) {
  return (
    <Pointer
      size={SIZE}
      stylesheet={stylesheetOverride}
      tooltipStylesheet={props.stylesheet}
    />
  );
}

PointerPresenter.propTypes = {
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};
