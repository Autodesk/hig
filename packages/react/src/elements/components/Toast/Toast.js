import React from "react";
import PropTypes from "prop-types";
import ToastPresenter from "./ToastPresenter";
import ToastAnimator from "./ToastAnimator";

function Toast({ in: inProp, ...toastProps }) {
  return (
    <ToastAnimator in={inProp}>
      <ToastPresenter {...toastProps} />
    </ToastAnimator>
  );
}

Toast.propTypes = {
  in: PropTypes.bool
};

export default Toast;
