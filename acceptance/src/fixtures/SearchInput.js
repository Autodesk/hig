import React from 'react';
import styled from "@emotion/styled";

const SearchField = styled.span`
  margin-left: 20px;
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 14px;
  color: #666;

  input {
    width: 700px;
    padding: 5px;
    border: 1px solid palevioletred;
    border-radius: 6px;
  }
`;

const SearchInput = (props) => {
  return (
    <SearchField>
      Search: {' '}
      <input
        value={props.passedData.filter || ''}
        onChange={e => props.passedData.setFilter(e.target.value)}
      />
    </SearchField>
  )
}

export default SearchInput;
