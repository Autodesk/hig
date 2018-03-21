import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import ToastPresenter from "./ToastPresenter";
import "./toastAnimator.scss";

export default class ToastAnimator extends React.Component {
  render() {
    const {
      in: inProp,
      unmountOnExit,
      children,
      ...presenterProps
    } = this.props;
    return (
      <CSSTransition
        in={inProp}
        classNames="hig__toast__animator"
        unmountOnExit={unmountOnExit}
      >
        <ToastPresenter {...presenterProps}>{children}</ToastPresenter>
      </CSSTransition>
    );
  }
}

ToastAnimator.defaultProps = {
  in: true,
  unmountOnExit: true
};

ToastAnimator.propTypes = {
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
