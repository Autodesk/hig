import React from "react";

const SortColumns = ({ children, isSorted, isSortedDesc }) => (
  <>{children({ isSorted, isSortedDesc })}</>
);

export default SortColumns;
