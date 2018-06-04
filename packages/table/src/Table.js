import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import noop from "lodash/noop";
import get from "lodash/get";
import toString from "lodash/toString";
import { ThemeContext } from "@hig/themes";

import "./table.scss";

import GridTable from "./GridTable";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Column from "./Column";
import SortOrder from "./SortOrder";
import ColumnResizer from "./ColumnResizer";
import DefaultExpandIcon from "./DefaultExpandIcon";
import DefaultSortIndicator from "./DefaultSortIndicator";
import ColumnManager from "./ColumnManager";
import { normalizeColumns, callOrReturn, hasChildren } from "./utils";

function getTableClasses({ themeClass, className, disabled, isFrozen }) {
  return cx(
    "hig__table",
    className,
    {
      "hig__table--with-frozen-rows": isFrozen,
      "hig__table--disabled": disabled
    },
    themeClass
  );
}

/**
 * Table component based on react-virtualized
 */
class Table extends React.Component {
  constructor(props) {
    super(props);

    const {
      headerHeight,
      footerHeight,
      columns,
      children,
      expandedRowKeys,
      defaultExpandedRowKeys
    } = this.props;
    this.state = {
      // used for auto height table
      tableHeight: headerHeight + footerHeight,
      scrollbarWidth: 0,
      horizontalScrollbarWidth: 0,
      hoveredRowKey: null,
      resizingKey: null,
      expandedRowKeys: [
        ...("expandedRowKeys" in this.props
          ? expandedRowKeys
          : defaultExpandedRowKeys)
      ]
    };
    this.columnManager = new ColumnManager(
      columns || normalizeColumns(children),
      props.fixed
    );

    this._rowHeight = this._rowHeight.bind(this);
    this._setMainTableRef = this._setMainTableRef.bind(this);
    this._setLeftTableRef = this._setLeftTableRef.bind(this);
    this._setRightTableRef = this._setRightTableRef.bind(this);

    this.renderRow = this.renderRow.bind(this);
    this.renderRowCell = this.renderRowCell.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderHeaderCell = this.renderHeaderCell.bind(this);

    this._handleScrollbarPresenceChange = this._handleScrollbarPresenceChange.bind(
      this
    );
    this._handleScroll = this._handleScroll.bind(this);
    this._handleVerticalScroll = this._handleVerticalScroll.bind(this);
    this._handleRowsRendered = this._handleRowsRendered.bind(this);
    this._handleRowHover = this._handleRowHover.bind(this);
    this._handleRowExpand = this._handleRowExpand.bind(this);
    this._handleColumnResize = this._handleColumnResize.bind(this);
    this._handleColumnResizeStart = this._handleColumnResizeStart.bind(this);
    this._handleColumnResizeStop = this._handleColumnResizeStop.bind(this);
    this._handleColumnSort = this._handleColumnSort.bind(this);

    this._scroll = {};
    this._scrollHeight = 0;
    this._lastScanedRowIndex = -1;
    this._hasDataChangedSinceEndReached = true;
  }

  // region Table Methods
  /**
   * Forcefully re-render the inner Grid component.
   *
   * Calling `forceUpdate` on `Table` may not re-render the inner Grid since it uses `shallowCompare` as a performance optimization.
   * Use this method if you want to manually trigger a re-render.
   * This may be appropriate if the underlying row data has changed but the row sizes themselves have not.
   */
  forceUpdateTable() {
    this.table && this.table.forceUpdateTable();
    this.leftTable && this.leftTable.forceUpdateTable();
    this.rightTable && this.rightTable.forceUpdateTable();
  }

  /**
   * Get the total height of all frozen rows.
   */
  getFrozenRowsHeight() {
    return this.table ? this.table.getFrozenRowsHeight() : 0;
  }

  /**
   * Get the total width of all columns.
   */
  getTotalColumnsWidth() {
    return this.table ? this.table.getTotalColumnsWidth() : 0;
  }

  /**
   * Get the total height of all rows.
   * The value is estimated initially, as rows are measured, the value will be updated.
   * This method is useful to implement auto growable height when adding/removing/expanding rows.
   */
  getTotalRowsHeight() {
    return this.table ? this.table.getTotalRowsHeight() : 0;
  }

