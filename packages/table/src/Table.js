import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";
import TableWithSticky from "./TableWithSticky";
import TableBehavior from './behaviors/TableBehavior';

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
  } = props;

  return(
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
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
          }) =>
            <TableWithSticky
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
            />
          }
        </TableBehavior>
      )}
    </ThemeContext.Consumer>
  );
};

export default Table;
