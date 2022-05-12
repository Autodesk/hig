import React from "react";
import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import ProfileContent from "../presenters/ProfileContentPresenter";

function renderChildren() {
  return <p>Child content can go here.</p>;
}

function renderProfileContent() {
  return (
    <ProfileContent
      profileName="David Gonzalez"
      profileEmail="gonzalezd@autodesk.com"
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
      avatarName: "David Gonzalez",
    }),
  },
];
