import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import TopNavPresenter from "./TopNavPresenter";

describe("top-nav/presenters/TopNavPresenter", () => {
  takeSnapshotsOf(TopNavPresenter, [
    {
      desc: "renders with no props",
      props: {},
    },
    {
      desc: "renders with actions and logo",
      props: {
        leftActions: <div className="leftActions" />,
        rightActions: <div className="rightActions" />,
        logo: <div className="logo" />,
      },
    },
  ]);
});
