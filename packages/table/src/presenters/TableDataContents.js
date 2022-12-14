/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { CaretRightMUI, CaretDownMUI } from "@hig/icons";
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

const renderSubRowControls = (row, styles) =>
  row?.canExpand ? (
    <span
      {...row.getToggleRowExpandedProps({ style: styles.higSubRowControls })}
    >
      {row?.isExpanded ? <CaretDownMUI /> : <CaretRightMUI />}
    </span>
  ) : null;

const checkSubRowsOfSubRows = (subRows) => {
  console.log('SUBROWS', subRows)
  return true;
}

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
  count,
  interalSelectedRows,
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
      console.log('table data contents');
      console.log(row?.id);
      console.log(interalSelectedRows);
      console.log(interalSelectedRows?.[row?.id]);
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
                    multiSelectedRow={interalSelectedRows?.[row?.id]}
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
                    count={count}
                    isSubRows={row?.subRows?.length >= 0 && row?.original?.parent === null}
                    isTreeGrid={row?.subRows?.length && row?.original?.parent !== null}
                  >
                    {cellColumnIndex === 0 && renderSubRowControls(row, styles)}
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
  rowSelection: PropTypes.bool,
  count: PropTypes.number,
};

export default TableDataContents;
