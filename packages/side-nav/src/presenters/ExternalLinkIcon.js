import React, { Component } from "react";
import PropTypes from "prop-types";
import { ExternalLink16, ExternalLink24, sizes as iconSizes } from "@hig/icons";

export default class ExternalLinkIcon extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    /** Size of the icon */
    size: PropTypes.oneOf(Object.values(iconSizes)),
    /** Color of the icon */
    color: PropTypes.string,
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    size: iconSizes.PX_24,
  };

  render() {
    if (this.props.size === iconSizes.PX_24) {
      return <ExternalLink24 color={this.props.color} />;
    }

    return <ExternalLink16 color={this.props.color} />;
  }
}
