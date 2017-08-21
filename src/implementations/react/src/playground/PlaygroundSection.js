import React from 'react';
import * as PropTypes from 'prop-types';

function PlaygroundSection(props) {
  return (
    <section>
      <h3>{props.title}</h3>
      {props.children}
    </section>
  )
}

PlaygroundSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default PlaygroundSection;
