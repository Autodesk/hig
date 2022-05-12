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
    stylesheet,
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
            getActiveColumnIndex,
            getActiveMultiSelectColumn,
            getActiveMultiSelectRowArray,
            getActiveRowIndex,
            getAllMultiSelectedRows,
            getColumnHeaderArray,
            handleKeyDown,
            setActiveColumnIndex,
            setActiveMultiSelectColumn,
            setActiveMultiSelectRowArray,
            setActiveRowIndex,
            setAllMultiSelectedRows,
            setHeaderRef,
            setTableRef,
            setTotalRows,
            getGlobalColumns,
            setGlobalColumns,
            getGlobalResizeStyles,
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
              getActiveColumnIndex={getActiveColumnIndex}
              getActiveMultiSelectColumn={getActiveMultiSelectColumn}
              getActiveMultiSelectRowArray={getActiveMultiSelectRowArray}
              getActiveRowIndex={getActiveRowIndex}
              getAllMultiSelectedRows={getAllMultiSelectedRows}
              getColumnHeaderArray={getColumnHeaderArray}
              handleKeyDown={handleKeyDown}
              setActiveColumnIndex={setActiveColumnIndex}
              setActiveMultiSelectColumn={setActiveMultiSelectColumn}
              setActiveMultiSelectRowArray={setActiveMultiSelectRowArray}
              setActiveRowIndex={setActiveRowIndex}
              setAllMultiSelectedRows={setAllMultiSelectedRows}
              setHeaderRef={setHeaderRef}
              setTableRef={setTableRef}
              setTotalRows={setTotalRows}
              tableSpreadProps={tableSpreadProps}
              paginateDynamic={paginateDynamic}
              onTableCellClick={onTableCellClick}
              onSortClick={onSortClick}
              stylesheet={stylesheet}
              getGlobalColumns={getGlobalColumns}
              setGlobalColumns={setGlobalColumns}
              getGlobalResizeStyles={getGlobalResizeStyles}
              setGlobalResizeStyles={setGlobalResizeStyles}
            />
          )}
        </TableBehavior>
      )}
    </ThemeContext.Consumer>
  );
};

Table.propTypes = {
  alternateBg: PropTypes.bool,
  headerBackgroundColor: PropTypes.string,
  columnSelection: PropTypes.bool,
  frozenHeader: PropTypes.bool,
  frozenHeaderCount: PropTypes.number,
  headerRowSpreadProps: PropTypes.any,
  rowSelection: PropTypes.bool,
  rowSpreadProps: PropTypes.any,
  tableObject: PropTypes.any.isRequired,
  tableSpreadProps: PropTypes.any,
  paginateDynamic: PropTypes.bool,
  onTableCellClick: PropTypes.func,
  onSortClick: PropTypes.func,
  stylesheet: PropTypes.func,
};

export default Table;
