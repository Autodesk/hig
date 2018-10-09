import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import ProjectAccountSwitcherPresenter from "./ProjectAccountSwitcherPresenter";

describe("project-account-switcher/presenters/ProjectAccountSwitcherPresenter", () => {
  beforeAll(() => {
    /* eslint-disable-next-line no-console */
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
        accounts: [
          { id: "1", label: "Account 1" },
          { id: "2", label: "Account 2" }
        ],
        activeAccount: { id: "1", label: "Account 1" },
        activeLabel: "Foo",
        activeProject: { id: "2", label: "Project 2" },
        onTargetClick: function handleTargetClick() {},
        projects: [
          { id: "1", label: "Project 1" },
          { id: "2", label: "Project 2" }
        ]
      }
    }
  ]);
});
