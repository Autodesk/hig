/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import RenderTable from "./RenderTable";

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
  onTableCellClick,
  onSortClick,
  onApplication,
  enableBlockLayout,
  stylesheet: customStylesheet,
  tableGroupSelectAll,
  ...otherProps
}) => {
  const {
    columns,
    data: dataArray,
    meta,
    groupNames = [],
    hiddenColumns,
    defaultSelectedRows,
  } = useMemo(() => tableObject, [tableObject]);
  const isGrouped = Array.isArray(dataArray[0]);
  const passedParams = {
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
    customStylesheet,
    tableGroupSelectAll,
    enableBlockLayout,
    otherProps,
  };

  if (!isGrouped) {
    return <RenderTable params={passedParams} />;
  }
  const tableRender = dataArray?.map((data, count) => (
    <RenderTable
      params={passedParams}
      passedData={data}
      passedCount={count}
      key={count}
    />
  ));
  return tableRender;
};

TablePresenter.propTypes = {
  alternateBg: PropTypes.bool,
  headerBackgroundColor: PropTypes.string,
  columnSelection: PropTypes.bool,
  frozenHeader: PropTypes.bool,
  frozenHeaderCount: PropTypes.number,
  headerRowSpreadProps: PropTypes.any,
  rowSelection: PropTypes.bool,
  rowSpreadProps: PropTypes.any,
  setHeaderRef: PropTypes.func,
  setTableRef: PropTypes.func,
  setTotalRows: PropTypes.func,
  tableObject: PropTypes.any.isRequired,
  tableSpreadProps: PropTypes.any,
  paginateDynamic: PropTypes.bool,
  onTableCellClick: PropTypes.func,
  onSortClick: PropTypes.func,
  checkboxToggle: PropTypes.func,
  setCheckboxToggle: PropTypes.func,
  stylesheet: PropTypes.func,
  tableGroupSelectAll: PropTypes.shape({
    checkboxToggle: PropTypes.arrayOf(PropTypes.bool),
    setCheckboxToggle: PropTypes.func,
  }),
  onApplication: PropTypes.func,
  enableBlockLayout: PropTypes.bool,
};

export default TablePresenter;
