import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import ProfileFlyoutPresenter from "./ProfileFlyoutPresenter";

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
      open: true,
      profileSettingsLabel: "Profile Settings",
      profileSettingsLink: "https://www.autodesk.com/",
      signOutLabel: "Sign Out",
      signOutLink: "https://www.autodesk.com/"
    }
  }
]);
