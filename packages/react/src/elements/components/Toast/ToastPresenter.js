import React from "react";
import "./toast.css";

const ToastPresenter = props => (
  <div className="hig__toast">{props.children}</div>
);

export default ToastPresenter;
