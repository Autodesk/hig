import React from "react";
import PropTypes from "prop-types";
import { ExternalLink16, ExternalLink24, sizes as iconSizes } from "@hig/icons";

const ExternalLinkIcon = props => {
  if (props.size === iconSizes.PX_24) {
    return <ExternalLink24 color={props.color} />;
  }

  return <ExternalLink16 color={props.color} />;
};

ExternalLinkIcon.displayName = "ExternalLinkIcon";

ExternalLinkIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf(Object.values(iconSizes)),
  /** Color of the icon */
  color: PropTypes.string
};

ExternalLinkIcon.defaultProps = {
  size: iconSizes.PX_24
};

export default ExternalLinkIcon;
