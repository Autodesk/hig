import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";

import TilePresenter from "./presenters/TilePresenter";
import {
  AVAILABLE_BACKGROUNDS,
  AVAILABLE_LEVELS,
  AVAILABLE_ORIENTATIONS,
} from "./constants";

const Tile = (props) => {
  const {
    background = "filled",
    contentWidth,
    disabled,
    divider,
    media,
    orientation = "vertical",
    selected,
    statusBadge,
    stylesheet: customStylesheet,
    subtitle,
    surface = 100,
    title,
    ...otherProps
  } = props;
  const {
    onBlur,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
  } = otherProps;

  return (
    <ControlBehavior
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {({
        hasFocus,
        hasHover,
        isPressed,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
      }) => (
        <TilePresenter
          {...otherProps}
          background={background}
          contentWidth={contentWidth}
          disabled={disabled}
          divider={divider}
          hasFocus={hasFocus}
          hasHover={hasHover}
          isPressed={isPressed}
          media={media}
          orientation={orientation}
          selected={selected}
          statusBadge={statusBadge}
          stylesheet={customStylesheet}
          subtitle={subtitle}
          surface={surface}
          title={title}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
        />
      )}
    </ControlBehavior>
  );
};

Tile.defaultProps = {
  background: "filled",
  orientation: "vertical",
  surface: 100,
};

Tile.propTypes = {
  /** Sets whether or not the Tile has a background */
  background: PropTypes.oneOf(AVAILABLE_BACKGROUNDS),
  /** Set a width for the content section, passes value directly to CSS width property */
  contentWidth: PropTypes.string,
  /** Disables the tile */
  disabled: PropTypes.bool,
  /** Shows a divider between the image and content */
  divider: PropTypes.bool,
  /** The media associated with the Tile */
  media: PropTypes.node.isRequired,
  /** Sets the orientation of the Tile */
  orientation: PropTypes.oneOf(AVAILABLE_ORIENTATIONS),
  /** Sets the selected state of the Tile */
  selected: PropTypes.bool,
  /** Pass in an optional Weave Badge component */
  statusBadge: PropTypes.node,
  /** Adds custom/overriding styles */
  stylesheet: PropTypes.func,
  /** The subtitle in the content section */
  subtitle: PropTypes.string,
  /** The surface level that the Tile sits on top of */
  surface: PropTypes.oneOf(AVAILABLE_LEVELS),
  /** The title in the content section */
  title: PropTypes.string.isRequired,
};

export default Tile;
