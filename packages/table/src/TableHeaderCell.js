import React from "react";
import PropTypes from "prop-types";

import { HoverBehavior, PressedBehavior } from "@hig/behaviors";

import TableHeaderCellPresenter from "./presenters/TableHeaderCellPresenter";

export default function TableHeaderCell(props) {
  const { onSortClick, columnInfo, onColumnWidthChanged } = props;
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
            <TableHeaderCellPresenter
              columnInfo={columnInfo}
              onColumnWidthChanged={onColumnWidthChanged}
              hasHover={hasHover}
              isPressed={isPressed}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseUp={handleMouseUp}
              onMouseLeave={handlePressedMouseLeave}
              onSortClick={onSortClick}
              {...props}
            />
          )}
        </PressedBehavior>
      )}
    </HoverBehavior>
  );
}

TableHeaderCell.propTypes = {
  columnInfo: PropTypes.shape({
    id: PropTypes.string,
    Header: PropTypes.string,
    width: PropTypes.number,
    isVisible: PropTypes.bool,
    isResizing: PropTypes.bool,
  }),
  onColumnWidthChanged: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onSortClick: PropTypes.func,
};
