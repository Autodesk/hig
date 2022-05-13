import React from "react";
import PropTypes from "prop-types";

const SortColumns = ({ children, isSorted, isSortedDesc, density }) => (
  <>{children({ isSorted, isSortedDesc, density })}</>
);

SortColumns.propTypes = {
  children: PropTypes.func,
  isSorted: PropTypes.bool,
  isSortedDesc: PropTypes.bool,
  density: PropTypes.string,
};

export default SortColumns;
