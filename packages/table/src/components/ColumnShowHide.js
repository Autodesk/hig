/* eslint-disable react/forbid-prop-types */

import React from "react";
import PropTypes from "prop-types";

const ColumnShowHide = ({
  allColumns,
  children,
  columnHeaderArray,
  setColumnHeaderArray,
  toggleHideAllColumnsProps,
}) => (
  <div>
    {children({
      allColumns,
      columnHeaderArray,
      setColumnHeaderArray,
      toggleHideAllColumnsProps,
    })}
  </div>
);

ColumnShowHide.propTypes = {
  allColumns: PropTypes.array,
  children: PropTypes.func,
  columnHeaderArray: PropTypes.array,
  setColumnHeaderArray: PropTypes.func,
  toggleHideAllColumnsProps: PropTypes.func,
};

export default ColumnShowHide;
