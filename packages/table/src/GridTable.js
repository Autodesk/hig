import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Grid from "react-virtualized/dist/commonjs/Grid";
import { ThemeContext } from "@hig/themes";

/**
 * A wrapper of the Grid for internal only
 */
class GridTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this._setHeaderRef = this._setHeaderRef.bind(this);
    this._setBodyRef = this._setBodyRef.bind(this);
    this._headerRowHeight = this._headerRowHeight.bind(this);
    this._rowHeight = this._rowHeight.bind(this);
    this.renderHeaderRow = this.renderHeaderRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this._handleSectionRendered = this._handleSectionRendered.bind(this);
  }

  forceUpdateTable() {
    this.headerRef && this.headerRef.forceUpdate();
    this.bodyRef && this.bodyRef.forceUpdate();
  }

  getFrozenRowsHeight() {
    let frozenRowsHeight = 0;
    for (let i = 0; i < this.props.frozenRowCount; i++) {
      frozenRowsHeight += this.props.rowHeight({ index: i });
    }
    return frozenRowsHeight;
  }

  getColumnsTotalWidth() {
    return this.bodyRef
      ? this.bodyRef._columnSizeAndPositionManager.getTotalSize()
      : 0;
  }

  getRowsTotalHeight() {
    return (
      (this.bodyRef
        ? this.bodyRef._rowSizeAndPositionManager.getTotalSize()
        : 0) + this.getFrozenRowsHeight()
    );
  }

  measureAllRows() {
    this.headerRef && this.headerRef.measureAllCells();
    this.bodyRef && this.bodyRef.measureAllCells();
  }

  recomputeRowHeights(startRowIndex = 0) {
    if (startRowIndex < this.props.frozenRowCount) {
      this.headerRef &&
        this.headerRef.recomputeGridSize({
          rowIndex: startRowIndex + 1,
          columnIndex: 0
        });
      this.bodyRef &&
        this.bodyRef.recomputeGridSize({
          rowIndex: 0,
          columnIndex: 0
        });
      this.forceUpdate();
    } else {
      this.bodyRef &&
        this.bodyRef.recomputeGridSize({
          rowIndex: startRowIndex - this.props.frozenRowCount,
          columnIndex: 0
        });
    }
  }

  scrollToPosition(args) {
    this.headerRef &&
      this.headerRef.scrollToPosition({ scrollLeft: args.scrollLeft });
    this.bodyRef && this.bodyRef.scrollToPosition(args);
  }

  scollToTop(scrollTop) {
    this.bodyRef && this.bodyRef.scrollToPosition({ scrollTop });
  }

  scrollToLeft(scrollLeft) {
    this.headerRef && this.headerRef.scrollToPosition({ scrollLeft });
    this.bodyRef && this.bodyRef.scrollToPosition({ scrollLeft });
  }

  scrollToRow(rowIndex = 0) {
    if (rowIndex < this.props.frozenRowCount) return;
    this.bodyRef &&
      this.bodyRef.scrollToCell({
        rowIndex: rowIndex - this.props.frozenRowCount,
        columnIndex: 0
      });
  }

  renderHeaderRow(args) {
    if (args.rowIndex === 0) {
      if (this.props.hideHeader) return null;
      return this.props.renderHeader({ ...args, columns: this.props.columns });
    }
    const rowIndex = args.rowIndex - 1;
    const rowData = this.props.data[rowIndex];
    return this.props.renderRow({
      ...args,
      columns: this.props.columns,
      rowData,
      rowIndex
    });
  }

  renderRow(args) {
    const rowIndex = args.rowIndex + this.props.frozenRowCount;
    const rowData = this.props.data[rowIndex];
    return this.props.renderRow({
      ...args,
      columns: this.props.columns,
      rowData,
      rowIndex
    });
  }

  render() {
    const {
      containerStyle,
      className,
      frozenRowCount,
      width,
      height,
      hideHeader,
      headerWidth,
      bodyWidth,
      onScroll,
      onScrollbarPresenceChange,
      ...rest
    } = this.props;
    const headerHeight = hideHeader ? 0 : this.props.headerHeight;
    const frozenRowsHeight = this.getFrozenRowsHeight();
    const containerProps = containerStyle ? { style: containerStyle } : null;

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={cx("hig__table__table", themeClass, className)}
            {...containerProps}
          >
            {headerHeight + frozenRowsHeight > 0 && (
              <Grid
                {...rest}
                className={cx("hig__table__header", themeClass)}
                ref={this._setHeaderRef}
                width={width}
                height={Math.min(headerHeight + frozenRowsHeight, height)}
                rowHeight={this._headerRowHeight}
                rowCount={1 + frozenRowCount}
                columnWidth={headerWidth}
                columnCount={1}
                cellRenderer={this.renderHeaderRow}
              />
            )}
            <Grid
              {...rest}
              className={cx("hig__table__body", themeClass)}
              ref={this._setBodyRef}
              width={width}
              height={Math.max(height - headerHeight - frozenRowsHeight, 0)}
              rowHeight={this._rowHeight}
              rowCount={this.props.data.length - frozenRowCount}
              columnWidth={bodyWidth}
              columnCount={1}
              cellRenderer={this.renderRow}
              onScroll={onScroll}
              onSectionRendered={this._handleSectionRendered}
              onScrollbarPresenceChange={onScrollbarPresenceChange}
            />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  _setHeaderRef(ref) {
    this.headerRef = ref;
  }

  _setBodyRef(ref) {
    this.bodyRef = ref;
  }

  _headerRowHeight({ index }) {
    const headerHeight = this.props.hideHeader ? 0 : this.props.headerHeight;
    return index === 0
      ? headerHeight
      : this.props.rowHeight({ index: index - 1 });
  }

  _rowHeight({ index }) {
    return this.props.rowHeight({ index: index + this.props.frozenRowCount });
  }

  _handleSectionRendered({
    rowOverscanStartIndex,
    rowOverscanStopIndex,
    rowStartIndex,
    rowStopIndex
  }) {
    const { onRowsRendered } = this.props;

    onRowsRendered({
      overscanStartIndex: rowOverscanStartIndex,
      overscanStopIndex: rowOverscanStopIndex,
      startIndex: rowStartIndex,
      stopIndex: rowStopIndex
    });
  }
}

GridTable.propTypes = {
  containerStyle: PropTypes.object,
  className: PropTypes.string,
  hideHeader: PropTypes.bool,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  headerHeight: PropTypes.number.isRequired,
  headerWidth: PropTypes.number.isRequired,
  bodyWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  frozenRowCount: PropTypes.number.isRequired,

  setHeaderRef: PropTypes.func,
  setBodyRef: PropTypes.func,
  onScroll: PropTypes.func,
  onRowsRendered: PropTypes.func,
  onScrollbarPresenceChange: PropTypes.func,
  renderHeader: PropTypes.func.isRequired,
  renderRow: PropTypes.func.isRequired
};

export default GridTable;
