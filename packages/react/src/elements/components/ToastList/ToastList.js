import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ToastListAnimator from "./ToastListAnimator";
import "./toastList.scss";

const MAX_TOASTS_ONSCREEN = 3;

export default class ToastList extends React.Component {
  render() {
    const toastListWrapperClasses = cx("hig__toast-list-wrapper", {
      [`hig__toast-list-wrapper--position-${this.props.position}`]: this.props
        .position
    });

    const keyedChildren = React.Children.toArray(this.props.children);

    return (
      <div className={toastListWrapperClasses}>
        <ToastListAnimator position={this.props.position}>
          {keyedChildren.slice(0, MAX_TOASTS_ONSCREEN)}
        </ToastListAnimator>
      </div>
    );
  }
}

ToastList.propTypes = {
  /**
   * Whether to render the list of notifications at the top or bottom of the screen.
   * The list will be sorted such that the most recently added notification will
   *  appear closest to the page edge.
   */
  position: PropTypes.oneOf(["top", "bottom"]),
  /**
   * A list of Toast elements to render
   */
  children: PropTypes.node
};
