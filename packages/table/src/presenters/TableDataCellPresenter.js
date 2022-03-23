import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function TableDataCellPresenter(props) {
  const {
    cellColumnIndex,
    cellRowIndex,
    children,
    multiSelectedColumn,
    selected,
    setActiveColumnIndex,
    setActiveMultiSelectColumn,
    setActiveRowIndex,
    ...otherProps
  } = props;
  const handleCellClick = useCallback(() => {
    // don't select when multi-select row cell clicked
    // only select when checkbox is clicked
    if (cellColumnIndex === -1) {
      return;
    }
    setActiveColumnIndex(cellColumnIndex);
    setActiveRowIndex(cellRowIndex);
    setActiveMultiSelectColumn(null);
  }, [
    cellColumnIndex,
    cellRowIndex,
    setActiveColumnIndex,
    setActiveRowIndex,
    setActiveMultiSelectColumn
  ]);
  const payload = { ...otherProps };

  delete payload.getColumnHeaderArray;
  delete payload.hasHover;
  delete payload.isLast;
  delete payload.isPressed;
  delete payload.isResizing;
  delete payload.multiSelectedColumnLeft;
  delete payload.multiSelectedRow;
  delete payload.multiSelectedRowBottom;
  delete payload.selectedBottom;
  delete payload.selectedLeft;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles, metadata);

        return (
          /* eslint-disable-next-line */
          <div
            {...payload}
            className={css(styles.higTableCell)}
            data-cell-coords={`${cellColumnIndex}_${cellRowIndex}`}
            onClick={handleCellClick}
          >
            <div className={css(styles.higTableCellContentWrapper)}>
              {children}
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TableDataCellPresenter.propTypes = {
  cellColumnIndex: PropTypes.number,
  cellRowIndex: PropTypes.number,
  children: PropTypes.node,
  multiSelectedColumn: PropTypes.bool,
  selected: PropTypes.bool,
  setActiveColumnIndex: PropTypes.func,
  setActiveMultiSelectColumn: PropTypes.func,
  setActiveRowIndex: PropTypes.func
};
