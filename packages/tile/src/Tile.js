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
    background,
    contentWidth,
    disabled,
    divider,
    media,
    orientation,
    selected,
    stylesheet: customStylesheet,
    subtitle,
    surface,
    title,
    // version,
    // identifier,
    // statusAndActionIcons,
    // notification,
    // tooltip,
    // overflowMenu,
    // cta,
    // actionClarifier,
    // checkbox,
    // showCheckbox,
    // pinIcon,
    // showPin,
    ...otherProps
  } = props;
  const {
    onBlur,
    // onClick,
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
          stylesheet={customStylesheet}
          subtitle={subtitle}
          surface={surface}
          title={title}
          // version={version}
          // identifier={identifier}
          // statusAndActionIcons={statusAndActionIcons}
          // notification={notification}
          // tooltip={tooltip}
          // overflowMenu={overflowMenu}
          // cta={cta}
          // actionClarifier={actionClarifier}
          // checkbox={checkbox}
          // showCheckbox={showCheckbox}
          // pinIcon={pinIcon}
          // showPin={showPin}
          onBlur={handleBlur}
          // onClick={onClick}
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
