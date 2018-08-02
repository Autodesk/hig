import PropTypes from "prop-types";

export default {
  /** Uniquely identifies a theme */
  themeId: PropTypes.string,
  /** A class added to each themed element */
  themeClass: PropTypes.string,
  /** A theme's human-readable name */
  themeName: PropTypes.string,
  /** Data describing presentation of the theme */
  themeData: PropTypes.object,
  /** Data describing configuration of the theme */
  themeConfig: PropTypes.object,
  /** Data describing density level of the theme */
  density: PropTypes.string
};
