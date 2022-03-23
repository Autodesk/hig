import React from "react";
import PropTypes from "prop-types";

const SortColumns = ({ children, isSorted, isSortedDesc }) => (
  <>{children({ isSorted, isSortedDesc })}</>
);

SortColumns.propTypes = {
  children: PropTypes.func,
  isSorted: PropTypes.bool,
  isSortedDesc: PropTypes.bool
};

export default SortColumns;
