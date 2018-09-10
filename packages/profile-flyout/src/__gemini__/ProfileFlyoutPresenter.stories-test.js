import React from "react";
import { storiesOf } from "@storybook/react";
import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import ProfileFlyoutPresenter from "../presenters/ProfileFlyoutPresenter";
import ProfileContent from "../presenters/ProfileContent";
import "./ProfileFlyoutPresenter.stories-test.scss";

function renderChildren() {
  return <p>Child content goes here.</p>;
}

function renderProfileContent() {
  return (
    <ProfileContent
      profileName={"Shuri Wright"}
      profileEmail={"shuri@wakanda.gov"}
    >
      {renderChildren()}
    </ProfileContent>
  );
}

storiesOf("ProfileFlyoutPresenter", module)
  .add("default", () => (
    <ProfileFlyoutPresenter
      avatarName={"Shuri Wright"}
      avatarImage={avatarImagePath}
    />
  ))
  .add("open with children", () => (
    <ProfileFlyoutPresenter
      avatarName={"Shuri Wright"}
      avatarImage={avatarImagePath}
      open
    >
      {renderProfileContent()}
    </ProfileFlyoutPresenter>
  ));
