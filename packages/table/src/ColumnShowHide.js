import React from 'react';

const ColumnShowHide = ({children, toggleHideAllColumnsProps, allColumns}) => {
  return (
    <div>{children({toggleHideAllColumnsProps, allColumns})}</div>
  )
}

export default ColumnShowHide;
