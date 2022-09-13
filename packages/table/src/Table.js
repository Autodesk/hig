/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import TablePresenter from "./presenters/TablePresenter";
import TableBehavior from "./behaviors/TableBehavior";

const Table = (props) => {
  const {
    alternateBg,
    headerBackgroundColor,
    columnSelection,
    frozenHeader,
    frozenHeaderCount,
    headerRowSpreadProps,
    rowSelection,
    rowSpreadProps,
    tableObject,
    tableSpreadProps,
    paginateDynamic,
    onTableCellClick,
    onSortClick,
    onApplication,
    enableBlockLayout,
    stylesheet,
    tableGroupSelectAll = {},
  } = props;

  return (
    <ThemeContext.Consumer>
      {/* eslint-disable-next-line */}
      {({ resolvedRoles, metadata }) => (
        <TableBehavior
          columnSelection={columnSelection}
          frozenHeader={frozenHeader}
          rowHeight={resolvedRoles["table.cell.minHeight"]}
          rowSelection={rowSelection}
          tableObject={tableObject}
        >
          {({
            activeColumnIndex,
            activeMultiSelectColumn,
            activeMultiSelectRowArray,
            activeRowIndex,
            allMultiSelectedRows,
            columnHeaderArray,
            handleKeyDown,
            setActiveColumnIndex,
            setActiveMultiSelectColumn,
            setActiveMultiSelectRowArray,
            setActiveRowIndex,
            setAllMultiSelectedRows,
            setColumnHeaderArray,
            setHeaderRef,
            setTableRef,
            setTotalRows,
            globalColumns,
            setGlobalColumns,
            globalResizeStyles,
            setGlobalResizeStyles,
          }) => (
            <TablePresenter
              alternateBg={alternateBg}
              columnSelection={columnSelection}
              frozenHeader={frozenHeader}
              frozenHeaderCount={frozenHeaderCount}
              headerBackgroundColor={headerBackgroundColor}
              headerRowSpreadProps={headerRowSpreadProps}
              rowSpreadProps={rowSpreadProps}
              rowSelection={rowSelection}
              tableObject={tableObject}
              activeColumnIndex={activeColumnIndex}
              activeMultiSelectColumn={activeMultiSelectColumn}
              activeMultiSelectRowArray={activeMultiSelectRowArray}
              activeRowIndex={activeRowIndex}
              allMultiSelectedRows={allMultiSelectedRows}
              columnHeaderArray={columnHeaderArray}
              handleKeyDown={handleKeyDown}
              setActiveColumnIndex={setActiveColumnIndex}
              setActiveMultiSelectColumn={setActiveMultiSelectColumn}
              setActiveMultiSelectRowArray={setActiveMultiSelectRowArray}
              setActiveRowIndex={setActiveRowIndex}
              setAllMultiSelectedRows={setAllMultiSelectedRows}
              setColumnHeaderArray={setColumnHeaderArray}
              setHeaderRef={setHeaderRef}
              setTableRef={setTableRef}
              setTotalRows={setTotalRows}
              tableSpreadProps={tableSpreadProps}
              paginateDynamic={paginateDynamic}
              onTableCellClick={onTableCellClick}
              onSortClick={onSortClick}
              onApplication={onApplication}
              enableBlockLayout={enableBlockLayout}
              stylesheet={stylesheet}
              globalColumns={globalColumns}
              setGlobalColumns={setGlobalColumns}
              globalResizeStyles={globalResizeStyles}
              setGlobalResizeStyles={setGlobalResizeStyles}
              tableGroupSelectAll={tableGroupSelectAll}
            />
          )}
        </TableBehavior>
      )}
    </ThemeContext.Consumer>
  );
};

Table.defaultProps = {
  paginateDynamic: true,
};

Table.propTypes = {
  /**
   * Alternating background stripes
   */
  alternateBg: PropTypes.bool,
  /**
   * Turns on column selection
   */
  columnSelection: PropTypes.bool,
  /**
   * Turns on a "sticky" header row for scrolling
   */
  frozenHeader: PropTypes.bool,
  /**
   * Set how many rows to be visible when the header is frozen.
   * Default is 50 rows.
   */
  frozenHeaderCount: PropTypes.number,
  /**
   * The header background color has an opacity so the color should
   * be dictated by the surface it is on. But for scrolling for columns
   * to not show beneath the columns and opaque background is needed
   * between the content and header, this prop allows you to set that
   * background.
   * Default is colorScheme.surface.level100
   */
  headerBackgroundColor: PropTypes.string,
  /**
   * Additional props that will be spread to each header row's root element
   */
  headerRowSpreadProps: PropTypes.any,
  /**
   * Called when table sort is clicked
   */
  onSortClick: PropTypes.func,
  /**
   * Called when a table cell is clicked
   */
  onTableCellClick: PropTypes.func,
  /**
   * Controls whether to show all table rows or allow for user to
   * set up pagination
   */
  paginateDynamic: PropTypes.bool,
  /**
   * Turns on row selection
   */
  rowSelection: PropTypes.bool,
  /**
   * Additional props that will be spread to each row's root element
   */
  rowSpreadProps: PropTypes.any,
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
  /**
   * Data object for the table contents
   */
  tableObject: PropTypes.any.isRequired,
  /**
   * Additional props that will be spread to the table's root element
   */
  tableSpreadProps: PropTypes.any,
  /**
   * Optional prop for grouped data, if present will
   * add functionality to select all by data type group
   */
  tableGroupSelectAll: PropTypes.shape({
    /**
     * Array that tracks toggle state for each group checkbox
     */
    checkboxToggle: PropTypes.arrayOf(PropTypes.bool),
    /**
     * Method that sets toggle value on/off for group
     */
    setCheckboxToggle: PropTypes.func,
  }),
  /**
   * Optional prop for external Menu
   * if present will pass back group data
   */
  onApplication: PropTypes.func,
  /**
   * Optional prop to set table layout
   */
  enableBlockLayout: PropTypes.bool,
};

export default Table;
