import React from 'react';
import { MultiCheckbox } from './MultiCheckbox';
import styled from "@emotion/styled";

const ShowHideStyles = styled.div`
  width: 300px;
  border-spacing: 0;
  border: 1px solid palevioletred;
  color: black;
  font-family: sans-serif;
  margin-bottom: 50px;
  padding: 10px;
`;

const ColumnShowHideComponent = (props) => {
    return (
        <ShowHideStyles>
            <div>
            <MultiCheckbox {...props.passedData?.toggleHideAllColumnsProps()} /> Toggle All
            </div>
            {
                props.passedData?.allColumns?.map(column => (
                    <div key={column.id}>
                        <MultiCheckbox {...column.getToggleHiddenProps()} />
                        {typeof column.Header === 'string' ?  column.Header : null}
                    </div>
                    ))
            }
        </ShowHideStyles>
    )
}

export default ColumnShowHideComponent;
