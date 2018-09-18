import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import ProfileFlyoutPresenter from "./ProfileFlyoutPresenter";

describe("profile-flyout/presenters/ProfileFlyoutPresenter", () => {
  beforeAll(() => {
    console.warn = jest.fn();
  });

  takeSnapshotsOf(ProfileFlyoutPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders will all props",
      props: {
        email: "thelma@autodesk.com",
        image: "http://placekitten.com/g/32/32",
        name: "Thelma Dickinson",
        onProfileClickOutside: function onProfileClickOutside() {},
        onProfileImageClick: function onProfileImageClick() {},
        onProfileSettingsClick: function onProfileSettingsClick() {},
        onSignOutClick: function onSignOutClick() {},
        open: true
      }
    }
  ]);
});
