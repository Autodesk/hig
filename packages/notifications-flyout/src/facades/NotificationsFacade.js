import PropTypes from "prop-types";

/**
 * @typedef {Object} Props
 * @property {import("react").ReactChildren} [children]
 */

/**
 * @typedef {import("react").ReactElement<Props>} Element
 */

/**
 * Wrapper component for <Notification> components
 * @param {Props} props
 * @returns {null}
 */
export default function NotificationsFacade() {
  return null;
}

NotificationsFacade.propTypes = {
  /** <Notification /> components */
  children: PropTypes.node
};
