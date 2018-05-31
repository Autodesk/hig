import React from "react";
import PropTypes from "prop-types";

export const Alignment = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
};

export const FrozenDirection = {
  LEFT: "left",
  RIGHT: "right",
  DEFAULT: true,
  NONE: false
};

/**
 * Column for the Table
 */
class Column extends React.Component {
  static propTypes = {
    /**
     * Class name for the column cell
     */
    className: PropTypes.string,
    /**
     * Class name for the column header
     */
    headerClassName: PropTypes.string,
    /**
     * Custom style for the column cell
     */
    style: PropTypes.object,
    /**
     * Custom style for the column header
     */
    headerStyle: PropTypes.object,
    /**
     * Title for the column header
     */
    title: PropTypes.string,
    /**
     * Data key for the column cell, could be "a.b.c"
     */
    dataKey: PropTypes.string,
    /**
     * Custom cell data getter
     * The handler is of the shape of `({ column, columnIndex, rowData, rowIndex }) => *`
     */
    dataGetter: PropTypes.func,
    /**
     * Alignment of the column cell
     */
    align: PropTypes.oneOf(Object.values(Alignment)),
    /**
     * Flex grow style, defaults to 0
     */
    flexGrow: PropTypes.number,
    /**
     * Flex shrink style, defaults to 1 for flexible table and 0 for fixed table
     */
    flexShrink: PropTypes.number,
    /**
     * The width of the column, gutter width is not included
     */
    width: PropTypes.number.isRequired,
    /**
     * Maximum width of the column, used if the column is resizable
     */
    maxWidth: PropTypes.number,
    /**
     * Minimum width of the column, used if the column is resizable
     */
    minWidth: PropTypes.number,
    /**
     * Whether the column is frozen and what's the frozen side
     */
    frozen: PropTypes.oneOf(Object.values(FrozenDirection)),
    /**
     * Whether the column is hidden
     */
    hidden: PropTypes.bool,
    /**
     * Whether the colum is resizable, defaults to true
     */
    resizable: PropTypes.bool,
    /**
     * Whether the colum is sortable, defaults to true
     */
    sortable: PropTypes.bool,
    /**
     * Custom column header renderer
     * The callback is of the shape of `({ column, columnIndex, rowData, rowIndex, depth }) => *`
     */
    renderHeader: PropTypes.func,
    /**
     * Custom column cell renderer
     * The callback is of the shape of `({ column, columnIndex, rowData, rowIndex, depth }) => *`
     */
    renderCell: PropTypes.func
  };
}

Column.Alignment = Alignment;
Column.FrozenDirection = FrozenDirection;

export default Column;