  /**
   * Pre-measure all rows in the Table.
   *
   * Typically rows are only measured as needed and estimated heights are used for rows that have not yet been measured.
   * This method ensures that the next call to `getTotalSize` returns an exact size (as opposed to just an estimated one).
   */
  measureAllRows() {
    this.table && this.table.measureAllRows();
    this.leftTable && this.leftTable.measureAllRows();
    this.rightTable && this.rightTable.measureAllRows();
  }

  /**
   * Recompute row heights and offsets after the specified index (defaults to 0).
   *
   * `Table` has no way of knowing when its underlying list data has changed since it only receives a `rowHeight` property.
   * If the `rowHeight` is a number it can compare before and after values but if it is a function that comparison is error prone.
   * In the event that a dynamic `rowHeight` function is in use and the row heights have changed this function should be manually called by the "smart" container parent.
   *
   * This method will also force a render cycle (via `forceUpdate`) to ensure that the updated measurements are reflected in the rendered table.
   *
   * @param {number} startRowIndex
   */
  recomputeRowHeights(startRowIndex) {
    this.table && this.table.recomputeRowHeights(startRowIndex);
    this.leftTable && this.leftTable.recomputeRowHeights(startRowIndex);
    this.rightTable && this.rightTable.recomputeRowHeights(startRowIndex);
  }

  /**
   * Scroll to the specified offset.
   * Useful for animating position changes.
   *
   * @param {object} offset
   */
  scrollToPosition(offset) {
    this._scroll = offset;

    this.table && this.table.scrollToPosition(offset);
    this.leftTable && this.leftTable.scollToTop(offset.scrollTop);
    this.rightTable && this.rightTable.scollToTop(offset.scrollTop);
  }

  /**
   * Scroll to the specified offset vertically.
   *
   * @param {number} scrollTop
   */
  scrollToTop(scrollTop) {
    this._scroll.scrollTop = scrollTop;

    this.table && this.table.scrollToPosition(this._scroll);
    this.leftTable && this.leftTable.scollToTop(scrollTop);
    this.rightTable && this.rightTable.scollToTop(scrollTop);
  }

  /**
   * Scroll to the specified offset horizontally.
   *
   * @param {number} scrollLeft
   */
  scrollToLeft(scrollLeft) {
    this._scroll.scrollLeft = scrollLeft;

    this.table && this.table.scrollToPosition(this._scroll);
  }

  /**
   * Ensure row is visible.
   * This method can be used to safely scroll back to a row that a user has scrolled away from even if it was previously scrolled to.
   *
   * @param {number} rowIndex
   */
  scrollToRow(rowIndex = 0) {
    this.table && this.table.scrollToRow(rowIndex);
    this.leftTable && this.leftTable.scrollToRow(rowIndex);
    this.rightTable && this.rightTable.scrollToRow(rowIndex);
  }

  /**
   * Set `expandedRowKeys` manually.
   * This method is available only if `expandedRowKeys` is uncontrolled.
   *
   * @param {array} expandedRowKeys
   */
  setExpandedRowKeys(expandedRowKeys) {
    if ("expandedRowKeys" in this.props) return;
    this.setState({
      expandedRowKeys: [...expandedRowKeys]
    });
    this.forceUpdateTable();
  }
  // endregion

