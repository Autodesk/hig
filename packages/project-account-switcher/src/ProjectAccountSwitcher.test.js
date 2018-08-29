import React from "react";
import renderer from "react-test-renderer";
import ProjectAccountSwitcher from "./ProjectAccountSwitcher";

describe("project-account-switcher/ProjectAccountSwitcher", () => {
  describe("integration", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <ProjectAccountSwitcher
            accounts={[
              { id: "1", label: "Account 1" },
              { id: "2", label: "Account 2" }
            ]}
            accountTitle="Accounts"
            activeAccountId="1"
            activeProjectId="2"
            projects={[
              { id: "1", label: "Project 1" },
              { id: "2", label: "Project 2" }
            ]}
            projectTitle="Projects"
          />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
