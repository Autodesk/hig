import React from 'react';
import PropTypes from 'prop-types';

function RichText(props) {
  return <div className="hig__rich-text">{props.children}</div>;
}

RichText.propTypes = {
  children: PropTypes.node
}

RichText.defaultProps = {
  children: null
}

export default RichText;
