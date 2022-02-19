import React from 'react';
import styled from "@emotion/styled";

const PaginationHolder = styled.div`
  width: 100%;
  padding: 20px;
`;

const Pagination = ({pageDetails, children}) => <PaginationHolder>{children(pageDetails)}</PaginationHolder>;

export default Pagination;
