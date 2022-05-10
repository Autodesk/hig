/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import DateFormatter from "../util/DateFormatter";
import TableDataCell from "../TableDataCell";

import stylesheet from "./stylesheet";

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
  getColumnHeaderArray,
  getOffset,
  getActiveMultiSelectColumn,
  getActiveMultiSelectRowArray,
  getActiveColumnIndex,
  getActiveRowIndex,
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
  getGlobalColumns,
  getGlobalResizeStyles,
  rowSelection
}) => (
  <div {...getTableBodyProps()} className={css(styles.higTableBody)}>
    {rowTypeToMap.map((row, rowIndex) => {
      const rowStyles = stylesheet(
        {
          alternateBg,
          isCustomeContentExpanded: customContentArray[rowIndex],
          rowIndex,
          customStylesheet
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
              const cellColumnIndex = getColumnHeaderArray.indexOf(
                cell.column.Header
              );
              const cellRowIndex = isGrouped
                ? rowIndex + getOffset()
                : rowIndex;
              const totalRows = rowTypeToMap.length || tableObject.data.length;

              return (
                <TableDataCell
                  {...cell.getCellProps()}
                  cellColumnIndex={cellColumnIndex}
                  cellRowIndex={cellRowIndex}
                  getColumnHeaderArray={getColumnHeaderArray}
                  isLast={rowIndex + 1 === totalRows}
                  isResizing={
                    getGlobalColumns &&
                    getGlobalColumns[cellColumnIndex + 1] &&
                    getGlobalColumns[cellColumnIndex + 1].isResizing
                  }
                  key={`table-data-cell-${cellIndex}`}
                  multiSelectedColumn={
                    getActiveMultiSelectColumn === cellColumnIndex
                  }
                  multiSelectedColumnLeft={
                    getActiveMultiSelectColumn !== null &&
                    getActiveMultiSelectColumn - 1 === cellColumnIndex
                  }
                  multiSelectedRow={getActiveMultiSelectRowArray?.includes(
                    cellRowIndex
                  )}
                  multiSelectedRowBottom={getActiveMultiSelectRowArray?.includes(
                    cellRowIndex - 1
                  )}
                  selected={
                    getActiveColumnIndex === cellColumnIndex &&
                    getActiveRowIndex === cellRowIndex
                  }
                  selectedBottom={
                    getActiveColumnIndex === cellColumnIndex &&
                    getActiveRowIndex + 1 === cellRowIndex &&
                    getActiveRowIndex !== -1
                  }
                  selectedLeft={
                    getActiveColumnIndex - 1 === cellColumnIndex &&
                    getActiveRowIndex === cellRowIndex
                  }
                  setActiveColumnIndex={setActiveColumnIndex}
                  setActiveMultiSelectColumn={setActiveMultiSelectColumn}
                  setActiveRowIndex={setActiveRowIndex}
                  onTableCellClick={onTableCellClick}
                  getActiveMultiSelectRowArray={getActiveMultiSelectRowArray}
                  setAllMultiSelectedRows={setAllMultiSelectedRows}
                  setActiveMultiSelectRowArray={setActiveMultiSelectRowArray}
                  rowTypeToMap={paginateDynamic ? rows : page}
                  customStylesheet={customStylesheet}
                  getGlobalResizeStyles={getGlobalResizeStyles}
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
  getColumnHeaderArray: PropTypes.any,
  getOffset: PropTypes.func,
  getActiveMultiSelectColumn: PropTypes.func,
  getActiveMultiSelectRowArray: PropTypes.func,
  getActiveColumnIndex: PropTypes.func,
  getActiveRowIndex: PropTypes.func,
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
  getGlobalColumns: PropTypes.any,
  getGlobalResizeStyles: PropTypes.any,
  rowSelection: PropTypes.bool
};

export default TableDataContents;
