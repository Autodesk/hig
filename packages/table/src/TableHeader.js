import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import isEqual from "lodash/isEqual";
import { ThemeContext } from "@hig/themes";

/**
 * Header component for the Table
 */
class TableHeader extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.className !== this.props.className ||
      !isEqual(nextProps.style, this.props.style) ||
      nextProps.columns !== this.props.columns ||
      nextProps.renderCell !== this.props.renderCell
    );
  }

  render() {
    const {
      className,
      style,
      columns,
      expandColumnKey,
      renderHeader,
      renderCell,
      expandIcon: ExpandIcon
    } = this.props;

    const cells = renderHeader
      ? renderHeader({ columns })
      : columns.map((column, columnIndex) =>
          renderCell({
            column,
            columnIndex,
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
  expandColumnKey: PropTypes.string,
  renderHeader: PropTypes.func,
  renderCell: PropTypes.func,
  expandIcon: PropTypes.any
};

export default TableHeader;
