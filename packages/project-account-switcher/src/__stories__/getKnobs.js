import { action } from "@storybook/addon-actions";
import { object, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  accounts: "Accounts",
  activeAccountId: "Active Account Id",
  activeProjectId: "Active Project Id",
  projects: "Projects",
  projectTitle: "Project List Label",
  accountTitle: "Account List Label",
  onProjectClick: "onProjectClick",
  onAccountClick: "onAccountClick"
};

export default function getKnobs(props) {
  const {
    accounts,
    projects,
    activeProjectId,
    activeAccountId,
    projectTitle,
    accountTitle,
    onProjectClick,
    onAccountClick,
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
    onProjectClick: action(knobLabels.onProjectClick),
    onAccountClick: action(knobLabels.onAccountClick)
  };
}
