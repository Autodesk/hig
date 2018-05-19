import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  actionsOptions: "Options for Actions"
};

const knobLabels = {
  email: "Email Address",
  image: "Image URL",
  name: "Name",
  onProfileSettingsClick: "onProfileSettingsClick",
  onSignOutClick: "onSignOutClick",
  profileSettingsLabel: "Profile Settings Label",
  profileSettingsLink: "Profile Settings Link",
  signOutLabel: "Sign Out Label",
  signOutLink: "Sign Out Link"
};

export default function getKnobs(props) {
  const {
    email,
    image,
    name,
    profileSettingsLabel,
    profileSettingsLink,
    signOutLabel,
    signOutLink,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    email: text(knobLabels.email, email, knobGroupIds.basic),
    image: text(knobLabels.image, image, knobGroupIds.basic),
    name: text(knobLabels.name, name, knobGroupIds.basic),
    onProfileSettingsClick: action(knobLabels.onProfileSettingsClick),
    onSignOutClick: action(knobLabels.onSignOutClick),
    profileSettingsLabel: text(
      knobLabels.profileSettingsLabel,
      profileSettingsLabel,
      knobGroupIds.actionsOptions
    ),
    profileSettingsLink: text(
      knobLabels.profileSettingsLink,
      profileSettingsLink,
      knobGroupIds.actionsOptions
    ),
    signOutLabel: text(
      knobLabels.signOutLabel,
      signOutLabel,
      knobGroupIds.actionsOptions
    ),
    signOutLink: text(
      knobLabels.signOutLink,
      signOutLink,
      knobGroupIds.actionsOptions
    )
  };
}
