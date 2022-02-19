import React from 'react';
import styled from "@emotion/styled";

const SearchField = styled.div`
  margin-bottom: 20px;
`;

const GlobalFilter = ({filter, setFilter, children}) => {
  return (
    <SearchField>
      {children({filter, setFilter})}
    </SearchField>
  )
}

export default GlobalFilter;
