/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
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
  useTable,
} from "react-table";
import { useSticky } from "react-table-sticky";

import { ThemeContext } from "@hig/theme-context";
import Checkbox from "@hig/checkbox";

import TableHeaderCell from "../TableHeaderCell";
import GlobalFilter from "../components/GlobalFilter";
import ColumnShowHide from "../components/ColumnShowHide";
import SortColumns from "../components/SortColumns";
import GroupHeaderElements from "../components/GroupHeaderElements";
import Pagination from "../components/Pagination";
import DataGroupComponent from "../components/DataGroupComponent";
import TableDataContents from "./TableDataContents";

import stylesheet from "./stylesheet";

const RenderTable = ({ params, passedData, passedCount }) => {
  const {
    dataArray,
    isGrouped,
    columns,
    meta,
    groupNames,
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
    onTableCellClick,
    onSortClick,
    customStylesheet,
    tableGroupSelectAll: { checkboxToggle = [], setCheckboxToggle = () => {} },
    otherProps,
    initialState,
  } = params || {};
  const data = passedData || dataArray;
  const count = passedCount || 0;

  const getOffset = () => {
    const newDataArray = dataArray || [];
    const totalArray = [];
    if (!dataArray) {
      return 0;
    }
    if (count === 0) {
      return 0;
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < count; i++) {
      totalArray.push(newDataArray[i].length);
    }
    return totalArray.reduce((a, b) => a + b, 0);
  };
  const defaultColumn = useMemo(() => ({
    minWidth: 30,
    width: 150,
    maxWidth: 400,
  }));

  const {
    activeColumnIndex,
    activeMultiSelectColumn,
    activeMultiSelectRowArray,
    activeRowIndex,
    allMultiSelectedRows,
    columnHeaderArray,
    handleFocus,
    handleKeyDown,
    setActiveColumnIndex,
    setActiveMultiSelectColumn,
    setActiveMultiSelectRowArray,
    setActiveRowIndex,
    setAllMultiSelectedRows,
    setColumnHeaderArray,
    globalColumns,
    setGlobalColumns,
    globalResizeStyles,
    setGlobalResizeStyles,
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
    getToggleHideAllColumnsProps,
    setHiddenColumns,
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
    (hooks) => {
      hooks.visibleColumns.push((defaultColumns) => {
        if (rowSelection) {
          return [
            {
              id: "selection",
              disableResizing: true,
              minWidth: 35,
              width: 35,
              maxWidth: 35,
              // eslint-disable-next-line
              Header: () => {
                if (isGrouped) return null;
                return (
                  <Checkbox
                    checked={allMultiSelectedRows}
                    indeterminate={
                      !!activeMultiSelectRowArray?.length &&
                      !allMultiSelectedRows
                    }
                    onClick={(event) => {
                      event.stopPropagation();
                      const allArray = tableObject.data.map(
                        (row, index) => index
                      );
                      const emptyArray = [];

                      if (
                        allMultiSelectedRows ||
                        activeMultiSelectRowArray?.length > 0
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
                );
              },
              // eslint-disable-next-line
              Cell: ({ row }) => {
                const rowTypeToMap = paginateDynamic ? rows : page;
                const rowIndex = isGrouped
                  ? rowTypeToMap.indexOf(row) + getOffset()
                  : rowTypeToMap.indexOf(row);

                return (
                  <Checkbox
                    checked={activeMultiSelectRowArray?.includes(rowIndex)}
                    onClick={(event) => {
                      event.stopPropagation();
                      const newArray = activeMultiSelectRowArray?.includes(
                        rowIndex
                      )
                        ? activeMultiSelectRowArray.filter(
                            (item) => item !== rowIndex
                          )
                        : (activeMultiSelectRowArray && [
                            ...activeMultiSelectRowArray,
                          ]) ||
                          [];

                      if (!activeMultiSelectRowArray?.includes(rowIndex)) {
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
              },
            },
            ...defaultColumns,
          ];
        }
        return [...defaultColumns];
      });
    }
  );
  const { globalFilter, pageIndex } = state;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { isStickyHeader, isStickyColumns } = meta?.stickyItems;
  const [customContentArray] = useState([]);
  const pageDetails = {
    canPreviousPage,
    canNextPage,
    nextPage,
    pageOptions,
    pageIndex,
    paginateDynamic,
    previousPage,
  };
  const rowTypeToMap = paginateDynamic ? rows : page;
  const [isSortedDesc, setIsSortedDesc] = useState(false);

  useEffect(() => {
    setTotalRows(rowTypeToMap.length);
  });

  useEffect(() => {
    if (initialState?.hiddenColumns) {
      setHiddenColumns(initialState?.hiddenColumns);
    }
  }, [initialState?.hiddenColumns]);

  useEffect(() => {
    if (!globalColumns && count === 0) {
      setGlobalColumns(headerGroups[0].headers);
      return;
    }

    if (
      globalColumns?.length !== headerGroups?.[0]?.headers?.length &&
      count === 0
    ) {
      setGlobalColumns(headerGroups[0].headers);
    }
  });

  useLayoutEffect(() => {
    const currentHeaderStyles = headerGroups?.[0].headers.map(
      (item) => item.getHeaderProps().style
    );

    if (
      JSON.stringify(globalResizeStyles) !==
        JSON.stringify(currentHeaderStyles) &&
      count === 0
    ) {
      setGlobalResizeStyles(currentHeaderStyles);
    }
  });

  return (
    <ThemeContext.Consumer key={count}>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          {
            isGrouped,
            frozenHeader,
            frozenHeaderCount,
            isStickyColumns,
            isStickyHeader,
            customStylesheet,
          },
          resolvedRoles,
          metadata
        );
        return (
          <>
            {meta.globalFilter && count === 0 && (
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}>
                {meta.globalFilter}
              </GlobalFilter>
            )}
            {meta.columnShowHideComponent && count === 0 && (
              <ColumnShowHide
                toggleHideAllColumnsProps={getToggleHideAllColumnsProps}
                allColumns={allColumns}
                columnHeaderArray={columnHeaderArray}
                setColumnHeaderArray={setColumnHeaderArray}
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
              {...tableSpreadProps}
            >
              <div
                className={css(styles.higTableHeaderWrapper)}
                ref={setHeaderRef}
              >
                {count === 0 &&
                  headerGroups.map((headerGroup, headerGroupIndex) => (
                    <div
                      {...headerGroup.getHeaderGroupProps()}
                      {...headerRowSpreadProps}
                      className={css(styles.higTableHeaderRow)}
                      key={`header-group-${headerGroupIndex}`}
                    >
                      {headerGroup.headers.map((column, columnIndex) => {
                        const headerIndex = columnHeaderArray.indexOf(
                          column.Header
                        );
                        const headerIndexOffset = rowSelection ? 1 : 0;
                        const resizingStyles =
                          column.canResize ||
                          globalColumns?.[headerIndex + headerIndexOffset]
                            ?.canResize
                            ? stylesheet(
                                {
                                  isResizing:
                                    column.isResizing ||
                                    globalColumns?.[
                                      headerIndex + headerIndexOffset
                                    ]?.isResizing,
                                  customStylesheet,
                                },
                                resolvedRoles,
                                metadata
                              )
                            : null;

                        return (
                          <TableHeaderCell
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            columnSelection={columnSelection}
                            activeMultiSelectColumn={activeMultiSelectColumn}
                            columnHeaderArray={columnHeaderArray}
                            headerBackgroundColor={headerBackgroundColor}
                            headerIndex={headerIndex}
                            isSelectableHeader={!column.headers}
                            isSortPassed={meta.sortColumns}
                            key={`table-header-cell-${columnIndex}`}
                            selected={
                              activeColumnIndex === headerIndex &&
                              activeRowIndex === -1
                            }
                            setActiveMultiSelectColumn={
                              setActiveMultiSelectColumn
                            }
                            customStylesheet={customStylesheet}
                            globalResizeStyles={globalResizeStyles}
                            onSortClick={onSortClick}
                            rowSelection={rowSelection}
                            setIsSortedDesc={setIsSortedDesc}
                            isSortedDesc={isSortedDesc}
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
                              onClick={(event) => event.stopPropagation()}
                            />
                            {meta.sortColumns && column.id !== "selection" ? (
                              <SortColumns
                                isSorted={column.isSorted}
                                isSortedDesc={isSortedDesc}
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
              {isGrouped && meta.dataGroupComponent && (
                <DataGroupComponent
                  styles={styles}
                  groupNames={groupNames}
                  count={count}
                  data={data}
                  dataGroup={
                    <TableDataContents
                      getTableBodyProps={getTableBodyProps}
                      styles={styles}
                      rowTypeToMap={rowTypeToMap}
                      alternateBg={alternateBg}
                      customContentArray={customContentArray}
                      customStylesheet={customStylesheet}
                      resolvedRoles={resolvedRoles}
                      metadata={metadata}
                      prepareRow={prepareRow}
                      rowSpreadProps={rowSpreadProps}
                      columnHeaderArray={columnHeaderArray}
                      getOffset={getOffset}
                      activeMultiSelectColumn={activeMultiSelectColumn}
                      activeMultiSelectRowArray={activeMultiSelectRowArray}
                      activeColumnIndex={activeColumnIndex}
                      activeRowIndex={activeRowIndex}
                      setActiveColumnIndex={setActiveColumnIndex}
                      setActiveMultiSelectColumn={setActiveMultiSelectColumn}
                      setActiveRowIndex={setActiveRowIndex}
                      onTableCellClick={onTableCellClick}
                      setAllMultiSelectedRows={setAllMultiSelectedRows}
                      setActiveMultiSelectRowArray={
                        setActiveMultiSelectRowArray
                      }
                      paginateDynamic={paginateDynamic}
                      rows={rows}
                      meta={meta}
                      page={page}
                      isGrouped={isGrouped}
                      tableObject={tableObject}
                      globalResizeStyles={globalResizeStyles}
                      globalColumns={globalColumns}
                      rowSelection={rowSelection}
                    />
                  }
                  activeMultiSelectRowArray={activeMultiSelectRowArray}
                  setActiveMultiSelectRowArray={setActiveMultiSelectRowArray}
                  allMultiSelectedRows={allMultiSelectedRows}
                  setAllMultiSelectedRows={setAllMultiSelectedRows}
                  getOffset={getOffset}
                  checkboxToggle={checkboxToggle}
                  setCheckboxToggle={setCheckboxToggle}
                >
                  {meta.dataGroupComponent}
                </DataGroupComponent>
              )}
              {!isGrouped && (
                <TableDataContents
                  getTableBodyProps={getTableBodyProps}
                  styles={styles}
                  rowTypeToMap={rowTypeToMap}
                  alternateBg={alternateBg}
                  customContentArray={customContentArray}
                  customStylesheet={customStylesheet}
                  resolvedRoles={resolvedRoles}
                  metadata={metadata}
                  prepareRow={prepareRow}
                  rowSpreadProps={rowSpreadProps}
                  columnHeaderArray={columnHeaderArray}
                  getOffset={getOffset}
                  activeMultiSelectColumn={activeMultiSelectColumn}
                  activeMultiSelectRowArray={activeMultiSelectRowArray}
                  activeColumnIndex={activeColumnIndex}
                  activeRowIndex={activeRowIndex}
                  setActiveColumnIndex={setActiveColumnIndex}
                  setActiveMultiSelectColumn={setActiveMultiSelectColumn}
                  setActiveRowIndex={setActiveRowIndex}
                  onTableCellClick={onTableCellClick}
                  setAllMultiSelectedRows={setAllMultiSelectedRows}
                  setActiveMultiSelectRowArray={setActiveMultiSelectRowArray}
                  paginateDynamic={paginateDynamic}
                  rows={rows}
                  meta={meta}
                  page={page}
                  isGrouped={isGrouped}
                  tableObject={tableObject}
                  globalResizeStyles={globalResizeStyles}
                  globalColumns={globalColumns}
                  rowSelection={rowSelection}
                />
              )}
            </div>
            {!paginateDynamic &&
              meta.paginationComponent &&
              count === dataArray.length - 1 && (
                <Pagination pageDetails={pageDetails}>
                  {meta.paginationComponent}
                </Pagination>
              )}
            {paginateDynamic &&
              meta.paginationDynamic &&
              count === dataArray.length - 1 && (
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

RenderTable.propTypes = {
  params: PropTypes.any,
  passedData: PropTypes.any,
  passedCount: PropTypes.any,
};

export default RenderTable;
