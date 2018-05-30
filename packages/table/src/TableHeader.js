import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

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
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div className={cx(className, themeClass)} style={style}>
            {cells}
          </div>
        )}
      </ThemeContext.Consumer>
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
