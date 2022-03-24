import React from "react";
import PropTypes from "prop-types";

const GroupElements = ({ children, isExpanded }) => (
  <>{children({ isExpanded })}</>
);

GroupElements.propTypes = {
  children: PropTypes.func,
  isExpanded: PropTypes.bool
};

export default GroupElements;
