import React, { Component } from "react";
import PropTypes from "prop-types";
import "./rich-text.scss";

export default class RichText extends Component {
  render() {
    return this.props.children ? (
      <div className="hig__rich-text">{this.props.children}</div>
    ) : (
      <div
        className="hig__rich-text"
        dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML} // eslint-disable-line react/no-danger
      />
    );
  }
}

RichText.propTypes = {
  /**
   * React-generated markup to style with HIG typography rules
   */
  children: PropTypes.node,
  /**
   * HTML string to be rendered and styled with HIG typography rules
   */
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string
  })
};
