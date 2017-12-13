import React, { Component } from "react";
import PropTypes from "prop-types";

import NotificationsAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationsAdapter";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  onClick = event => {
    this.props.onClick(event);
    this.setState({ open: true });
  };

  onClickOutside = event => {
    this.props.onClickOutside(event);
    this.setState({ open: false });
  };

  render() {
    return (
      <NotificationsAdapter
        {...this.props}
        onClick={this.onClick}
        onClickOutside={this.onClickOutside}
        open={this.state.open}
        unreadCount={this.props.unreadCount}
      >
        {this.props.children}
      </NotificationsAdapter>
    );
  }
}

export default Notifications;
