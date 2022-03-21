import React from "react";
import { css } from "emotion";

const ExpandedContent = ({ children, expandedContentStyles }) => (
  <div className={css(expandedContentStyles.higTableCustomExpander)}>
    {children()}
  </div>
);

export default ExpandedContent;
