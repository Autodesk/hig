import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import { List24 } from "@hig/icons";
import NavButtonPresenter from "./NavButtonPresenter";

describe("top-nav/presenters/NavActionButtonPresenter", () => {
  takeSnapshotsOf(NavButtonPresenter, [
    {
      desc: "renders with no props",
      props: {},
    },
    {
      desc: "renders with children",
      props: {
        children: <div className="logo" />,
      },
    },
    {
      desc: "renders with children, icon, onClick and title",
      props: {
        children: <div className="logo" />,
        onClick: () => {},
        icon: <List24 />,
        title: "title",
      },
    },
  ]);
});
