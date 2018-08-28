import React from "react";
import renderer from "react-test-renderer";
import ProfileFlyout from "./ProfileFlyout";

describe("profile-flyout/ProfileFlyout", () => {
  describe("integration", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <ProfileFlyout
            email={"thelma@autodesk.com"}
            image={"http://placekitten.com/g/32/32"}
            name={"Thelma Dickinson"}
            onProfileClickOutside={function onProfileClickOutside() {}}
            onProfileImageClick={function onProfileImageClick() {}}
            onProfileSettingsClick={function onProfileSettingsClick() {}}
            onSignOutClick={function onSignOutClick() {}}
            open={true}
            profileSettingsLabel={"Profile Settings"}
            profileSettingsLink={"https://www.autodesk.com/"}
            signOutLabel={"Sign Out"}
            signOutLink={"https://www.autodesk.com/"}
          />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
