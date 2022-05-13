import React from "react";
import { storiesOf } from "@storybook/react";
import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";

import ProfileFlyout, { ProfileContent } from "../index";

function Wrapper({ children }) {
  return (
    <div
      data-capture="ProfileFlyout"
      style={{
        display: "flex",
        width: "400px",
        height: "400px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}

storiesOf("ProfileFlyout", module)
  .add("default", () => (
    <Wrapper>
      <ProfileFlyout avatarName="Shuri Wright" avatarImage={avatarImagePath} />
    </Wrapper>
  ))
  .add("open with children", () => (
    <Wrapper>
      <ProfileFlyout
        avatarName="Shuri Wright"
        avatarImage={avatarImagePath}
        open
      >
        <ProfileContent
          profileName="Shuri Wright"
          profileEmail="shuri@wakanda.gov"
        >
          <p>Child content goes here.</p>
        </ProfileContent>
      </ProfileFlyout>
    </Wrapper>
  ));
