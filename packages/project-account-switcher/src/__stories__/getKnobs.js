import { action } from "@storybook/addon-actions";
import { object, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
};

const knobLabels = {
  accounts: "Accounts",
  accountTitle: "Account List Label",
  activeAccount: "Active Account (controlled)",
  activeProject: "Active Project (controlled)",
  defaultAccount: "Default Account",
  defaultProject: "Default Project",
  onChange: "State changed",
  onClick: "List item clicked",
  onTargetClick: "Target clicked",
  projects: "Projects",
  projectTitle: "Project List Label",
};

export default function getKnobs(props) {
  const {
    accounts,
    accountTitle,
    activeAccount,
    activeProject,
    defaultAccount,
    defaultProject,
    onChange,
    onClick,
    onTargetClick,
    projects,
    projectTitle,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    accounts: object(knobLabels.accounts, accounts, knobGroupIds.basic),
    defaultAccount: text(
      knobLabels.defaultAccount,
      defaultAccount,
      knobGroupIds.basic
    ),
    defaultProject: text(
      knobLabels.defaultProject,
      defaultProject,
      knobGroupIds.basic
    ),
    activeAccount: text(
      knobLabels.activeAccount,
      activeAccount,
      knobGroupIds.basic
    ),
    activeProject: text(
      knobLabels.activeProject,
      activeProject,
      knobGroupIds.basic
    ),
    projects: object(knobLabels.projects, projects, knobGroupIds.basic),
    projectTitle: text(
      knobLabels.projectTitle,
      projectTitle,
      knobGroupIds.basic
    ),
    accountTitle: text(
      knobLabels.accountTitle,
      accountTitle,
      knobGroupIds.basic
    ),
    onChange: action(knobLabels.onChange),
    onClick: action(knobLabels.onClick),
    onTargetClick: action(knobLabels.onTargetClick),
  };
}
