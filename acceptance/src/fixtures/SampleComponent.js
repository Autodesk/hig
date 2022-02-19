import React from "react";
import styled from "@emotion/styled";

import {Complete16} from '@hig/icons';

const StylesButton = styled.button`
  padding: 6px;
  border: none;
  background: none;
  margin-right: 10px;
`;

const StylesItems = styled.div`
  border: 0px solid palevioletred;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  label {
    margin-top: 4px;
    margin-right: 10px;
  }

  button {
    height: 90%
  }
`;

const StylesName = styled.div`
  margin-top: 4px;
`;

const SampleComponent = props => {
  const curItem = props.passedData.data[props.passedData.value - 1];
  const handleClick = () => {
    // console.log('click cell component');
  }

  return (
    <StylesItems>
        <StylesButton onClick={handleClick()}><Complete16/></StylesButton>
        <label>{props.passedData.value}</label>
        <StylesName>{curItem?.name}</StylesName>
    </StylesItems>
  );
};

export default SampleComponent;
