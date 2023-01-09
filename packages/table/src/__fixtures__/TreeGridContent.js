/* eslint-disable */
import React from "react";
import { css } from "emotion";

const defaultOffset = {
  padding: `2px 0 0 35px`,
};

const beforeDash = {
  borderTop: `1px dashed #C4C4C4`,
  display: `inline-block`,
  content: `""`,
  left: `20px`,
  margin: 0,
  position: `absolute`,
  top: `5px`,
  transform: `translateY(10px)`,
  width: `24px`,
};

const afterDash = {
  borderLeft: `1px dashed #C4C4C4`,
  display: `inline-block`,
  content: `""`,
  height: `100%`,
  left: `16px`,
  position: `absolute`,
  top: `0`,
  width: `20px`,
};

const styles = {
  treeWrap: {
    display: `flex`,
  },
  treeDash: {
    ...defaultOffset,
    "&::before": {
      ...beforeDash,
    },
    "&::after": {
      ...afterDash,
    },
  },
  treeDashLast: {
    ...defaultOffset,
    "&::before": {
      ...beforeDash,
      top: `8px`,
    },
    "&::after": {
      ...afterDash,
      height: `60%`,
    },
  },
};

const TreeGridContent = ({ value, last }) => (
  <div className={css(last ? styles.treeDashLast : styles.treeDash)}>
    {value}
  </div>
);

export default TreeGridContent;