  // region Renders
  renderRow({
    key,
    columns,
    rowData,
    rowIndex,
    style,
    depth = 0,
    rootIndex
  }) {
    const {
      rowClassName,
      rowStyle,
      renderRow,
      rowEventHandlers,
      expandColumnKey
    } = this.props;

    const rowClass = callOrReturn(rowClassName, { rowData, rowIndex });
    const rowStyleObject = callOrReturn(rowStyle, { rowData, rowIndex });
    const rowKey = rowData[this.props.rowKey];

    const className = cx("hig__table__row", rowClass, {
      [`hig__table__row--depth-${depth}`]: !!expandColumnKey,
      "hig__table__row--expanded": this.state.expandedRowKeys.includes(rowKey),
      "hig__table__row--hovered": rowKey === this.state.hoveredRowKey,
      "hig__table__row--frozen":
        depth === 0 && rowIndex < this.props.frozenRowCount,
      "hig__table__row--customized": renderRow
    });
    const flattenedStyle = {
      ...style,
      ...rowStyleObject,
      height: this.props.rowHeight,
      overflow: "hidden"
    };
    const expandedHeight = expandColumnKey
      ? callOrReturn(this.props.rowExpandedHeight, { index: rowIndex })
      : 0;
    const expandable =
      !!expandColumnKey && (expandedHeight > 0 || hasChildren(rowData));
    const expanded =
      !!expandColumnKey && this.state.expandedRowKeys.includes(rowKey);

    const rowProps = {
      key,
      className,
      style: flattenedStyle,
      columns,
      rowIndex,
      rowData,
      rowKey,
      expandColumnKey,
      expandable,
      expanded,
      depth,
      rootIndex: rootIndex || rowIndex,
      rowEventHandlers,
      // for fixed table, we need to sync the hover state across the inner tables
      onRowHover: this.columnManager.hasFrozenColumns()
        ? this._handleRowHover
        : null,
      onRowExpand: expandable ? this._handleRowExpand : null,
      renderRow,
      renderCell: this.renderRowCell,
      expandIcon: this.props.components.ExpandIcon
    };

    const row = <TableRow {...rowProps} />;
    if (!expandable) return row;

    let expandedRows = null;
    if (expanded) {
      if (expandedHeight) {
        const expandedStyle = {
          ...style,
          top: style.top + this.props.rowHeight,
          height: expandedHeight,
          overflow: "hidden"
        };
        expandedRows = (
          <ThemeContext.Consumer key={`${key}-expanded`}>
            {({ themeClass }) => (
              <div
                className={cx("hig__table__row-expanded", themeClass)}
                style={expandedStyle}
              >
                {this.props.renderRowExpanded({
                  columns,
                  rowData,
                  rowIndex
                })}
              </div>
            )}
          </ThemeContext.Consumer>
        );
      } else {
        let top = style.top + this.props.rowHeight;
        expandedRows = rowData.children.map((expandData, expandIndex) => {
          const expandRow = this.renderRow({
            key: `${key}-${expandIndex}`,
            columns,
            rowData: expandData,
            rowIndex: expandIndex,
            style: { ...style, top },
            depth: depth + 1,
            rootIndex: rootIndex || rowIndex
          });
          top += this._getExpandedRowCount(expandData) * this.props.rowHeight;
          return expandRow;
        });
      }
    }
    return [row, expandedRows];
  }

