import React, { Component } from "react";
import ProfileAdapter from "../../../../adapters/GlobalNav/TopNav/ProfileAdapter";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleProfileImageClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleProfileClickOutside = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <ProfileAdapter
        open={this.state.open}
        {...this.props}
        onProfileImageClick={this.handleProfileImageClick}
        onProfileClickOutside={this.handleProfileClickOutside}
      />
    );
  }
}

export default Profile;
