/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";

function RichText(props) {
  return props.children ? (
    <div className="hig__rich-text">{props.children}</div>
  ) : (
    <div
      className="hig__rich-text"
      dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
    />
  );
}

RichText.propTypes = {
  children: PropTypes.node,
  dangerouslySetInnerHTML: PropTypes.any
};

RichText.defaultProps = {
  children: null,
  dangerouslySetInnerHTML: null
};

export default RichText;
