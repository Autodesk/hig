import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import { List24 } from "@hig/icons";
import NavButtonPresenter from "./NavButtonPresenter";

describe("top-nav/presenters/NavActionButtonPresenter", () => {
  takeSnapshotsOf(NavButtonPresenter, [
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
      description: "renders with children, icon, onClick and title",
      props: {
        children: <div className="logo" />,
        onClick: () => {},
        icon: <List24 />,
        title: "title"
      }
    }
  ]);
});
