import React from 'react';

const ColumnSearchInput = (props) => {
  return (
    <span>
      Search: {' '}
      <input
        value={props.passedData.filterValue || ''}
        onChange={e => props.passedData.setFilter(e.target.value)}
      />
    </span>
    
  )
}
 
export default ColumnSearchInput;
