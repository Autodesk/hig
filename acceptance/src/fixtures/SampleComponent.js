import React from "react";
import { css } from "emotion";

import {Complete16} from '@hig/icons';

const styles = {
  button: {
    height: "90%",
    padding: "6px",
    border: "none",
    background: "none",
    marginRight: "10px"
  },
  label: {
    marginTop: "4px",
    marginRight: "10px"
  },
  nameWrapper: {
    marginTop: "4px"
  },
  items: {
    border: "0px solid palevioletred",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between"
  }
}
const SampleComponent = props => {
  const curItem = props.passedData.data[props.passedData.value - 1];
  const handleClick = () => {
    // console.log('click cell component');
  }

  return (
    <div className={css(styles.items)}>
        <button className={css(styles.button)} onClick={handleClick()}><Complete16/></button>
        <label className={css(styles.label)}>{props.passedData.value}</label>
        <div className={css(styles.nameWrapper)}>{curItem?.name}</div>
    </div>
  );
};

export default SampleComponent;
