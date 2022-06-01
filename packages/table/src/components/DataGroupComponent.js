/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

const DataGroupComponent = ({
  children,
  styles,
  groupNames,
  count,
  data,
  dataGroup,
  getAllMultiSelectedRows,
  getActiveMultiSelectRowArray,
  setActiveMultiSelectRowArray,
  setAllMultiSelectedRows,
  getOffset,
  checkboxToggle,
  setCheckboxToggle,
}) => (
  <div>
    {children({
      styles,
      groupNames,
      count,
      data,
      dataGroup,
      getAllMultiSelectedRows,
      getActiveMultiSelectRowArray,
      setActiveMultiSelectRowArray,
      setAllMultiSelectedRows,
      getOffset,
      checkboxToggle,
      setCheckboxToggle,
    })}
  </div>
);

DataGroupComponent.propTypes = {
  children: PropTypes.func,
  styles: PropTypes.any,
  groupNames: PropTypes.any,
  count: PropTypes.number,
  data: PropTypes.any,
  dataGroup: PropTypes.any,
  getAllMultiSelectedRows: PropTypes.func,
  getActiveMultiSelectRowArray: PropTypes.func,
  setActiveMultiSelectRowArray: PropTypes.func,
  setAllMultiSelectedRows: PropTypes.func,
  getOffset: PropTypes.func,
  checkboxToggle: PropTypes.bool,
  setCheckboxToggle: PropTypes.func,
};

export default DataGroupComponent;
