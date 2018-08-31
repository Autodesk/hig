import React, { Component } from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";

const TRANSITION_DURATION = 300;

export default class ContainerTransition extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    open: PropTypes.bool
  };

  static defaultProps = {
    open: false
  };

  state = {
    in: this.props.open,
    isVisible: this.props.open
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.show();
    } else if (prevProps.open && !this.props.open) {
      this.beginExit();
    }
  }

  beginExit() {
    window.requestAnimationFrame(() => {
      this.setState({ in: false });
    });
  }

  show() {
    window.requestAnimationFrame(() => {
      this.setState({ isVisible: true }, () => {
        window.requestAnimationFrame(() => {
          this.setState({ in: true });
        });
      });
    });
  }

  hide() {
    window.requestAnimationFrame(() => {
      this.setState({ isVisible: false });
    });
  }

  handleExit = () => {
    this.hide();
  };

  render() {
    const { isVisible } = this.state;

    return (
      <Transition
        in={this.state.in}
        timeout={TRANSITION_DURATION}
        onExited={this.handleExit}
      >
        {transitionStatus =>
          this.props.children({ transitionStatus, isVisible })
        }
      </Transition>
    );
  }
}
