import React from "react";
import { storiesOf } from "@storybook/react";
import accountImage from "@hig/storybook/storybook-support/fixtures/account/dam.png";
import projectImage from "@hig/storybook/storybook-support/fixtures/project/architecture.png";

import ProjectAccountSwitcher from "../ProjectAccountSwitcher";

import "./ProjectAccountSwitcher.stories-test.scss";

function Capture({ children }) {
  return (
    <div
      data-capture="ProjectAccountSwitcher"
      style={{
        display: "flex",
        width: "400px",
        height: "600px",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      {children}
    </div>
  );
}

storiesOf("ProjectAccountSwitcher", module)
  .add("default", () => (
    <Capture>
      <ProjectAccountSwitcher
        accounts={[{ id: "1", label: "Account 1" }]}
        activeAccountId="1"
        activeProjectId="1"
        projects={[{ id: "1", label: "Project 1" }]}
      />
    </Capture>
  ))
  .add("open-accounts-projects", () => (
    <Capture>
      <ProjectAccountSwitcher
        accounts={[
          { id: "1", label: "Account 1" },
          { id: "2", label: "Account 2", image: accountImage }
        ]}
        activeAccountId="1"
        activeProjectId="1"
        open
        projects={[
          { id: "1", label: "Project 1" },
          { id: "2", label: "Project 2", image: projectImage }
        ]}
      />
    </Capture>
  ))
  .add("open-accounts", () => (
    <Capture>
      <ProjectAccountSwitcher
        accounts={[
          { id: "1", label: "Account 1" },
          { id: "2", label: "Account 2", image: accountImage }
        ]}
        activeAccountId="1"
        open
      />
    </Capture>
  ))
  .add("open-projects", () => (
    <Capture>
      <ProjectAccountSwitcher
        activeProjectId="1"
        open
        projects={[
          { id: "1", label: "Project 1" },
          { id: "2", label: "Project 2", image: projectImage }
        ]}
      />
    </Capture>
  ));
