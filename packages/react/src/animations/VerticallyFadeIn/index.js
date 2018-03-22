import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./verticallyFadeIn.scss";

export default class VerticallyFadeIn extends React.Component {
  render() {
    const { in: inProp, unmountOnExit, children } = this.props;
    return (
      <CSSTransition
        in={inProp}
        classNames="hig__vertically-fade-in"
        unmountOnExit={unmountOnExit}
      >
        {children}
      </CSSTransition>
    );
  }
}

VerticallyFadeIn.propTypes = {
  /**
   * Content for the toast
   */
  children: PropTypes.node,
  /**
   * Show the component; triggers the enter or exit states. Corresponds to the Transition `in` prop.
   */
  in: PropTypes.bool,
  /**
   * Whether to unmount the component when transition exits. Corresponds to the Transition `unmountOnExit` prop.
   */
  unmountOnExit: PropTypes.bool
};
