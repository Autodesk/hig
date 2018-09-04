import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import HelpButtonPresenter from "./HelpButtonPresenter";

describe("top-nav/presenters/HelpButtonPresenter", () => {
  takeSnapshotsOf(HelpButtonPresenter, [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with children",
      props: {
        children: <div className="logo" />
      }
    },
    {
      description: "renders with children and onClick",
      props: {
        children: <div className="logo" />,
        onClick: () => {}
      }
    }
  ]);
});
