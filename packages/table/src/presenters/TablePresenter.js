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
  stylesheet: customStylesheet,
  ...otherProps
}) => {
  const {
    columns,
    data: dataArray,
    meta,
    groupNames = [],
  } = useMemo(() => tableObject, [tableObject]);
  const isGrouped = Array.isArray(dataArray[0]);
  const passedParams = {
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
  stylesheet: PropTypes.func,
};

export default TablePresenter;
