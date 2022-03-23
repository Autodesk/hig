import React, { useEffect, useMemo, useState } from "react";
import { css } from "emotion";
import {
  useResizeColumns,
  useExpanded,
  useFilters,
  useFlexLayout,
  useGlobalFilter,
  useGroupBy,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable
} from "react-table";
import { useSticky } from "react-table-sticky";

import { ThemeContext } from "@hig/theme-context";
import Checkbox from "@hig/checkbox";

import TableDataCell from "../TableDataCell";
import TableHeaderCell from "../TableHeaderCell";
import GlobalFilter from "../components/GlobalFilter";
import ExpandedContent from "../components/ExpandedContent";
import ColumnShowHide from "../components/ColumnShowHide";
import SortColumns from "../components/SortColumns";
import GroupElements from "../components/GroupElements";
import GroupHeaderElements from "../components/GroupHeaderElements";
import Pagination from "../components/Pagination";
import DateFormatter from "../util/DateFormatter";

import stylesheet from "./stylesheet";

const renderCellData = (formatDate = false, cell) => {
  if (!formatDate) return cell.render("Cell");
  return cell.column.Header === "Date"
    ? DateFormatter(cell)
    : cell.render("Cell");
};

const TablePresenter = ({
  alternateBg,
  columnSelection,
  frozenHeader,
  frozenHeaderCount,
  headerBackgroundColor,
  headerRowSpreadProps,
  paginateDynamic,
  rowSpreadProps,
  rowSelection,
  setHeaderRef,
  setTableRef,
  setTotalRows,
  tableObject,
  tableSpreadProps,
  ...otherProps
}) => {
  const { columns, data, meta } = useMemo(() => tableObject, [tableObject]);

  const defaultColumn = useMemo(() => ({
    minswidth: 30,
    width: 150,
    maxWidth: 400
  }));

  const {
    getActiveColumnIndex,
    getActiveMultiSelectColumn,
    getActiveMultiSelectRowArray,
    getActiveRowIndex,
    getAllMultiSelectedRows,
    getColumnHeaderArray,
    handleFocus,
    handleKeyDown,
    setActiveColumnIndex,
    setActiveMultiSelectColumn,
    setActiveMultiSelectRowArray,
    setActiveRowIndex,
    setAllMultiSelectedRows
  } = otherProps;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps
  } = useTable(
    { columns, data, defaultColumn },
    useResizeColumns,
    useFlexLayout,
    useSticky,
    useFilters,
    useGlobalFilter,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(defaultColumns => {
        if (rowSelection) {
          return [
            {
              id: "selection",
              disableResizing: true,
              minWidth: 35,
              width: 35,
              maxWidth: 35,
              Header: () => (
                <Checkbox
                  checked={getAllMultiSelectedRows}
                  indeterminate={
                    !!getActiveMultiSelectRowArray?.length &&
                    !getAllMultiSelectedRows
                  }
                  onClick={event => {
                    event.stopPropagation();
                    const allArray = tableObject.data.map(
                      (row, index) => index
                    );
                    const emptyArray = [];

                    if (
                      getAllMultiSelectedRows ||
                      getActiveMultiSelectRowArray?.length > 0
                    ) {
                      setActiveMultiSelectRowArray(emptyArray);
                      setAllMultiSelectedRows(false);
                    } else {
                      setActiveMultiSelectRowArray(allArray);
                      setAllMultiSelectedRows(true);
                    }
                  }}
                  tabIndex={-1}
                />
              ),
              Cell: ({ row }) => {
                const rowTypeToMap = paginateDynamic ? rows : page;
                const rowIndex = rowTypeToMap.indexOf(row);

                return (
                  <Checkbox
                    checked={getActiveMultiSelectRowArray?.includes(rowIndex)}
                    onClick={event => {
                      event.stopPropagation();
                      const newArray = getActiveMultiSelectRowArray?.includes(
                        rowIndex
                      )
                        ? getActiveMultiSelectRowArray.filter(
                            item => item !== rowIndex
                          )
                        : (getActiveMultiSelectRowArray && [
                            ...getActiveMultiSelectRowArray
                          ]) ||
                          [];

                      if (!getActiveMultiSelectRowArray?.includes(rowIndex)) {
                        newArray.push(rowIndex);
                      }
                      if (rowTypeToMap.length === newArray.length) {
                        setAllMultiSelectedRows(true);
                      } else {
                        setAllMultiSelectedRows(false);
                      }
                      setActiveMultiSelectRowArray(newArray);
                    }}
                    tabIndex={-1}
                  />
                );
              }
            },
            ...defaultColumns
          ];
        }
        return [...defaultColumns];
      });
    }
  );
  const { globalFilter, pageIndex } = state;
  const { isStickyHeader, isStickyColumns } = meta?.stickyItems;
  const handleStickyToggle = () => {
    const stickyObject = {};
    if (isStickyColumns) {
      stickyObject.width = "100%";
    }

    if (isStickyHeader) {
      // stickyObject.height = windowHeight;
    }

    return stickyObject;
  };
  const [customContentArray] = useState([]);
  const pageDetails = {
    canPreviousPage,
    canNextPage,
    nextPage,
    pageOptions,
    pageIndex,
    paginateDynamic,
    previousPage
  };
  const rowTypeToMap = paginateDynamic ? rows : page;

  useEffect(() => {
    setTotalRows(rowTypeToMap.length);
  });

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          { frozenHeader, frozenHeaderCount, isStickyColumns, isStickyHeader },
          resolvedRoles,
          metadata
        );

        return (
          <>
            {meta.globalFilter && (
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}>
                {meta.globalFilter}
              </GlobalFilter>
            )}
            {meta.columnShowHideComponent && (
              <ColumnShowHide
                toggleHideAllColumnsProps={getToggleHideAllColumnsProps}
                allColumns={allColumns}
              >
                {meta.columnShowHideComponent}
              </ColumnShowHide>
            )}
            {/* eslint-disable-next-line */}
            <div
              {...getTableProps()}
              className={css(styles.higTable)}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              ref={setTableRef}
              tabIndex={tableSpreadProps?.tabIndex || 0}
              style={handleStickyToggle()}
              {...tableSpreadProps}
            >
              <div
                className={css(styles.higTableHeaderWrapper)}
                ref={setHeaderRef}
              >
                {headerGroups.map(headerGroup => (
                  <div
                    {...headerGroup.getHeaderGroupProps()}
                    {...headerRowSpreadProps}
                    className={css(styles.higTableHeaderRow)}
                  >
                    {headerGroup.headers.map(column => {
                      const resizingStyles = column.canResize
                        ? stylesheet(
                            { isResizing: column.isResizing },
                            resolvedRoles,
                            metadata
                          )
                        : null;
                      const headerIndex = getColumnHeaderArray.indexOf(
                        column.Header
                      );

                      return (
                        <TableHeaderCell
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          columnSelection={columnSelection}
                          getActiveMultiSelectColumn={
                            getActiveMultiSelectColumn
                          }
                          getColumnHeaderArray={getColumnHeaderArray}
                          headerBackgroundColor={headerBackgroundColor}
                          headerIndex={headerIndex}
                          isSelectableHeader={!column.headers}
                          isSortPassed={meta.sortColumns}
                          selected={
                            getActiveColumnIndex === headerIndex &&
                            getActiveRowIndex === -1
                          }
                          setActiveMultiSelectColumn={
                            setActiveMultiSelectColumn
                          }
                        >
                          <div className={css(styles.headerHolder)}>
                            {column.canGroupBy && meta.groupElements ? (
                              <span {...column.getGroupByToggleProps()}>
                                <GroupHeaderElements
                                  groupHeaderElementStyles={
                                    styles.groupHeaderElement
                                  }
                                  isGrouped={column.isGrouped}
                                />
                              </span>
                            ) : null}
                            {column.render("Header")}
                          </div>
                          {/* eslint-disable-next-line */}
                          <div
                            {...(column.canResize
                              ? { ...column.getResizerProps() }
                              : {})}
                            className={css(
                              resizingStyles?.higTableHeaderResizer
                            )}
                            onClick={event => event.stopPropagation()}
                          />
                          {meta.sortColumns && column.id !== "selection" ? (
                            <SortColumns
                              isSorted={column.isSorted}
                              isSortedDesc={column.isSortedDesc}
                              density={metadata.densityId}
                            >
                              {meta.sortColumns}
                            </SortColumns>
                          ) : (
                            ""
                          )}
                        </TableHeaderCell>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div
                {...getTableBodyProps()}
                className={css(styles.higTableBody)}
              >
                {rowTypeToMap.map((row, rowIndex) => {
                  const rowStyles = stylesheet(
                    {
                      alternateBg,
                      isCustomeContentExpanded: customContentArray[rowIndex],
                      rowIndex
                    },
                    resolvedRoles,
                    metadata
                  );
                  prepareRow(row);

                  return (
                    <div>
                      <div
                        {...row.getRowProps()}
                        {...rowSpreadProps}
                        className={css(rowStyles.higTableRow)}
                      >
                        {row.cells.map(cell => {
                          const cellColumnIndex = getColumnHeaderArray.indexOf(
                            cell.column.Header
                          );
                          const cellRowIndex = rowIndex;
                          const totalRows =
                            rowTypeToMap.length || tableObject.data.length;

                          return (
                            <TableDataCell
                              {...cell.getCellProps()}
                              cellColumnIndex={cellColumnIndex}
                              cellRowIndex={cellRowIndex}
                              getColumnHeaderArray={getColumnHeaderArray}
                              isLast={rowIndex + 1 === totalRows}
                              isResizing={cell?.column?.isResizing}
                              multiSelectedColumn={
                                getActiveMultiSelectColumn === cellColumnIndex
                              }
                              multiSelectedColumnLeft={
                                getActiveMultiSelectColumn !== null &&
                                getActiveMultiSelectColumn - 1 ===
                                  cellColumnIndex
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
                              setActiveMultiSelectColumn={
                                setActiveMultiSelectColumn
                              }
                              setActiveRowIndex={setActiveRowIndex}
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
                      {meta.expandedComponent && (
                        <ExpandedContent
                          curItem={customContentArray[rowIndex]}
                          expandedContentStyles={rowStyles}
                        >
                          {meta.expandedComponent}
                        </ExpandedContent>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {!paginateDynamic && meta.paginationComponent && (
              <Pagination pageDetails={pageDetails}>
                {meta.paginationComponent}
              </Pagination>
            )}
            {paginateDynamic && meta.paginationDynamic && (
              <Pagination pageDetails={pageDetails}>
                {meta.paginationDynamic}
              </Pagination>
            )}
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TablePresenter;
