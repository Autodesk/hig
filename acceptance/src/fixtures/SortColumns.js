import React from 'react';
// import {CaretUp16, CaretDown16} from '@hig/icons';
import {CaretUp16, CaretDown16} from '@hig/icons';

import styled from "@emotion/styled";

const SortIconHolder = styled.span`
    position: relative;
    top: 3px;
    left: 20px;
    opacity: 0;

    &:hover {
        opacity: .5;
    }
`;

const SortColumns = (props) => {
    const renderSortIcon = (e) => {
        return props.passedData.isSortedDesc ? <CaretDown16 /> :  <CaretUp16 />
    }

    return (
        <SortIconHolder className={props.passedData.className}>{renderSortIcon()}</SortIconHolder>
    )
}

export default SortColumns;
