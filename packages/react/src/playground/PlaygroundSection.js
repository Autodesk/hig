import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container, H3, Spacer } from "../hig-react";

class PlaygroundSection extends PureComponent {
  render() {
    return (
      <section>
        <Container>
          <H3>{this.props.title}</H3>
          <Spacer width="m" />
          {this.props.children}
        </Container>
      </section>
    );
  }
}

PlaygroundSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default PlaygroundSection;
