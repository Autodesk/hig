import React from 'react';
import PropTypes from 'prop-types';

function RichText(props) {
  return <div dangerouslySetInnerHTML={props.dangerouslySetInnerHTML} className="hig__rich-text">{props.children}</div>;
}

RichText.propTypes = {
  children: PropTypes.node,
  dangerouslySetInnerHTML: PropTypes.any
}

RichText.defaultProps = {
  children: null,
  dangerouslySetInnerHTML: null
}

export default RichText;
