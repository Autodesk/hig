import React from "react";

const ColumnFilter = props => {
  const { filterValue, setFilter } = props.passedProps.column;

  return <span>{props.children({ filterValue, setFilter })}</span>;
};

export default ColumnFilter;
