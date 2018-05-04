export default class ColumnManager {
  constructor(columns, fixed) {
    this.reset(columns, fixed);
  }

  _cache(key, fn) {
    if (key in this._cached) return this._cached[key];
    this._cached[key] = fn();
    return this._cached[key];
  }

  reset(columns, fixed) {
    this._columns = columns;
    this._fixed = fixed;
    this._cached = {};
    this._columnStyles = this.recomputeColumnStyles();
  }

  resetCache() {
    this._cached = {};
  }

  getColumns() {
    return this._columns;
  }

  getVisibleColumns() {
    return this._cache("visibleColumns", () =>
      this._columns.filter(column => !column.hidden)
    );
  }

  hasFrozenColumns() {
    return this._cache(
      "hasFrozenColumns",
      () =>
        this._fixed && this.getVisibleColumns().some(column => !!column.frozen)
    );
  }

  hasLeftFrozenColumns() {
    return this._cache(
      "hasLeftFrozenColumns",
      () =>
        this._fixed &&
        this.getVisibleColumns().some(
          column => column.frozen === "left" || column.frozen === true
        )
    );
  }

  hasRightFrozenColumns() {
    return this._cache(
      "hasRightFrozenColumns",
      () =>
        this._fixed &&
        this.getVisibleColumns().some(column => column.frozen === "right")
    );
  }

  getMainColumns() {
    return this._cache("mainColumns", () => {
      const columns = this.getVisibleColumns();
      if (!this.hasFrozenColumns()) return columns;

      // columns placeholder for the fixed table above them
      const leftFrozenColumns = this.getLeftFrozenColumns().map(column => ({
        key: column.key,
        width: column.width,
        resizable: false,
        renderCell: () => null,
        renderHeader: () => null
      }));
      const rightFrozenColumns = this.getRightFrozenColumns().map(column => ({
        key: column.key,
        width: column.width,
        resizable: false,
        renderCell: () => null,
        renderHeader: () => null
      }));
      const mainColumns = this.getVisibleColumns().filter(
        column => !column.frozen
      );

      return [...leftFrozenColumns, ...mainColumns, ...rightFrozenColumns];
    });
  }

  getLeftFrozenColumns() {
    return this._cache("leftFrozenColumns", () => {
      if (!this._fixed) return [];
      return this.getVisibleColumns().filter(
        column => column.frozen === "left" || column.frozen === true
      );
    });
  }

  getRightFrozenColumns() {
    return this._cache("rightFrozenColumns", () => {
      if (!this._fixed) return [];
      return this.getVisibleColumns().filter(
        column => column.frozen === "right"
      );
    });
  }

  getColumn(key) {
    return this._columns.find(column => column.key === key);
  }

  getColumnsWidth() {
    return this._cache("columnsWidth", () =>
      this.recomputeColumnsWidth(this.getVisibleColumns())
    );
  }

  getLeftFrozenColumnsWidth() {
    return this._cache("leftFrozenColumnsWidth", () =>
      this.recomputeColumnsWidth(this.getLeftFrozenColumns())
    );
  }

  getRightFrozenColumnsWidth() {
    return this._cache("rightFrozenColumnsWidth", () =>
      this.recomputeColumnsWidth(this.getRightFrozenColumns())
    );
  }

  recomputeColumnsWidth(columns) {
    return columns.reduce((width, column) => width + column.width, 0);
  }

  setColumnWidth(key, width) {
    const column = this.getColumn(key);
    column.width = width;
    this._cached = {};
    this._columnStyles[column.key] = this.recomputeColumnStyle(column);
  }

  getColumnStyle(key) {
    return this._columnStyles[key];
  }

  getColumnStyles() {
    return this._columnStyles;
  }

  recomputeColumnStyle(column) {
    const flexGrow = this._fixed || column.flexGrow !== 1 ? 0 : 1;
    const flexShrink = this._fixed || column.flexShrink === 0 ? 0 : 1;
    // workaround for Flex bug on IE: https://github.com/philipwalton/flexbugs#flexbug-7
    const flexValue = `${flexGrow} ${flexShrink} auto`;

    const style = {
      ...column.style,
      flex: flexValue,
      msFlex: flexValue,
      WebkitFlex: flexValue,
      width: column.width,
      overflow: "hidden"
    };

    if (!this._fixed && column.maxWidth) {
      style.maxWidth = column.maxWidth;
    }
    if (!this._fixed && column.minWidth) {
      style.minWidth = column.minWidth;
    }

    return style;
  }

  recomputeColumnStyles() {
    return this._columns.reduce((styles, column) => {
      styles[column.key] = this.recomputeColumnStyle(column);
      return styles;
    }, {});
  }
}
