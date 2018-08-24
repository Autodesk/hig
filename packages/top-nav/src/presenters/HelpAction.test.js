import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import HelpAction from "./HelpAction";

describe("top-nav/presenters/HelpAction", () => {
  takeSnapshotsOf(HelpAction, [
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
