import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

const WAIT_TIME = 1000;

export default function TableHeaderCellPresenter(props) {
  const {
    children,
    column,
    onColumnsWidthChanged,
    columnSelection,
    headerIndex,
    isSelectableHeader,
    isSortPassed,
    onClick,
    rowSelection,
    setActiveMultiSelectColumn,
    onSortClick,
    setIsSortedDesc,
    isSortedDesc,
    ...otherProps
  } = props;
  const { globalResizeStyles } = otherProps;

  const timeoutIdRef = useRef(null);
  useEffect(() => {
    if (onColumnsWidthChanged) {
      if (!column?.isResizing) {
        return;
      }
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
      timeoutIdRef.current = setTimeout(() => {
        onColumnsWidthChanged(column);
      }, WAIT_TIME);
    }
  }, [column?.width]);

  const handleClick = useCallback(
    (event) => {
      if (isSortPassed && onClick && !columnSelection) {
        setIsSortedDesc(!isSortedDesc);
        if (onSortClick) {
          onSortClick(event, props, headerIndex);
        }
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
      setActiveMultiSelectColumn,
      onSortClick,
    ]
  );
  const payload = { ...otherProps };
  const rowOffset = rowSelection ? 1 : 0;
  const resizeStyles = globalResizeStyles?.[headerIndex + rowOffset] || {};

  delete payload.activeMultiSelectColumn;
  delete payload.columnHeaderArray;
  delete payload.hasHover;
  delete payload.headerBackgroundColor;
  delete payload.isPressed;
  delete payload.isSortPassed;
  delete payload.setActiveMultiSelectColumn;
  delete payload.customStylesheet;
  delete payload.globalResizeStyles;
  // remove resize inline style and move to emotion styles
  delete payload.style;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles, metadata);
        const mergedStyles = {
          ...styles.higTableHeader,
          ...resizeStyles,
        };

        return (
          /* eslint-disable-next-line */
          <div
            {...payload}
            className={css(mergedStyles)}
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
  column: PropTypes.shape({
    id: PropTypes.string,
    Header: PropTypes.string,
    width: PropTypes.number,
    isVisible: PropTypes.bool,
    isResizing: PropTypes.bool,
  }),
  onColumnsWidthChanged: PropTypes.func,
  columnSelection: PropTypes.bool,
  headerIndex: PropTypes.number,
  isSelectableHeader: PropTypes.bool,
  isSortPassed: PropTypes.func,
  onClick: PropTypes.func,
  setActiveMultiSelectColumn: PropTypes.func,
  onSortClick: PropTypes.func,
  rowSelection: PropTypes.bool,
  setIsSortedDesc: PropTypes.func,
  isSortedDesc: PropTypes.bool,
};
