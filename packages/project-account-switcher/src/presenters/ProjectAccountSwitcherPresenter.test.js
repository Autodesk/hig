import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import ProjectAccountSwitcherPresenter from "./ProjectAccountSwitcherPresenter";

describe("project-account-switcher/presenters/ProjectAccountSwitcherPresenter", () => {
  beforeAll(() => {
    console.warn = jest.fn();
  });

  takeSnapshotsOf(ProjectAccountSwitcherPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        accountTitle: "Accounts",
        accounts: [
          { id: "1", label: "Account 1" },
          { id: "2", label: "Account 2" }
        ],
        activeAccount: { id: "1", label: "Account 1" },
        activeProject: { id: "2", label: "Project 2" },
        onAccountClick: function onAccountClick() {},
        onProjectClick: function onProjectClick() {},
        projectTitle: "Projects",
        projects: [
          { id: "1", label: "Project 1" },
          { id: "2", label: "Project 2" }
        ]
      }
    }
  ]);
});
