import PropTypes from "prop-types";

export default {
  /** Uniquely identifies a theme */
  themeId: PropTypes.string,
  /** A class added to each themed element */
  themeClass: PropTypes.string,
  /** A theme's human-readable name */
  themeName: PropTypes.string,
  /** Data describing presentation of the theme */
  themeData: PropTypes.object
};
