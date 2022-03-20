import React from "react";
import { HoverBehavior, PressedBehavior } from "@hig/behaviors";

import TableDataCellPresenter from "./behaviors/TableDataCellPresenter";

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
            onPressedMouseLeave: handlePressedMouseLeave
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
