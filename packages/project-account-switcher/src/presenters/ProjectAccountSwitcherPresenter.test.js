/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import ProjectAccountSwitcherPresenter from "./ProjectAccountSwitcherPresenter";

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
