import React, { Component } from "react";
import PropTypes from "prop-types";

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="hig__notification__title">{this.props.title}</div>
        <div className="hig__notifications__list">
          <div className="hig__notifications__list-content hig__notifications__list-content--loaded">
            {this.props.children}
          </div>
          <div className="hig__notifications__loading-container" />
        </div>
      </div>
    );
  }
}

List.propTypes = {
  /**
   * Notifications that show up in the list
   */
  children: PropTypes.string,
  /**
   * Title attribute for list
   */
  title: PropTypes.string
};
