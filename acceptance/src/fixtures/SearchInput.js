import React from 'react';
import { css } from "emotion";

const styles = {
  span: {
    marginLeft: "20px",
    marginBottom: "20px",
    fontFamily: "sans-serif",
    fontSize: "14px",
    color: "#666"
  },
  input: {
    width: "700px",
    padding: "5px",
    border: "1px solid palevioletred",
    borderRadius: "6px"
  }
};

const SearchInput = (props) => {
  return (
    <span className={css(styles.span)}>
      Search: {' '}
      <input
        className={css(styles.input)}
        value={props.passedData.filter || ''}
        onChange={e => props.passedData.setFilter(e.target.value)}
      />
    </span>
  )
}

export default SearchInput;
