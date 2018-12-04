import React, { Component } from "react";
import PropTypes from "prop-types";
import { ExternalLink16, ExternalLink24, sizes as iconSizes } from "@hig/icons";

export default class ExternalLinkIcon extends Component {
  static propTypes = {
    /** Size of the icon */
    size: PropTypes.oneOf(Object.values(iconSizes))
  };

  static defaultProps = {
    size: iconSizes.PX_24
  };

  render() {
    if (this.props.size === iconSizes.PX_24) return <ExternalLink24 />;
    if (this.props.size === iconSizes.PX_16) return <ExternalLink16 />;
    return <ExternalLink24 />;
  }
}
