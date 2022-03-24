import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function TableHeaderCellPresenter(props) {
  const {
    children,
    columnSelection,
    headerIndex,
    isSelectableHeader,
    isSortPassed,
    onClick,
    setActiveMultiSelectColumn,
    ...otherProps
  } = props;
  const handleClick = useCallback(
    event => {
      if (isSortPassed && onClick && !columnSelection) {
        onClick(event);
      }
      // no column selection for multirow selection checkboxes
      if (headerIndex === -1 || !columnSelection) {
        return;
      }
      setActiveMultiSelectColumn(headerIndex);
    },
    [
      columnSelection,
      headerIndex,
      isSortPassed,
      onClick,
      setActiveMultiSelectColumn
    ]
  );
  const payload = { ...otherProps };

  delete payload.getActiveMultiSelectColumn;
  delete payload.getColumnHeaderArray;
  delete payload.hasHover;
  delete payload.headerBackgroundColor;
  delete payload.isPressed;
  delete payload.isSortPassed;
  delete payload.setActiveMultiSelectColumn;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles, metadata);

        return (
          /* eslint-disable-next-line */
          <div
            {...payload}
            className={css(styles.higTableHeader)}
            onClick={handleClick}
            {...(isSelectableHeader
              ? { "data-cell-coords": `${headerIndex}_-1` }
              : {})}
          >
            <div className={css(styles.higTableHeaderContentWrapper)}>
              {children}
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TableHeaderCellPresenter.propTypes = {
  children: PropTypes.node,
  columnSelection: PropTypes.bool,
  headerIndex: PropTypes.number,
  isSelectableHeader: PropTypes.bool,
  isSortPassed: PropTypes.func,
  onClick: PropTypes.func,
  setActiveMultiSelectColumn: PropTypes.func
};
