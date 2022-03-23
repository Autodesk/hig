import React from "react";
import PropTypes from "prop-types";

const ColumnFilter = props => {
  const { filterValue, setFilter } = props.passedProps.column;

  return <span>{props.children({ filterValue, setFilter })}</span>;
};

ColumnFilter.propTypes = {
  children: PropTypes.func,
  passedProps: PropTypes.shape({
    column: PropTypes.string,
    setFilter: PropTypes.bool,
    filterValue: PropTypes.string
  })
};

export default ColumnFilter;
