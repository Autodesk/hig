import React from "react";
import Button from "@hig/button";
import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import ProfileContent from "../presenters/ProfileContent";

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
      profileName={"David Gonzalez"}
      profileEmail={"gonzalezd@autodesk.com"}
    >
      {renderChildren()}
    </ProfileContent>
  );
}

export default [
  {
    description: "default",
    getProps: () => ({
      children: renderProfileContent(),
      avatarImage: avatarImagePath,
      avatarName: "David Gonzalez"
    })
  }
];
