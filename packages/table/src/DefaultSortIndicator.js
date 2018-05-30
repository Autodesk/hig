import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import SortOrder from "./SortOrder";

/**
 * Default sort indicator for the Table
 */
const DefaultSortIndicator = ({ sortOrder, className, style }) => {
  const cls = cn("hig__table__sort-indicator", className, {
    "hig__table__sort-indicator--descending": sortOrder === SortOrder.DESC
  });
  return (
    <div className={cls} style={style}>
      {sortOrder === SortOrder.DESC ? "↓" : "↑"}
    </div>
  );
};

DefaultSortIndicator.propTypes = {
  sortOrder: PropTypes.oneOf([SortOrder.ASC, SortOrder.DESC]),
  className: PropTypes.string,
  style: PropTypes.object
};

export default DefaultSortIndicator;
