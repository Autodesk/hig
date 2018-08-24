import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import TopNav from "./TopNav";

describe("top-nav/presenters/TopNav", () => {
  takeSnapshotsOf(TopNav, [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with actions and logo",
      props: {
        leftActions: <div className="leftActions" />,
        rightActions: <div className="rightActions" />,
        logo: <div className="logo" />
      }
    }
  ]);
});
