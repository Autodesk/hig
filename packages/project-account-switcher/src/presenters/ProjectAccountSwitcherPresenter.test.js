import React from "react";
import renderer from "react-test-renderer";
import ProjectAccountSwitcherPresenter from "./ProjectAccountSwitcherPresenter";

describe("project-account-switcher/presenters/ProjectAccountSwitcherPresenter", () => {
  [
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
        activeAccountId: "1",
        activeProjectId: "2",
        onAccountClick: function onAccountClick() {},
        onProjectClick: function onProjectClick() {},
        projectTitle: "Projects",
        projects: [
          { id: "1", label: "Project 1" },
          { id: "2", label: "Project 2" }
        ]
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <ProjectAccountSwitcherPresenter {...otherProps}>
          {children}
        </ProjectAccountSwitcherPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
