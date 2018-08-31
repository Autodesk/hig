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
            open
          />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
