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
    const lowerCaseHeaderCopy = headerArray.map((item) =>
      item.split(" ").join("").toLowerCase()
    );
    const preOrderedArray = allColumns
      ?.filter(
        (column) =>
          lowerCaseHeaderCopy.indexOf(
            column.id.split(" ").join("").toLowerCase()
          ) > -1 || column?.Header === ""
      )
      .map((item) => item.Header);

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
