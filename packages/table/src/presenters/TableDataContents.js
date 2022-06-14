/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import DateFormatter from "../util/DateFormatter";
import TableDataCell from "../TableDataCell";

import stylesheet from "./stylesheet";

// eslint-disable-next-line default-param-last
const renderCellData = (formatDate = false, cell) => {
  if (!formatDate) return cell.render("Cell");
  return cell.column.Header === "Date"
    ? DateFormatter(cell)
    : cell.render("Cell");
};

const TableDataContents = ({
  getTableBodyProps,
  styles,
  rowTypeToMap,
  alternateBg,
  customContentArray,
  customStylesheet,
  resolvedRoles,
  metadata,
  prepareRow,
  rowSpreadProps,
  columnHeaderArray,
  getOffset,
  activeMultiSelectColumn,
  activeMultiSelectRowArray,
  activeColumnIndex,
  activeRowIndex,
  setActiveColumnIndex,
  setActiveMultiSelectColumn,
  setActiveRowIndex,
  onTableCellClick,
  setAllMultiSelectedRows,
  setActiveMultiSelectRowArray,
  paginateDynamic,
  rows,
  meta,
  page,
  isGrouped,
  tableObject,
  globalColumns,
  globalResizeStyles,
  rowSelection,
}) => (
  <div {...getTableBodyProps()} className={css(styles.higTableBody)}>
    {rowTypeToMap.map((row, rowIndex) => {
      const rowStyles = stylesheet(
        {
          alternateBg,
          isCustomeContentExpanded: customContentArray[rowIndex],
          rowIndex,
          customStylesheet,
        },
        resolvedRoles,
        metadata
      );
      prepareRow(row);

      return (
        <div key={`table-body-row-${rowIndex}`}>
          <div
            {...row.getRowProps()}
            {...rowSpreadProps}
            className={css(rowStyles.higTableRow)}
          >
            {row.cells.map((cell, cellIndex) => {
              const cellColumnIndex = columnHeaderArray.indexOf(
                cell.column.Header
              );
              const cellRowIndex = isGrouped
                ? rowIndex + getOffset()
                : rowIndex;
              const totalRows = rowTypeToMap.length || tableObject.data.length;
              const headerIndexOffset = rowSelection ? 1 : 0;

              if (
                (cellColumnIndex === -1 &&
                  typeof cell.column.Header === "function") ||
                cellColumnIndex > -1
              ) {
                return (
                  <TableDataCell
                    {...cell.getCellProps()}
                    cellColumnIndex={cellColumnIndex}
                    cellRowIndex={cellRowIndex}
                    columnHeaderArray={columnHeaderArray}
                    isLast={rowIndex + 1 === totalRows}
                    isResizing={
                      globalColumns?.[cellColumnIndex + headerIndexOffset]
                        ?.isResizing
                    }
                    key={`table-data-cell-${cellIndex}`}
                    multiSelectedColumn={
                      activeMultiSelectColumn === cellColumnIndex
                    }
                    multiSelectedColumnLeft={
                      activeMultiSelectColumn !== null &&
                      activeMultiSelectColumn - 1 === cellColumnIndex
                    }
                    multiSelectedRow={activeMultiSelectRowArray?.includes(
                      cellRowIndex
                    )}
                    multiSelectedRowBottom={activeMultiSelectRowArray?.includes(
                      cellRowIndex - 1
                    )}
                    selected={
                      activeColumnIndex === cellColumnIndex &&
                      activeRowIndex === cellRowIndex
                    }
                    selectedBottom={
                      activeColumnIndex === cellColumnIndex &&
                      activeRowIndex + 1 === cellRowIndex &&
                      activeRowIndex !== -1
                    }
                    selectedLeft={
                      activeColumnIndex - 1 === cellColumnIndex &&
                      activeRowIndex === cellRowIndex
                    }
                    setActiveColumnIndex={setActiveColumnIndex}
                    setActiveMultiSelectColumn={setActiveMultiSelectColumn}
                    setActiveRowIndex={setActiveRowIndex}
                    onTableCellClick={onTableCellClick}
                    activeMultiSelectRowArray={activeMultiSelectRowArray}
                    setAllMultiSelectedRows={setAllMultiSelectedRows}
                    setActiveMultiSelectRowArray={setActiveMultiSelectRowArray}
                    rowTypeToMap={paginateDynamic ? rows : page}
                    customStylesheet={customStylesheet}
                    globalResizeStyles={globalResizeStyles}
                    rowSelection={rowSelection}
                  >
                    {/* eslint-disable */}
                    {cell.isGrouped ? (
                      <>
                        <span {...row.getToggleRowExpandedProps()}>
                          <GroupElements isExpanded={row.isExpanded}>
                            {meta.groupElements}
                          </GroupElements>
                        </span>{" "}
                        {renderCellData(meta.formatDate, cell)} ({row.subRows.length})
                      </>
                    ) : cell.isAggregated ? (
                      cell.render("Aggregated")
                    ) : cell.isPlaceholder ? null : (
                      renderCellData(meta.formatDate, cell)
                    )}
                  </TableDataCell>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      );
    })}
  </div>
);

TableDataContents.propTypes = {
  getTableBodyProps: PropTypes.func,
  styles: PropTypes.any,
  rowTypeToMap: PropTypes.any,
  alternateBg: PropTypes.any,
  customContentArray: PropTypes.any,
  customStylesheet: PropTypes.any,
  resolvedRoles: PropTypes.any,
  metadata: PropTypes.any,
  prepareRow: PropTypes.any,
  rowSpreadProps: PropTypes.any,
  columnHeaderArray: PropTypes.any,
  getOffset: PropTypes.func,
  activeMultiSelectColumn: PropTypes.func,
  activeMultiSelectRowArray: PropTypes.func,
  activeColumnIndex: PropTypes.number,
  activeRowIndex: PropTypes.number,
  setActiveColumnIndex: PropTypes.func,
  setActiveMultiSelectColumn: PropTypes.func,
  setActiveRowIndex: PropTypes.func,
  onTableCellClick: PropTypes.func,
  setAllMultiSelectedRows: PropTypes.func,
  setActiveMultiSelectRowArray: PropTypes.func,
  paginateDynamic: PropTypes.bool,
  rows: PropTypes.any,
  meta: PropTypes.any,
  page: PropTypes.any,
  isGrouped: PropTypes.bool,
  tableObject: PropTypes.any,
  globalColumns: PropTypes.any,
  globalResizeStyles: PropTypes.any,
  rowSelection: PropTypes.bool
};

export default TableDataContents;
