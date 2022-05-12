/* eslint-disable react/forbid-prop-types */

import React from "react";
import PropTypes from "prop-types";

const GenericApplication = ({
  children,
  toggleHideAllColumnsProps,
  allColumns,
}) => <div>{children({ toggleHideAllColumnsProps, allColumns })}</div>;

GenericApplication.propTypes = {
  children: PropTypes.func,
  toggleHideAllColumnsProps: PropTypes.func,
  allColumns: PropTypes.array,
};

export default GenericApplication;
