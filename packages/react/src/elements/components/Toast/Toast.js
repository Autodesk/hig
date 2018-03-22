import React from "react";
import PropTypes from "prop-types";
import VerticallyFadeIn from "../../../animations/VerticallyFadeIn";
import ToastPresenter from "./ToastPresenter";

export default class Toast extends React.Component {
  render() {
    const { in: inProp, children, ...presenterProps } = this.props;
    return (
      <VerticallyFadeIn
        in={inProp}
        classNames="hig__toast__animator"
        unmountOnExit
      >
        <ToastPresenter {...presenterProps}>{children}</ToastPresenter>
      </VerticallyFadeIn>
    );
  }
}

Toast.defaultProps = {
  in: true
};

Toast.propTypes = {
  /**
   * Content for the toast
   */
  children: PropTypes.node,
  /**
   * Show the component; triggers the enter or exit states. Corresponds to the Transition `in` prop.
   */
  in: PropTypes.bool
};
