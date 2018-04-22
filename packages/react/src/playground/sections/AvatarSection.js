import React, { PureComponent } from "react";
import Avatar from "@hig/avatar";

import PlaygroundSection from "../PlaygroundSection";
import AvatarImage from "../images/profileImage.png";

class AvatarSection extends PureComponent {
  render() {
    return (
      <PlaygroundSection title="Avatar">
        <Avatar name="John Snow" size="small" />
        <Avatar name="John Snow" size="medium" />
        <Avatar name="John Snow" size="large" />
        <Avatar name="John Snow" size="extralarge" />
        <Avatar name="John Snow" image={AvatarImage} size="small" />
        <Avatar name="John Snow" image={AvatarImage} size="medium" />
        <Avatar name="John Snow" image={AvatarImage} size="large" />
        <Avatar name="John Snow" image={AvatarImage} size="extralarge" />
      </PlaygroundSection>
    );
  }
}

export default AvatarSection;
