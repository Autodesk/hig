import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@hig/button";
import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import ProfileFlyoutPresenter from "../presenters/ProfileFlyoutPresenter";

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

storiesOf("ProfileFlyoutPresenter", module)
  .add("default", () => (
    <ProfileFlyoutPresenter
      email={"shuri@wakanda.gov"}
      name={"Shuri Wright"}
      image={avatarImagePath}
    />
  ))
  .add("open", () => (
    <ProfileFlyoutPresenter
      email={"shuri@wakanda.gov"}
      name={"Shuri Wright"}
      image={avatarImagePath}
      open
    />
  ))
  .add("with children", () => (
    <ProfileFlyoutPresenter
      email={"shuri@wakanda.gov"}
      name={"Shuri Wright"}
      image={avatarImagePath}
      open
    >
      {renderChildren()}
    </ProfileFlyoutPresenter>
  ));
