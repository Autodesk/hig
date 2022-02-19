import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination, useFilters, useRowSelect, useResizeColumns, useFlexLayout } from "react-table";
import { useSticky } from 'react-table-sticky';
import { format } from "date-fns";
import isValid from "date-fns/isValid";
import { VariableSizeList } from 'react-window'

import { ThemeContext } from "@hig/theme-context";
import Checkbox from '@hig/checkbox';

import GlobalFilter from './GlobalFilter';
import TableDataCell from './TableDataCell';
import TableHeaderCell from './TableHeaderCell';
import ExpandedContent from './ExpandedContent';
import ColumnShowHide from './ColumnShowHide';
import SortColumns from './SortColumns';
import Pagination from './Pagination';

import stylesheet from "./presenters/stylesheet";

import {useWindowSize} from '@react-hook/window-size';

const renderCellData = cell => {
  const cellDate = new Date(cell.render("Cell").props.value);
  const date = isValid(cellDate) ? format(cellDate, "dd/MM/yyyy") : 'invalid date';
  return cell.column.Header === "Date"
    ? date
    : cell.render("Cell");
};

const TableWithSticky = ({
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
  const [windowWidth, windowHeight] = useWindowSize();
  const { columns, data, meta } = useMemo(
    () => tableObject,
    [tableObject]
  );

  // const defaultColumn = useMemo(() => {
  //   return {
  //     Filter: props => <ColumnFilter passedProps={props} children={meta.columnFilter} />,
  //   }
  // }, []);
  
  const defaultColumn = React.useMemo(
      () => ({
          minswidth: 30,
          width: 150,
          maxWidth: 400,
      })
  )

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
    selectedFlatRows,
    allColumns,
    getToggleHideAllColumnsProps,
    state: { expanded }
  } =
    useTable(
      { columns, data, defaultColumn },
      useResizeColumns,
      useFlexLayout,
      useSticky, 
      useFilters, 
      useGlobalFilter, 
      useSortBy, 
      usePagination,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => {
          if (rowSelection) {
            // const rowTypeToMap = paginateDynamic ? rows : page;
            return [
              {
                id: 'selection',
                disableResizing: true,
                minWidth: 35,
                width: 35,
                maxWidth: 35,
                Header: ({ getToggleAllRowsSelectedProps }) => (
                  <Checkbox
                    checked={getAllMultiSelectedRows}
                    indeterminate={!!getActiveMultiSelectRowArray?.length && !getAllMultiSelectedRows}
                    onClick={(event) => {
                      event.stopPropagation();
                      const allArray = tableObject.data.map((row, index) => index);
                      const emptyArray = [];

                      if (getAllMultiSelectedRows || getActiveMultiSelectRowArray?.length > 0) {
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

                  return(
                    <Checkbox
                      checked={getActiveMultiSelectRowArray?.includes(rowIndex)}
                      onClick={(event) => {
                        event.stopPropagation();
                        const newArray = getActiveMultiSelectRowArray?.includes(rowIndex)
                          ? getActiveMultiSelectRowArray.filter(item => item !== rowIndex)
                          : getActiveMultiSelectRowArray && [...getActiveMultiSelectRowArray] || [];

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
              ...columns
            ];
          }
          return [...columns];
        })
      },
      );

  const { globalFilter, pageIndex } = state;
  const {isStickyHeader, isStickyColumns} = meta?.stickyItems;

  const handleStickyToggle = () => {
    const stickyObject = {};
    if (isStickyColumns) {
     stickyObject.width = "100%";
    }

    if (isStickyHeader) {
      // stickyObject.height = windowHeight;
    }

    return stickyObject;
  }

  const [customContentArray, setCustomContentArray] = useState([]);
  const handleRowExpandClick = index => {
    let localContentCopy = [...customContentArray];
    localContentCopy[index] = localContentCopy[index] === undefined ? true : !localContentCopy[index];
    setCustomContentArray(localContentCopy);
  }

  const getItemSize = () => {
    return 35;
  }

  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index]
      prepareRow(row)
      return (
        <div className="row-wrapper" /* onClick={() => handleRowExpandClick(index)} */>
          <div {...row.getRowProps()} className="tr" {...rowSpreadProps}>
            {row.cells.map(cell => {
              const cellColumnIndex = getColumnHeaderArray.indexOf(cell.column.Header);
              const cellRowIndex = cell.row.index;

              return (
                <TableDataCell
                  {...cell.getCellProps()}
                  cellColumnIndex={cellColumnIndex}
                  cellRowIndex={cellRowIndex}
                  getColumnHeaderArray={getColumnHeaderArray}
                  isLast={cellRowIndex + 1 === tableObject.data.length}
                  multiSelectedColumn={getActiveMultiSelectColumn === cellColumnIndex}
                  multiSelectedRow={getActiveMultiSelectRowArray?.includes(cellRowIndex)}
                  selected={getActiveColumnIndex === cellColumnIndex && getActiveRowIndex === cellRowIndex}
                  setActiveColumnIndex={setActiveColumnIndex}
                  setActiveMultiSelectColumn={setActiveMultiSelectColumn}
                  setActiveRowIndex={setActiveRowIndex}
                >
                  {renderCellData(cell)}
                </TableDataCell>
              );
            })}
          </div>
          {meta.expandedComponent && <ExpandedContent curItem={customContentArray[index]}>{meta.expandedComponent}</ExpandedContent>}
        </div>
      )
    },
    [prepareRow, rows]
  )
  
  const pageDetails = {
    previousPage: previousPage, 
    nextPage: nextPage, 
    canPreviousPage: canPreviousPage, 
    canNextPage: canNextPage,
    pageOptions: pageOptions,
    pageIndex: pageIndex,
    paginateDynamic: paginateDynamic,
  }

  const rowTypeToMap = paginateDynamic ? rows : page;

  useEffect(() => {
    setTotalRows(rowTypeToMap.length);
  });

  return (
    <ThemeContext.Consumer>
    {({ resolvedRoles, metadata }) => {
    const styles = stylesheet({frozenHeader, frozenHeaderCount, isStickyColumns, isStickyHeader}, resolvedRoles);
      return (
        <>
          {meta.globalFilter && <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} children={meta.globalFilter} />}
          {meta.columnShowHideComponent &&
            <ColumnShowHide 
              toggleHideAllColumnsProps={getToggleHideAllColumnsProps}
              allColumns={allColumns} 
            >
              {meta.columnShowHideComponent}
            </ColumnShowHide>
          }
            <div
              {...getTableProps()}
              css={styles.higTable}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              ref={setTableRef}
              tabIndex={tableSpreadProps?.tabIndex || 0}
              style={handleStickyToggle()}
              {...tableSpreadProps}
            >
              <div css={styles.higTableHeaderWrapper} ref={setHeaderRef}>
                {headerGroups.map(headerGroup => (
                  <div {...headerGroup.getHeaderGroupProps()} {...headerRowSpreadProps} css={styles.higTableHeaderRow}>
                    {headerGroup.headers.map(column => {
                      const resizingStyles = column.canResize
                        ? stylesheet({isResizing: column.isResizing}, resolvedRoles, metadata)
                        : null;
                      const headerIndex = getColumnHeaderArray.indexOf(column.Header);

                      return(
                        <TableHeaderCell
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            columnSelection={columnSelection}
                            getActiveMultiSelectColumn={getActiveMultiSelectColumn}
                            getColumnHeaderArray={getColumnHeaderArray}
                            headerBackgroundColor={headerBackgroundColor}
                            headerIndex={headerIndex}
                            isSelectableHeader={!column.headers}
                            isSortPassed={meta.sortColumns}
                            selected={getActiveColumnIndex === headerIndex && getActiveRowIndex === -1}
                            setActiveMultiSelectColumn={setActiveMultiSelectColumn}
                        >
                          {column.render("Header")}
                          {// column.canResize && (
                            <div
                              {...(column.canResize ? {...column.getResizerProps()} : {})}
                              css={resizingStyles?.higTableHeaderResizer}
                              onClick={event => event.stopPropagation()}
                            />
                          /* ) */}
                          {/* console.log('column', column) */}
                          {meta.sortColumns && column.id !== 'selection'
                            ? (<SortColumns isSorted={column.isSorted} isSortedDesc={column.isSortedDesc}>{meta.sortColumns}</SortColumns>)
                            : ''
                          }
                          {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                        </TableHeaderCell>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div {...getTableBodyProps()} css={styles.higTableBody}>
                {/* <VariableSizeList
                  height={windowHeight}
                  itemCount={rows.length}
                  itemSize={getItemSize}
                  width={windowWidth}
                >
                  {RenderRow}
                </VariableSizeList> */}
                {rowTypeToMap.map((row, rowIndex) => {
                    const rowStyles =
                      stylesheet(
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
                      <div /* onClick={() => handleRowExpandClick(i)} */>
                        <div {...row.getRowProps()} css={rowStyles.higTableRow} {...rowSpreadProps}>
                          {row.cells.map(cell => {
                            const cellColumnIndex = getColumnHeaderArray.indexOf(cell.column.Header);
                            const cellRowIndex = rowIndex;
                            const totalRows = rowTypeToMap.length || tableObject.data.length;

                            return (
                              <TableDataCell
                                {...cell.getCellProps()}
                                cellColumnIndex={cellColumnIndex}
                                cellRowIndex={cellRowIndex}
                                getColumnHeaderArray={getColumnHeaderArray}
                                isLast={rowIndex + 1 === totalRows}
                                isResizing={cell?.column?.isResizing}
                                multiSelectedColumn={getActiveMultiSelectColumn === cellColumnIndex}
                                multiSelectedColumnLeft={getActiveMultiSelectColumn !== null && getActiveMultiSelectColumn - 1 === cellColumnIndex}
                                multiSelectedRow={getActiveMultiSelectRowArray?.includes(cellRowIndex)}
                                multiSelectedRowBottom={getActiveMultiSelectRowArray?.includes(cellRowIndex - 1)}
                                // multiSelectedRowTop={false}
                                selected={getActiveColumnIndex === cellColumnIndex && getActiveRowIndex === cellRowIndex}
                                selectedBottom={getActiveColumnIndex === cellColumnIndex && getActiveRowIndex + 1 === cellRowIndex && getActiveRowIndex !== -1}
                                selectedLeft={getActiveColumnIndex - 1 === cellColumnIndex && getActiveRowIndex === cellRowIndex}
                                // selectedRight={getActiveColumnIndex + 1 === cellColumnIndex && getActiveRowIndex === cellRowIndex}
                                // selectedTop={getActiveColumnIndex === cellColumnIndex && getActiveRowIndex - 1 === cellRowIndex && getActiveRowIndex !== -1}
                                setActiveColumnIndex={setActiveColumnIndex}
                                setActiveMultiSelectColumn={setActiveMultiSelectColumn}
                                setActiveRowIndex={setActiveRowIndex}
                              >
                                {renderCellData(cell)}
                              </TableDataCell>
                            );
                          })}
                        </div>
                        {meta.expandedComponent && <ExpandedContent expandedContentStyles={rowStyles}>{meta.expandedComponent}</ExpandedContent>}
                      </div>
                    );
                  })}
              </div>
            </div>
            {!paginateDynamic && meta.paginationComponent && <Pagination pageDetails={pageDetails}>{meta.paginationComponent}</Pagination>}
            {paginateDynamic && meta.paginationDynamic && <Pagination pageDetails={pageDetails}>{meta.paginationDynamic}</Pagination>}
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TableWithSticky;
