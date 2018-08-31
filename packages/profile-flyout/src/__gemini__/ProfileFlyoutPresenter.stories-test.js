import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@hig/button";
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
      image={"http://placekitten.com/g/32/32"}
    />
  ))
  .add("open", () => (
    <ProfileFlyoutPresenter
      email={"shuri@wakanda.gov"}
      name={"Shuri Wright"}
      image={"http://placekitten.com/g/32/32"}
      open
    />
  ))
  .add("with children", () => (
    <ProfileFlyoutPresenter
      email={"shuri@wakanda.gov"}
      name={"Shuri Wright"}
      image={"http://placekitten.com/g/32/32"}
      open
      children={renderChildren()}
    />
  ));
