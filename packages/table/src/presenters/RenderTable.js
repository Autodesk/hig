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
    otherProps,
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
    setAllMultiSelectedRows,
    getGlobalColumns,
    setGlobalColumns,
    getGlobalResizeStyles,
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
                    checked={getAllMultiSelectedRows}
                    indeterminate={
                      !!getActiveMultiSelectRowArray?.length &&
                      !getAllMultiSelectedRows
                    }
                    onClick={(event) => {
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
                    checked={getActiveMultiSelectRowArray?.includes(rowIndex)}
                    onClick={(event) => {
                      event.stopPropagation();
                      const newArray = getActiveMultiSelectRowArray?.includes(
                        rowIndex
                      )
                        ? getActiveMultiSelectRowArray.filter(
                            (item) => item !== rowIndex
                          )
                        : (getActiveMultiSelectRowArray && [
                            ...getActiveMultiSelectRowArray,
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
    previousPage,
  };
  const rowTypeToMap = paginateDynamic ? rows : page;
  const [isSortedDesc, setIsSortedDesc] = useState(false);

  useEffect(() => {
    setTotalRows(rowTypeToMap.length);
  });

  useEffect(() => {
    if (!getGlobalColumns && count === 0) {
      setGlobalColumns(headerGroups[0].headers);
    }
  });

  useLayoutEffect(() => {
    const currentHeaderStyles = headerGroups?.[0].headers.map(
      (item) => item.getHeaderProps().style
    );

    if (
      JSON.stringify(getGlobalResizeStyles) !==
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
                {count === 0 &&
                  headerGroups.map((headerGroup, headerGroupIndex) => (
                    <div
                      {...headerGroup.getHeaderGroupProps()}
                      {...headerRowSpreadProps}
                      className={css(styles.higTableHeaderRow)}
                      key={`header-group-${headerGroupIndex}`}
                    >
                      {headerGroup.headers.map((column, columnIndex) => {
                        const headerIndex = getColumnHeaderArray.indexOf(
                          column.Header
                        );
                        const resizingStyles =
                          column.canResize ||
                          getGlobalColumns?.[headerIndex + 1]?.canResize
                            ? stylesheet(
                                {
                                  isResizing:
                                    column.isResizing ||
                                    getGlobalColumns?.[headerIndex + 1]
                                      ?.isResizing,
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
                            getActiveMultiSelectColumn={
                              getActiveMultiSelectColumn
                            }
                            getColumnHeaderArray={getColumnHeaderArray}
                            headerBackgroundColor={headerBackgroundColor}
                            headerIndex={headerIndex}
                            isSelectableHeader={!column.headers}
                            isSortPassed={meta.sortColumns}
                            key={`table-header-cell-${columnIndex}`}
                            selected={
                              getActiveColumnIndex === headerIndex &&
                              getActiveRowIndex === -1
                            }
                            setActiveMultiSelectColumn={
                              setActiveMultiSelectColumn
                            }
                            customStylesheet={customStylesheet}
                            getGlobalResizeStyles={getGlobalResizeStyles}
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
                      getColumnHeaderArray={getColumnHeaderArray}
                      getOffset={getOffset}
                      getActiveMultiSelectColumn={getActiveMultiSelectColumn}
                      getActiveMultiSelectRowArray={
                        getActiveMultiSelectRowArray
                      }
                      getActiveColumnIndex={getActiveColumnIndex}
                      getActiveRowIndex={getActiveRowIndex}
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
                      getGlobalResizeStyles={getGlobalResizeStyles}
                      getGlobalColumns={getGlobalColumns}
                      rowSelection={rowSelection}
                    />
                  }
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
                  getColumnHeaderArray={getColumnHeaderArray}
                  getOffset={getOffset}
                  getActiveMultiSelectColumn={getActiveMultiSelectColumn}
                  getActiveMultiSelectRowArray={getActiveMultiSelectRowArray}
                  getActiveColumnIndex={getActiveColumnIndex}
                  getActiveRowIndex={getActiveRowIndex}
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
                  getGlobalResizeStyles={getGlobalResizeStyles}
                  getGlobalColumns={getGlobalColumns}
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
