import React from "react";
import PropTypes from "prop-types";

const ColumnShowHide = ({
  children,
  toggleHideAllColumnsProps,
  allColumns
}) => <div>{children({ toggleHideAllColumnsProps, allColumns })}</div>;

ColumnShowHide.propTypes = {
  children: PropTypes.func,
  toggleHideAllColumnsProps: PropTypes.bool,
  allColumns: PropTypes.bool
};

export default ColumnShowHide;
