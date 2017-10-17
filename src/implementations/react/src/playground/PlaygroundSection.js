import React, { PureComponent } from "react";
import * as PropTypes from "prop-types";

class PlaygroundSection extends PureComponent {
  render() {
    return (
      <section>
        <h3>{this.props.title}</h3>
        {this.props.children}
      </section>
    );
  }
}

PlaygroundSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default PlaygroundSection;
