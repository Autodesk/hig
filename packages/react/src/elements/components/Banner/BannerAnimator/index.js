import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";

/**
 * @typedef {Object} BannerAnimatorProps
 * @property {boolean} isVisible
 * @property {JSX.Element} children
 */

/**
 * @param {BannerAnimatorProps} props
 * @returns {JSX.Element}
 */
export default function BannerAnimator({ isVisible, children }) {
  return (
    <CSSTransition in={isVisible} timeout={1000} classNames="hig__banner--">
      {children}
    </CSSTransition>
  );
}

BannerAnimator.defaultProps = {
  isVisible: true
};

BannerAnimator.propTypes = {
  /** Animation; Determines the visibility of the banner */
  isVisible: PropTypes.bool.isRequired,
  /** The component to be animated */
  children: PropTypes.node.isRequired
};
