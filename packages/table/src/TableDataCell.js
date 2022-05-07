import React from "react";
import PropTypes from "prop-types";

import { HoverBehavior, PressedBehavior } from "@hig/behaviors";

import TableDataCellPresenter from "./presenters/TableDataCellPresenter";

export default function TableDataCell(props) {
  return (
    <HoverBehavior
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {({ hasHover, onMouseEnter: handleMouseEnter, onMouseLeave }) => (
        <PressedBehavior
          onMouseDown={props.onMouseDown}
          onMouseUp={props.onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {({
            isPressed,
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            onPressedMouseLeave: handlePressedMouseLeave,
          }) => (
            <TableDataCellPresenter
              hasHover={hasHover}
              isPressed={isPressed}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseUp={handleMouseUp}
              onMouseLeave={handlePressedMouseLeave}
              {...props}
            />
          )}
        </PressedBehavior>
      )}
    </HoverBehavior>
  );
}

TableDataCell.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
};
