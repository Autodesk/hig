import React from "react";
import { storiesOf } from "@storybook/react";

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
        accounts={[{ id: "1", label: "Account 1" }]}
        activeAccountId="1"
        activeProjectId="1"
        open
        projects={[{ id: "1", label: "Project 1" }]}
      />
    </Capture>
  ))
  .add("open-accounts", () => (
    <Capture>
      <ProjectAccountSwitcher
        accounts={[{ id: "1", label: "Account 1" }]}
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
        projects={[{ id: "1", label: "Project 1" }]}
      />
    </Capture>
  ));
