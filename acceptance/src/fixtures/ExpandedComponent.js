import React from 'react';
import styled from "@emotion/styled";

const StylesExpanded = styled.div`
    height: 500px;
    padding: 20px;
`

const ExpandedComponent = () => {
    return (
        <StylesExpanded>
            Custom Expanded Content
        </StylesExpanded>
    )
}

export default ExpandedComponent;
