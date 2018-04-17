import React, { Component } from "react";
import PropTypes from "prop-types";

import "./skeleton-item.scss";

export default class SkeletonItem extends Component {
  static propTypes = {
    /** Sets max width of the skeleton item */
    maxWidth: PropTypes.string,
    /** Sets spacing below the skeleton item */
    marginBottom: PropTypes.string
  };

  render() {
    return (
      <div className="hig__skeleton-item" style={{ maxWidth: this.props.maxWidth, marginBottom: this.props.marginBottom }} />
    );
  }
}
