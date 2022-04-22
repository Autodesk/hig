/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

const DataGroupComponent = ({
  children,
  styles,
  groupNames,
  count,
  data,
  dataGroup
}) => <div>{children({ styles, groupNames, count, data, dataGroup })}</div>;

DataGroupComponent.propTypes = {
  children: PropTypes.func,
  styles: PropTypes.any,
  groupNames: PropTypes.any,
  count: PropTypes.number,
  data: PropTypes.any,
  dataGroup: PropTypes.any
};

export default DataGroupComponent;
