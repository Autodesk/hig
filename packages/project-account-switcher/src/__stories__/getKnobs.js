import { action } from "@storybook/addon-actions";
import { object, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  accounts: "Accounts",
  accountTitle: "Account List Label",
  activeAccountId: "Active Account Id",
  activeProjectId: "Active Project Id",
  onChange: "State changed",
  onClick: "List item clicked",
  onTargetClick: "Target clicked",
  projects: "Projects",
  projectTitle: "Project List Label"
};

export default function getKnobs(props) {
  const {
    accounts,
    accountTitle,
    activeAccountId,
    activeProjectId,
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
    activeAccountId: object(
      knobLabels.activeAccountId,
      activeAccountId,
      knobGroupIds.basic
    ),
    activeProjectId: object(
      knobLabels.activeProjectId,
      activeProjectId,
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
    onTargetClick: action(knobLabels.onTargetClick)
  };
}
