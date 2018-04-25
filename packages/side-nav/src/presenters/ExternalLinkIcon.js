import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon, { names as iconNames, sizes as iconSizes } from "@hig/icon";

export default class ExternalLinkIcon extends Component {
  static propTypes = {
    /** Size of the icon */
    size: PropTypes.oneOf(Object.values(iconSizes))
  };

  static defaultProps = {
    size: iconSizes.PX_24
  };

  render() {
    return <Icon name={iconNames.EXTERNAL_LINK} size={this.props.size} />;
  }
}
