import PropTypes from "prop-types";

export default {
  /** Data about the theme */
  metadata: PropTypes.shape({
    /** Uniquely identifies a theme */
    id: PropTypes.string.isRequired,
    /** A theme's human-readable name */
    name: PropTypes.string.isRequired,
    /** A class available to identify the color scheme */
    className: PropTypes.string.isRequired,
    /** A color scheme's human-readable name */
    colorSchemeName: PropTypes.string.isRequired,
    /** Uniquely identifies color scheme of the theme */
    colorSchemeId: PropTypes.string.isRequired,
    /** Data describing density level of the theme */
    density: PropTypes.string.isRequired,
    /** A human-readable label for the theme's density */
    densityName: PropTypes.string.isRequired,
  }),
  /** Data describing presentation of the theme */
  resolvedRoles: PropTypes.object.isRequired,
  /** Data describing configuration of the theme */
  unresolvedRoles: PropTypes.object.isRequired,
};
