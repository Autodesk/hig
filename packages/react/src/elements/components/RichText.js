/* eslint-disable react/no-danger */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { RichText as VanillaRichText } from "hig-vanilla";

export default class RichText extends Component {
  render() {
    return this.props.children ? (
      <div className={VanillaRichText.className}>{this.props.children}</div>
    ) : (
      <div
        className={VanillaRichText.className}
        dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML}
      />
    );
  }
}
/* eslint-enable react/no-danger */

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
