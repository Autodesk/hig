import React from "react";
import renderer from "react-test-renderer";
import ProjectAccountSwitcher from "./ProjectAccountSwitcher";

describe("project-account-switcher/ProjectAccountSwitcher", () => {
  describe("integration", () => {
    it("renders with default account/project", () => {
      const tree = renderer
        .create(
          <ProjectAccountSwitcher
            accounts={[
              { id: "1", label: "Account 1" },
              { id: "2", label: "Account 2" },
            ]}
            accountTitle="Accounts"
            defaultAccount="1"
            defaultProject="2"
            projects={[
              { id: "1", label: "Project 1" },
              { id: "2", label: "Project 2" },
            ]}
            projectTitle="Projects"
          />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
    it("renders with controlled active account/project", () => {
      const tree = renderer
        .create(
          <ProjectAccountSwitcher
            accounts={[
              { id: "1", label: "Account 1" },
              { id: "2", label: "Account 2" },
            ]}
            accountTitle="Accounts"
            activeAccount="2"
            activeProject="1"
            defaultAccount="1"
            defaultProject="2"
            projects={[
              { id: "1", label: "Project 1" },
              { id: "2", label: "Project 2" },
            ]}
            projectTitle="Projects"
          />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
