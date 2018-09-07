import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@hig/button";
import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import ProfileFlyoutPresenter from "../presenters/ProfileFlyoutPresenter";
import ProfileContent from "../presenters/ProfileContent";
import "./ProfileFlyoutPresenter.stories-test.scss";

function renderChildren() {
  return (
    <div className="hig__profile-flyout__content__links">
      <div className={"hig__profile-flyout__content__link"}>
        <Button
          title={"Sign Out"}
          type={"secondary"}
          link={"https://www.autodesk.com/"}
          size={"small"}
        />
      </div>
      <div className={"hig__profile-flyout__content__link"}>
        <Button
          title={"Profile Settings"}
          type={"secondary"}
          link={"https://www.autodesk.com/"}
          size={"small"}
        />
      </div>
    </div>
  );
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
