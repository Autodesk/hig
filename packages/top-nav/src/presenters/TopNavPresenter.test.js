import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import TopNavPresenter from "./TopNavPresenter";

describe("top-nav/presenters/TopNavPresenter", () => {
  takeSnapshotsOf(TopNavPresenter, [
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
