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
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string
  })
};

RichText.defaultProps = {
  children: null,
  dangerouslySetInnerHTML: null
};

RichText.__docgenInfo = {
  props: {
    children: {
      description: "react-generated markup to style with HIG typography rules"
    },
    dangerouslySetInnerHTML: {
      description:
        "HTML string to be rendered and styled with HIG typography rules"
    }
  }
};

export default RichText;
