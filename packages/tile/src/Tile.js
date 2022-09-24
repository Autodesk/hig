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
    onClick,
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
          onClick={onClick}
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
  /** background */
  background: PropTypes.oneOf(AVAILABLE_BACKGROUNDS),
  /** contentWidth */
  contentWidth: PropTypes.string,
  /** disabled */
  disabled: PropTypes.bool,
  /** divider */
  divider: PropTypes.bool,
  /** media */
  media: PropTypes.node,
  /** orientation */
  orientation: PropTypes.oneOf(AVAILABLE_ORIENTATIONS),
  /** selected */
  selected: PropTypes.bool,
  /** stylesheet */
  stylesheet: PropTypes.func,
  /** subtitle */
  subtitle: PropTypes.string,
  /** surface */
  surface: PropTypes.oneOf(AVAILABLE_LEVELS),
  /** title */
  title: PropTypes.string,
};

export default Tile;
