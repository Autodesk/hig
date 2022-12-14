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
  useBlockLayout,
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

import { MultiRowSelectCheckbox } from '../components/MultiRowSelectCheckbox';

import stylesheet from "./stylesheet";

const getColumnInfo = (column) => {
  const { id, Header, width, isVisible, isResizing } = column;
  return {
    id,
    Header,
    width,
    isVisible,
    isResizing,
  };
};

const RenderTable = ({ params, passedData, passedCount }) => {
  const {
    dataArray,
    isGrouped,
    columns,
    meta,
    groupNames,
    hiddenColumns,
    defaultSelectedRows,
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
    onApplication,
    onColumnWidthChanged,
    enableBlockLayout,
    controlRowPreSelect,
    customStylesheet,
    tableGroupSelectAll: { checkboxToggle = [], setCheckboxToggle = () => {} },
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
      const totalSubRowsArray = newDataArray[i].map(
        (row) => row.subRows?.length
      );
      let totalSubRows = 0;
      totalSubRowsArray.forEach((subRowTotal) => {
        totalSubRows += subRowTotal;
      });
      totalSubRows = Number.isNaN(totalSubRows) ? 0 : totalSubRows;
      totalArray.push(newDataArray[i].length + totalSubRows);
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
  const checkEnableBlockLayout = () =>
    enableBlockLayout ? useBlockLayout : useFlexLayout;
  const layoutTypeWrap = isGrouped ? useFlexLayout : checkEnableBlockLayout();
  
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
    selectedFlatRows,
    flatRows,
  } = useTable(
    { columns, data, defaultColumn },
    useResizeColumns,
    layoutTypeWrap,
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
              Header: ({ state: {selectedRowIds}, getToggleAllRowsSelectedProps }) => {
                const selectedRowKeys = Object.keys(selectedRowIds).map(key => key);

                let rowObjectTrack = {};
                flatRows.map((row, index) => {
                  rowObjectTrack = {...rowObjectTrack, [row.id]: index}
                }) 
                const selectArray = [];

                selectedRowKeys.forEach(key => {
                  selectArray.push(rowObjectTrack[key])
                }) 
                return (
                  <div>
                    <MultiRowSelectCheckbox 
                      {...getToggleAllRowsSelectedProps()} 
                      selectArray={selectArray}
                      setActiveMultiSelectRowArray={setActiveMultiSelectRowArray}
                    />
                  </div>
                );
              },
              // eslint-disable-next-line
              Cell: (props) => {
                const {row, state: {selectedRowIds}, ...rest} = props;

                const rowTypeToMap = paginateDynamic ? rows : page;
                const rowIndex = rowTypeToMap.indexOf(row);

                const selectedRowKeys = Object.keys(selectedRowIds).map(key => key);

                let rowObjectTrack = {};
                flatRows.map((row, index) => {
                  rowObjectTrack = {...rowObjectTrack, [row.id]: index}
                }) 
                const selectArray = [];

                selectedRowKeys.forEach(key => {
                  selectArray.push(rowObjectTrack[key])
                }) 

                const test = rows.map((item, index) => {
                  if (item.id === row.id) {
                    return index;
                  } else {
                    return null;
                  }
                });

                const indexes = test.filter((item) => item);

                // const test = flatRows.filter((item, index) => item.id === row.id);
                console.log(indexes);

                // console.log('selectArray outisde', selectArray)
      // console.log('rendertable');
      // console.log(state);
      // console.log(props);
      // console.log(flatRows);
      // console.log(selectArray);
      // console.log(row.id);
      // console.log(selectedRowIds);
                return (
                  <div>
                    <MultiRowSelectCheckbox
                      {...row.getToggleRowSelectedProps()}
                      rowIndex={indexes[0]}
                      rowIndex={rowIndex}
                      selectArray={selectArray}
                      setActiveMultiSelectRowArray={setActiveMultiSelectRowArray}
                    />
                  </div>
                )
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
  const [holdTableRender, setHoldTableRender] = useState(!!hiddenColumns);
  
  if (hiddenColumns) {
    setTimeout(() => {
      setHoldTableRender(false);
    }, 1000);
  }

  useEffect(() => {
    setTotalRows(flatRows?.length);
  }, []);

  const defaultSelectedRowsDeps = controlRowPreSelect
    ? defaultSelectedRows
    : "";

  useEffect(() => {
    // console.log('render table use effect');
    // console.log('getTableProps', getTableProps());
    // console.log('getTableBodyProps', getTableBodyProps());
    // console.log(state);
  });

  useEffect(() => {
    if (defaultSelectedRows && defaultSelectedRows?.length > 0) {
      const rowLimit = tableObject.data.length - 1;
      const allArray = tableObject.data
        ?.map((row, index) => {
          if (defaultSelectedRows.includes(index) && index <= rowLimit) {
            return index;
          }
          return null;
        })
        .filter((element) => element !== null);

      setActiveMultiSelectRowArray(allArray);
    }
  }, [defaultSelectedRowsDeps]);

  useEffect(() => {
    if (controlRowPreSelect) {
      controlRowPreSelect(activeMultiSelectRowArray);
    }
  }, [activeMultiSelectRowArray]);

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
              className={css(
                holdTableRender ? styles.higTableHold : styles.higTable
              )}
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
                            columnInfo={getColumnInfo(column)}
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
                            onColumnWidthChanged={onColumnWidthChanged}
                            rowSelection={rowSelection}
                            setIsSortedDesc={setIsSortedDesc}
                            isSortedDesc={isSortedDesc}
                            title={null}
                          >
                            <div
                              className={css(
                                column.id !== "selection"
                                  ? styles.headerHolder
                                  : styles.headerHolderSelection
                              )}
                            >
                              {column.canGroupBy && meta.groupElements ? (
                                <span
                                  {...column.getGroupByToggleProps()}
                                  title={null}
                                >
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
                count={count}
                interalSelectedRows={state?.selectedRowIds}
              />
            </div>
            <pre>
              <code>
                {JSON.stringify(
                  {
                    selectedFlatRows: selectedFlatRows.map((row) => row.original),
                  },
                  null,
                  2,
                )}
              </code>
            </pre>
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
  row: PropTypes.any,
};

export default RenderTable;
