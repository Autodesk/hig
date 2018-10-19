import PropTypes from "prop-types";

export default {
  /** Uniquely identifies a theme */
  id: PropTypes.string,
  /** A class added to each themed element */
  className: PropTypes.string,
  /** A theme's human-readable name */
  name: PropTypes.string,
  /** Data describing presentation of the theme */
  resolvedRoles: PropTypes.object,
  /** Data describing configuration of the theme */
  unresolvedRoles: PropTypes.object,
  /** Data describing density level of the theme */
  density: PropTypes.string,
  /** A human-readable label for the theme's density */
  densityName: PropTypes.string
};
