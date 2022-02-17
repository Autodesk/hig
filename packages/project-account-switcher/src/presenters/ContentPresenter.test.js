import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import ContentPresenter from "./ContentPresenter";

describe("project-account-switcher/presenters/ContentPresenter", () => {
  takeSnapshotsOf(ContentPresenter, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with all props",
      props: {
        accountTitle: "Accounts",
        accounts: [
          { id: "1", label: "Account 1" },
          {
            id: "2",
            label: "Account 2",
            image: "http://placekitten.com/g/60/32"
          }
        ],
        activeAccountObj: { id: "1", label: "Account 1" },
        activeProjectObj: { id: "2", label: "Project 2" },
        onAccountClick: function onAccountClick() {},
        onProjectClick: function onProjectClick() {},
        projectTitle: "Projects",
        projects: [
          { id: "1", label: "Project 1" },
          {
            id: "2",
            label: "Project 2",
            image: "http://placekitten.com/g/32/32"
          }
        ]
      }
    }
  ]);
});
