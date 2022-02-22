import React from "react";
import TilePresenter from './presenters/TilePresenter';
import { ControlBehavior } from "@hig/behaviors";

const Tile = (props) => {
  const {
    headerContainer,
    background,
    divider,
    title,
    subtitle,
    orientation,
    version,
    identifier,
    statusAndActionIcons,
    notification,
    tooltip,
    overflowMenu,
    cta,
    actionClarifier,
    checkbox,
    showCheckbox,
    pinIcon,
    showPin,
    surface,
    disabled,
    onBlur,
    onClick,
    onFocus,
    onHover,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    selected,
  } = props;
  return (
    <ControlBehavior
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {
        ({
          hasFocus,
          hasHover,
          isPressed,
          onBlur: handleBlur,
          onFocus: handleFocus,
          onMouseDown: handleMouseDown,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          onMouseUp: handleMouseUp
        }) => (
          <TilePresenter 
            headerContainer={headerContainer}
            background={background}
            divider={divider}
            title={title}
            subtitle={subtitle}
            orientation={orientation}
            version={version}
            identifier={identifier}
            statusAndActionIcons={statusAndActionIcons}
            notification={notification}
            tooltip={tooltip}
            overflowMenu={overflowMenu}
            cta={cta}
            actionClarifier={actionClarifier}
            checkbox={checkbox}
            showCheckbox={showCheckbox}
            pinIcon={pinIcon}
            showPin={showPin}
            surface={surface}
            disabled={disabled}
            hasFocus={hasFocus}
            hasHover={hasHover}
            isPressed={isPressed}
            onBlur={handleBlur}
            onClick={onClick}
            onFocus={handleFocus}
            onHover={onHover}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            selected={selected}
          />
        )
      }
    </ControlBehavior>
  );
}

export default Tile;
