import React from "react";

const ColumnShowHide = ({
  children,
  toggleHideAllColumnsProps,
  allColumns
}) => <div>{children({ toggleHideAllColumnsProps, allColumns })}</div>;

export default ColumnShowHide;