  renderRowCell({ column, columnIndex, rowData, rowIndex, expandIcon }) {
    const { className, dataKey, dataGetter, renderCell } = column;
    const cellData = dataGetter
      ? dataGetter({ column, columnIndex, rowData, rowIndex })
      : get(rowData, dataKey);

    const cell = renderCell ? (
      renderCell({
        cellData,
        column,
        columnIndex,
        rowData,
        rowIndex
      })
    ) : (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div className={cx("hig__table__row-column-text", themeClass)}>
            {toString(cellData)}
          </div>
        )}
      </ThemeContext.Consumer>
    );

    const getRowCellClasses = themeClass =>
      cx(
        "hig__table__row-column",
        className,
        {
          "hig__table__row-column--align-center": column.align === "center",
          "hig__table__row-column--align-right": column.align === "right"
        },
        themeClass
      );

    return (
      <ThemeContext.Consumer key={`Row${rowIndex}-Col${columnIndex}`}>
        {({ themeClass }) => (
          <div
            className={getRowCellClasses(themeClass)}
            style={this.columnManager.getColumnStyle(column.key)}
          >
            {expandIcon}
            {cell}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  renderHeader({ key, columns, style }) {
    const { headerClassName, headerStyle, renderHeader } = this.props;

    const className = cx("hig__table__header-row", headerClassName, {
      "hig__table__header-row--resizing": !!this.state.resizingKey,
      "hig__table__header-row--customized": renderHeader
    });
    const flattenedStyle = {
      ...style,
      headerStyle,
      height: this.props.headerHeight,
      overflow: "hidden"
    };

    const headerProps = {
      key,
      className,
      style: flattenedStyle,
      columns,
      expandColumnKey: this.props.expandColumnKey,
      renderHeader,
      renderCell: this.renderHeaderCell,
      expandIcon: this.props.components.ExpandIcon
    };

    return <TableHeader {...headerProps} />;
  }

  renderHeaderCell({ column, columnIndex, expandIcon }) {
    const { headerClassName: className, title, renderHeader } = column;

    const cell = renderHeader ? (
      renderHeader({ column, columnIndex })
    ) : (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div className={cx("hig__table__header-column-text", themeClass)}>
            {title}
          </div>
        )}
      </ThemeContext.Consumer>
    );

    const { sort, components } = this.props;
    const { SortIndicator } = components;
    const sorting = column.key === sort.key;
    const sortOrder = sorting ? sort.order : SortOrder.ASC;
    const getHeaderCellClasses = themeClass =>
      cx("hig__table__header-column", themeClass, className, {
        "hig__table__header-column--align-center": column.align === "center",
        "hig__table__header-column--align-right": column.align === "right",
        "hig__table__header-column--sortable": column.sortable,
        "hig__table__header-column--sorting": sorting,
        "hig__table__header-column--resizing":
          column.key === this.state.resizingKey
      });

    return (
      <ThemeContext.Consumer key={`Header-Col${columnIndex}`}>
        {({ themeClass }) => (
          <div
            role="button"
            tabIndex="-1"
            className={getHeaderCellClasses(themeClass)}
            style={this.columnManager.getColumnStyle(column.key)}
            onClick={column.sortable ? this._handleColumnSort(column) : null}
          >
            {expandIcon}
            {cell}
            {column.sortable && (
              <SortIndicator
                sortOrder={sortOrder}
                className={cx("hig__table__sort-indicator", {
                  "hig__table__sort-indicator--descending":
                    sortOrder === SortOrder.DESC
                })}
              />
            )}
            {column.resizable && (
              <ColumnResizer
                className="hig__table__column-resizer"
                handleClassName="hig__table__column-resizer-handle"
                column={column}
                onResizeStart={this._handleColumnResizeStart}
                onResizeStop={this._handleColumnResizeStop}
                onResize={this._handleColumnResize}
              />
            )}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  renderMainTable({ width, height }) {
    const { data, frozenRowCount, headerHeight, fixed, ...rest } = this.props;
    const { scrollbarWidth } = this.state;

    let tableWidth = width - scrollbarWidth;
    if (fixed) {
      const columnsWidth = this.columnManager.getColumnsWidth();
      tableWidth = Math.max(columnsWidth, tableWidth);
    }
    return (
      <GridTable
        {...rest}
        className="hig__table__table-main"
        ref={this._setMainTableRef}
        data={data}
        frozenRowCount={Math.min(frozenRowCount, data.length)}
        columns={this.columnManager.getMainColumns()}
        width={width}
        height={height}
        headerHeight={headerHeight}
        rowHeight={this._rowHeight}
        headerWidth={tableWidth + (fixed ? scrollbarWidth : 0)}
        bodyWidth={tableWidth}
        renderHeader={this.renderHeader}
        renderRow={this.renderRow}
        onScroll={this._handleScroll}
        onRowsRendered={this._handleRowsRendered}
        onScrollbarPresenceChange={this._handleScrollbarPresenceChange}
      />
    );
  }

  renderLeftTable({ width, height }) {
    if (!this.columnManager.hasLeftFrozenColumns()) return null;

    const { data, frozenRowCount, headerHeight, ...rest } = this.props;
    const { scrollbarWidth, horizontalScrollbarWidth } = this.state;

    const offset = scrollbarWidth || 15;
    const columnsWidth = this.columnManager.getLeftFrozenColumnsWidth();
    return (
      <GridTable
        {...rest}
        containerStyle={{
          width: columnsWidth,
          height: height - horizontalScrollbarWidth,
          overflow: "hidden"
        }}
        className="hig__table__table-frozen-left"
        ref={this._setLeftTableRef}
        data={data}
        frozenRowCount={Math.min(frozenRowCount, data.length)}
        columns={this.columnManager.getLeftFrozenColumns()}
        width={columnsWidth + offset}
        height={height - horizontalScrollbarWidth}
        headerHeight={headerHeight}
        rowHeight={this._rowHeight}
        headerWidth={columnsWidth + offset}
        bodyWidth={columnsWidth + offset}
        renderHeader={this.renderHeader}
        renderRow={this.renderRow}
        onScroll={this._handleVerticalScroll}
        onRowsRendered={noop}
        onScrollbarPresenceChange={noop}
      />
    );
  }

  renderRightTable({ width, height }) {
    if (!this.columnManager.hasRightFrozenColumns()) return null;

    const { data, frozenRowCount, headerHeight, ...rest } = this.props;
    const { scrollbarWidth, horizontalScrollbarWidth } = this.state;

    const columnsWidth = this.columnManager.getRightFrozenColumnsWidth();
    return (
      <GridTable
        {...rest}
        className="hig__table__table-frozen-right"
        ref={this._setRightTableRef}
        data={data}
        frozenRowCount={Math.min(frozenRowCount, data.length)}
        columns={this.columnManager.getRightFrozenColumns()}
        width={columnsWidth + scrollbarWidth}
        height={height - horizontalScrollbarWidth}
        headerHeight={headerHeight}
        rowHeight={this._rowHeight}
        headerWidth={columnsWidth + scrollbarWidth}
        bodyWidth={columnsWidth}
        renderHeader={this.renderHeader}
        renderRow={this.renderRow}
        onScroll={this._handleVerticalScroll}
        onRowsRendered={noop}
        onScrollbarPresenceChange={noop}
      />
    );
  }

  renderFooter() {
    const { footerHeight, renderFooter } = this.props;

    if (footerHeight === 0) return null;

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={cx("hig__table__footer", themeClass)}
            style={{ height: footerHeight }}
          >
            {renderFooter()}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  renderEmptyLayer() {
    const { data, headerHeight, footerHeight, renderEmpty } = this.props;

    if (data && data.length) return null;

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={cx("hig__table__empty-layer", themeClass)}
            style={{ top: headerHeight, bottom: footerHeight }}
          >
            {renderEmpty()}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  renderResizingLine({ width, height }) {
    const { resizingKey, scrollbarWidth } = this.state;
    if (!this.props.fixed || !resizingKey) return null;
    const columns = this.columnManager.getMainColumns();
    const idx = columns.findIndex(column => column.key === resizingKey);
    const column = this.columnManager.getColumn(resizingKey);

    let left = this.columnManager.recomputeColumnsWidth(
      columns.slice(0, idx + 1)
    );

    if (!column.frozen) {
      left -= this._scroll.scrollLeft;
    } else if (column.frozen === "right") {
      left =
        width -
        scrollbarWidth -
        this.columnManager.recomputeColumnsWidth(columns.slice(idx + 1));
    }

    const style = {
      left,
      height: height - this.state.horizontalScrollbarWidth
    };

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={cx("hig__table__resizing-line", themeClass)}
            style={style}
          />
        )}
      </ThemeContext.Consumer>
    );
  }

  renderTable({ width, height }) {
    const {
      disabled,
      className,
      style,
      footerHeight,
      frozenRowCount
    } = this.props;
    const size = {
      width,
      height: height - footerHeight
    };
    const isFrozen = frozenRowCount > 0;

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={getTableClasses({
              themeClass,
              className,
              disabled,
              isFrozen
            })}
            style={{ ...style, width, height, position: "relative" }}
          >
            {this.renderFooter()}
            {this.renderMainTable(size)}
            {this.renderLeftTable(size)}
            {this.renderRightTable(size)}
            {this.renderResizingLine(size)}
            {this.renderEmptyLayer()}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
  // endregion

  render() {
    const { width, maxHeight } = this.props;
    let { height } = this.props;
    if (!height && maxHeight) {
      height = this.state.tableHeight;
    }
    return this.renderTable({ width, height });
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.columns && nextProps.columns !== this.props.columns) ||
      nextProps.children !== this.props.children ||
      nextProps.fixed !== this.props.fixed
    ) {
      this.columnManager.reset(
        nextProps.columns || normalizeColumns(nextProps.children),
        nextProps.fixed
      );
    }

    if (nextProps.data !== this.props.data) {
      this._lastScanedRowIndex = -1;
      this._hasDataChangedSinceEndReached = true;
    }

    if (nextProps.height !== this.props.height) {
      this._maybeCallOnEndReached();
    }

    // we use custom rowHeight to support expandable table, so we have to recompute after rowHeight changed
    if (nextProps.rowHeight !== this.props.rowHeight) {
      this.recomputeRowHeights(0);
    }

    // if the table is expandable
    if (nextProps.expandColumnKey) {
      // If `expandedRowKeys` is controlled
      if (
        "expandedRowKeys" in nextProps &&
        nextProps.expandedRowKeys !== this.props.expandedRowKeys
      ) {
        this.setState({
          expandedRowKeys: [...nextProps.expandedRowKeys]
        });
        this.forceUpdateTable();
      }

      if (
        nextProps.sort.key !== this.props.sort.key ||
        nextProps.sort.order !== this.props.sort.order
      ) {
        this.recomputeRowHeights(0);
      }
    }
  }

  componentDidMount() {
    this._maybeUpdateTableHeight();
  }

  componentDidUpdate(prevProps, prevState) {
    this._maybeUpdateTableHeight();
  }

  _setMainTableRef(ref) {
    this.table = ref;
  }

  _setLeftTableRef(ref) {
    this.leftTable = ref;
  }

  _setRightTableRef(ref) {
    this.rightTable = ref;
  }

  _getExpandedRowCount(rowData) {
    if (
      hasChildren(rowData) &&
      this.state.expandedRowKeys.includes(rowData[this.props.rowKey])
    ) {
      const count = rowData.children
        .map(row => this._getExpandedRowCount(row))
        .reduce((total, count) => total + count, 1);
      return count;
    }

    return 1;
  }

  _rowHeight({ index }) {
    const rowData = this.props.data[index];
    if (
      this.props.expandColumnKey &&
      this.state.expandedRowKeys.includes(rowData[this.props.rowKey])
    ) {
      const expandedHeight = callOrReturn(this.props.rowExpandedHeight, {
        index
      });
      if (expandedHeight) return expandedHeight + this.props.rowHeight;
      if (hasChildren(rowData)) {
        return (
          this._getExpandedRowCount(this.props.data[index]) *
          this.props.rowHeight
        );
      }
    }
    return this.props.rowHeight;
  }

  _maybeUpdateTableHeight() {
    const { height, maxHeight, headerHeight, footerHeight } = this.props;
    if (!height && maxHeight) {
      const totalHeight =
        headerHeight + footerHeight + this.getTotalRowsHeight();
      const tableHeight = Math.min(totalHeight, maxHeight);
      if (tableHeight !== this.state.tableHeight) {
        this.setState({ tableHeight });
      }
    }
  }

  _getClientHeight() {
    if (this._scroll.clientHeight) return this._scroll.clientHeight;
    if (!this.props.height) return 0;
    return (
      this.props.height -
      this.props.headerHeight -
      this.props.footerHeight -
      this.getFrozenRowsHeight()
    );
  }

  _maybeCallOnEndReached() {
    const {
      data,
      maxHeight,
      onEndReached,
      onEndReachedThreshold,
      frozenRowCount
    } = this.props;
    const { scrollTop } = this._scroll;
    const scrollHeight = this.getTotalRowsHeight();
    const clientHeight = this._getClientHeight();
    const { horizontalScrollbarWidth } = this.state;
    // onEndReached is not available is maxHeight is set
    if (maxHeight || !onEndReached || !clientHeight || !scrollHeight) return;
    const distanceFromEnd =
      scrollHeight - scrollTop - clientHeight + horizontalScrollbarWidth;
    if (
      this._lastScanedRowIndex >= 0 &&
      this._lastScanedRowIndex === data.length - 1 - frozenRowCount &&
      distanceFromEnd <= onEndReachedThreshold &&
      (this._hasDataChangedSinceEndReached ||
        scrollHeight !== this._scrollHeight)
    ) {
      this._hasDataChangedSinceEndReached = false;
      this._scrollHeight = scrollHeight;
      onEndReached({ distanceFromEnd });
    }
  }

  // region Handlers
  _handleScrollbarPresenceChange({ size, vertical, horizontal }) {
    this.setState({
      scrollbarWidth: vertical ? size : 0,
      horizontalScrollbarWidth: horizontal ? size : 0
    });
    this.props.onScrollbarPresenceChange({ size, vertical, horizontal });
  }

  _handleScroll(args) {
    const lastScrollTop = this._scroll.scrollTop || 0;
    this.scrollToPosition(args);
    this.props.onScroll(args);

    if (args.scrollTop > lastScrollTop) this._maybeCallOnEndReached();
  }

  _handleVerticalScroll({ scrollTop }) {
    const lastScrollTop = this._scroll.scrollTop || 0;
    this.scrollToTop(scrollTop);
    this.props.onScroll(this._scroll);

    if (scrollTop > lastScrollTop) this._maybeCallOnEndReached();
  }

  _handleRowsRendered(args) {
    this.props.onRowsRendered(args);

    if (args.overscanStopIndex > this._lastScanedRowIndex) {
      this._lastScanedRowIndex = args.overscanStopIndex;
      this._maybeCallOnEndReached();
    }
  }

  _handleRowHover({ hovering, rowKey }) {
    this.setState({ hoveredRowKey: hovering ? rowKey : null });
    this.forceUpdateTable();
  }

  _handleRowExpand({ expanded, rowData, rowIndex, rowKey, rootIndex }) {
    const expandedRowKeys = [...this.state.expandedRowKeys];
    if (expanded) {
      if (!expandedRowKeys.includes(rowKey)) expandedRowKeys.push(rowKey);
    } else {
      const index = expandedRowKeys.indexOf(rowKey);
      if (index > -1) {
        expandedRowKeys.splice(index, 1);
      }
    }
    // if `expandedRowKeys` is uncontrolled, update internal state
    if (!("expandedRowKeys" in this.props)) {
      this.setState({ expandedRowKeys });
      this.recomputeRowHeights(rootIndex);
    }
    this.props.onRowExpand({ expanded, rowData, rowIndex });
    this.props.onExpandedRowsChange(expandedRowKeys);
  }

  _handleColumnResize({ key }, width) {
    this.columnManager.setColumnWidth(key, width);
    this.forceUpdate();

    const column = this.columnManager.getColumn(key);
    this.props.onColumnResize({ column, width });
  }

  _handleColumnResizeStart({ key }) {
    this.setState({ resizingKey: key });
  }

  _handleColumnResizeStop() {
    this.setState({ resizingKey: null });
    this.forceUpdateTable();
  }

  _handleColumnSort(column) {
    return () => {
      const { sort, onColumnSort } = this.props;
      let order = SortOrder.ASC;
      if (column.key === sort.key) {
        order = sort.order === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
      }
      onColumnSort({
        key: column.key,
        order
      });
    };
  }
  // endregion
}

Table.Column = Column;

Table.defaultProps = {
  rowKey: "id",
  fixed: false,
  hideHeader: false,
  headerHeight: 50,
  rowHeight: 50,
  rowExpandedHeight: 0,
  footerHeight: 0,
  defaultExpandedRowKeys: [],
  sort: {},
  overscanRowCount: 10,
  frozenRowCount: 0,
  onEndReachedThreshold: 500,

  onScroll: noop,
  onRowsRendered: noop,
  onResize: noop,
  onScrollbarPresenceChange: noop,
  onRowExpand: noop,
  onExpandedRowsChange: noop,
  onColumnSort: noop,
  onColumnResize: noop,
  renderEmpty: noop,
  renderFooter: noop,
  renderRowExpanded: noop,
  components: {
    ExpandIcon: DefaultExpandIcon,
    SortIndicator: DefaultSortIndicator
  }
};

Table.propTypes = {
  /**
   * Class name for the container
   */
  className: PropTypes.string,
  /**
   * Custom style for the container
   */
  style: PropTypes.object,
  /**
   * A collection of Column
   */
  children: PropTypes.node,
  /**
   * Columns for the table
   */
  columns: PropTypes.arrayOf(PropTypes.shape({ ...Column.propTypes })),
  /**
   * The data for the table
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The count of rows be frozen to top
   */
  frozenRowCount: PropTypes.number,
  /**
   * The key field of each data item
   */
  rowKey: PropTypes.string.isRequired,
  /**
   * The width of the table
   */
  width: PropTypes.number.isRequired,
  /**
   * The height of the table
   */
  height: PropTypes.number,
  /**
   * The max height of the table, the table's height will auto change when data changes,
   * will turns to vertical scroll if reaches the max height
   *
   * Available only if `height` is unset or equals 0
   */
  maxHeight: PropTypes.number,
  /**
   * The height of each table row
   */
  rowHeight: PropTypes.number.isRequired,
  /**
   * The height of extra part of the expanded row, if set tree data will be ignored
   */
  rowExpandedHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  /**
   * The height of the table header
   */
  headerHeight: PropTypes.number.isRequired,
  /**
   * The height of the table footer
   */
  footerHeight: PropTypes.number,
  /**
   * Whether the width of the columns are fixed or flexible
   */
  fixed: PropTypes.bool,
  /**
   * Whether the table is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Whether to show the table header
   */
  hideHeader: PropTypes.bool,
  /**
   * Optional renderer when the length of data is 0
   */
  renderEmpty: PropTypes.func,
  /**
   * Custom footer renderer, available only if `footerHeight` is larger then 0
   */
  renderFooter: PropTypes.func,
  /**
   * Custom header renderer
   * The callback is of the shape of `({ columns }) => *`
   */
  renderHeader: PropTypes.func,
  /**
   * Custom row renderer
   * The callback is of the shape of `({ columns, rowData, rowIndex, depth }) => *`
   */
  renderRow: PropTypes.func,
  /**
   * Custom extra part of the expanded row renderer
   * The callback is of the shape of `({ columns, rowData, rowIndex }) => *`
   */
  renderRowExpanded: PropTypes.func,
  /**
   * Class name for the table header
   */
  headerClassName: PropTypes.string,
  /**
   * Custom style for the table header
   */
  headerStyle: PropTypes.object,
  /**
   * Class name for the table row, could be a callback to return the class name
   * The callback is of the shape of `({ rowData, rowIndex }) => string`
   */
  rowClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Custom style for the table row, could be a callback to return the style
   * The callback is of the shape of `({ rowData, rowIndex }) => object`
   */
  rowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /**
   * The key for the expand column which render the expand icon if the data is a tree
   */
  expandColumnKey: PropTypes.string,
  /**
   * Default expanded row keys when initalize the table
   */
  defaultExpandedRowKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Controlled expanded row keys
   */
  expandedRowKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * A callback function when expand or collapse a tree node
   * The handler is of the shape of `({ expanded, rowData, rowIndex }) => *`
   */
  onRowExpand: PropTypes.func,
  /**
   * A callback function when the expanded row keys changed
   * The handler is of the shape of `(expandedRowKeys) => *`
   */
  onExpandedRowsChange: PropTypes.func,
  /**
   * The sort state for the table
   */
  sort: PropTypes.shape({
    /**
     * Sort key
     */
    key: PropTypes.string,
    /**
     * Sort order
     */
    order: PropTypes.oneOf([SortOrder.ASC, SortOrder.DESC])
  }),
  /**
   * A callback function for the header cell click event
   * The handler is of the shape of `({ key, order }) => *`
   */
  onColumnSort: PropTypes.func,
  /**
   * A callback function when resizing the column width
   * The handler is of the shape of `({ column, width }) => *`
   */
  onColumnResize: PropTypes.func,
  /**
   * Number of rows to render above/below the visible bounds of the list
   */
  overscanRowCount: PropTypes.number,
  /**
   * A callback function when scrolling the table
   * The handler is of the shape of `({ scrollLeft, scrollTop }) => *`
   */
  onScroll: PropTypes.func,
  /**
   * A callback function when scrolling the table within `onEndReachedThreshold` of the bottom
   * The handler is of the shape of `({ distanceFromEnd }) => *`
   */
  onEndReached: PropTypes.func,
  /**
   * Threshold in pixels for calling `onEndReached`.
   */
  onEndReachedThreshold: PropTypes.number,
  /**
   * A callback function with information about the slice of rows that were just rendered
   * The handler is of the shape of `({ overscanStartIndex, overscanStopIndex, startIndex， stopIndex }) => *`
   */
  onRowsRendered: PropTypes.func,
  /**
   * A callback function when the scrollbar presence state changed
   * The handler is of the shape of `({ size, vertical, horizontal }) => *`
   */
  onScrollbarPresenceChange: PropTypes.func,
  /**
   * A object for the row event handlers
   * Each of the keys is row event name, like `onClick`, `onDoubleClick` and etc.
   * Each of the handlers is of the shape of `({ rowData, rowIndex, rowKey, event }) => *`
   */
  rowEventHandlers: PropTypes.object,
  /**
   * A object for the custom components, like `ExpandIcon` and `SortIndicator`
   */
  components: PropTypes.shape({
    ExpandIcon: PropTypes.any,
    SortIndicator: PropTypes.any
  })
};

export default Table;
