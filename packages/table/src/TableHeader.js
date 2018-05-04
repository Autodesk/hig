import React from "react";
import PropTypes from "prop-types";

/**
 * Header component for the Table
 */
class TableHeader extends React.PureComponent {
  render() {
    const {
      className,
      style,
      columns,
      isScrolling,
      expandColumnKey,
      renderHeader,
      renderCell,
      expandIcon: ExpandIcon
    } = this.props;

    const cells = renderHeader
      ? renderHeader({ isScrolling, columns })
      : columns.map((column, columnIndex) =>
          renderCell({
            column,
            columnIndex,
            isScrolling,
            expandIcon: column.key === expandColumnKey && <ExpandIcon />
          })
        );

    return (
      <div className={className} style={style}>
        {cells}
      </div>
    );
  }
}

TableHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  isScrolling: PropTypes.bool,
  expandColumnKey: PropTypes.string,
  renderHeader: PropTypes.func,
  renderCell: PropTypes.func,
  expandIcon: PropTypes.any
};

export default TableHeader;
