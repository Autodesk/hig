/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const ExpandedContent = ({ children, expandedContentStyles }) => (
  <div className={css(expandedContentStyles.higTableCustomExpander)}>
    {children()}
  </div>
);

ExpandedContent.propTypes = {
  children: PropTypes.func,
  expandedContentStyles: PropTypes.any
};

export default ExpandedContent;
