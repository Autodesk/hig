import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ToastListAnimator from "./ToastListAnimator";
import classNames from "./classNames";
import { placements, AVAILABLE_PLACEMENTS } from "./placements";
import "./toastList.scss";

const MAX_TOASTS_ONSCREEN = 3;

const wrapperModifiersByPlacement = {
  [placements.BOTTOM]: classNames.wrapperBottom,
  [placements.TOP]: classNames.wrapperTop
};

export default class ToastList extends React.Component {
  static AVAILABLE_PLACEMENTS = AVAILABLE_PLACEMENTS;
  static placements = placements;

  render() {
    const classes = cx(
      classNames.wrapper,
      wrapperModifiersByPlacement[this.props.placement]
    );

    const keyedChildren = React.Children.toArray(this.props.children);

    return (
      <div className={classes}>
        <ToastListAnimator placement={this.props.placement}>
          {keyedChildren.slice(0, MAX_TOASTS_ONSCREEN)}
        </ToastListAnimator>
      </div>
    );
  }
}

ToastList.propTypes = {
  /**
   * Determines the placement of the ToastList.
   * The list will be sorted such that the most recently added notification will
   *  appear closest to the page edge.
   */
  placement: PropTypes.oneOf(AVAILABLE_PLACEMENTS),
  /**
   * A list of Toast elements to render
   */
  children: PropTypes.node
};
