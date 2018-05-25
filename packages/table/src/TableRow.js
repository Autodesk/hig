import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import isEqual from "lodash/isEqual";
import { ThemeContext } from "@hig/themes";

/**
 * Row component for the Table
 */
class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this._handleExpand = this._handleExpand.bind(this);
  }

  _handleExpand(expanded) {
    const { onRowExpand, rowData, rowIndex, rowKey, rootIndex } = this.props;
    if (onRowExpand) {
      onRowExpand({ expanded, rowData, rowIndex, rowKey, rootIndex });
    }
  }

  _getEventHandlers(handlers = {}) {
    const { rowData, rowIndex, rowKey, onRowHover } = this.props;
    const eventHandlers = {};
    Object.keys(handlers).forEach(eventKey => {
      const callback = handlers[eventKey];
      if (typeof callback === "function") {
        eventHandlers[eventKey] = event => {
          callback({ rowData, rowIndex, rowKey, event });
        };
      }
    });

    if (onRowHover) {
      const mouseEnterHandler = eventHandlers.onMouseEnter;
      eventHandlers.onMouseEnter = event => {
        onRowHover({
          hovering: true,
          rowData,
          rowIndex,
          rowKey,
          event
        });

        if (mouseEnterHandler) mouseEnterHandler(event);
      };

      const mouseLeaveHandler = eventHandlers.onMouseLeave;
      eventHandlers.onMouseLeave = event => {
        onRowHover({
          hovering: false,
          rowData,
          rowIndex,
          rowKey,
          event
        });

        if (mouseLeaveHandler) mouseLeaveHandler(event);
      };
    }

    return eventHandlers;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.className !== this.props.className ||
      !isEqual(nextProps.style, this.props.style) ||
      nextProps.columns !== this.props.columns ||
      nextProps.rowData !== this.props.rowData ||
      nextProps.rowIndex !== this.props.rowIndex ||
      nextProps.onRowHover !== this.props.onRowHover ||
      nextProps.rowEventHandlers !== this.props.rowEventHandlers
    );
  }

  render() {
    const {
      className,
      style,
      columns,
      rowData,
      rowIndex,
      depth,
      rowEventHandlers,
      expandColumnKey,
      expandable,
      expanded,
      renderRow,
      renderCell,
      expandIcon: ExpandIcon
    } = this.props;

    const cells = renderRow
      ? renderRow({ columns, rowData, rowIndex, depth })
      : columns.map((column, columnIndex) =>
          renderCell({
            column,
            columnIndex,
            rowData,
            rowIndex,
            expandIcon: column.key === expandColumnKey && (
              <ExpandIcon
                depth={depth}
                expandable={expandable}
                expanded={expanded}
                onExpand={this._handleExpand}
              />
            )
          })
        );

    const eventHandlers = this._getEventHandlers(rowEventHandlers);

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={cx(className, themeClass)}
            style={style}
            {...eventHandlers}
          >
            {cells}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

TableRow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowData: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired,
  rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expandColumnKey: PropTypes.string,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  depth: PropTypes.number,
  rootIndex: PropTypes.number,
  onRowHover: PropTypes.func,
  onRowExpand: PropTypes.func,
  rowEventHandlers: PropTypes.object,
  renderRow: PropTypes.func,
  renderCell: PropTypes.func,
  expandIcon: PropTypes.any
};

export default TableRow;
