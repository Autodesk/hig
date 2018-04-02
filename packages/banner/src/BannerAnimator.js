import PropTypes from "prop-types";

/**
 * @typedef {Object} BannerAnimatorProps
 * @property {boolean} isVisible
 * @property {JSX.Element} children
 */

/**
 * @param {BannerAnimatorProps} props
 * @returns {JSX.Element}
 * @todo Complete implementation
 */
export default function BannerAnimator({ isVisible, children }) {
  return isVisible ? children : null;
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
