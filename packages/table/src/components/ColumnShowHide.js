/* eslint-disable react/forbid-prop-types */

import React from "react";
import PropTypes from "prop-types";

const ColumnShowHide = ({
  allColumns,
  children,
  columnHeaderArray,
  setColumnHeaderArray,
  toggleHideAllColumnsProps,
}) => {
  const filteredSetColumnHeaderArray = (headerArray) => {
    const preOrderedArray = allColumns
      ?.filter((column) => headerArray.indexOf(column.id) > -1)
      .map((item) => item.id);

    setColumnHeaderArray(preOrderedArray);
  };

  return (
    <div>
      {children({
        allColumns,
        columnHeaderArray,
        setColumnHeaderArray: filteredSetColumnHeaderArray,
        toggleHideAllColumnsProps,
      })}
    </div>
  );
};

ColumnShowHide.propTypes = {
  allColumns: PropTypes.array,
  children: PropTypes.func,
  columnHeaderArray: PropTypes.array,
  setColumnHeaderArray: PropTypes.func,
  toggleHideAllColumnsProps: PropTypes.func,
};

export default ColumnShowHide;
