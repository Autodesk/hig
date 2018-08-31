import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import ProfileButtonPresenter from "./ProfileButtonPresenter";

describe("top-nav/presenters/ProfileButtonPresenter", () => {
  takeSnapshotsOf(ProfileButtonPresenter, [
    {
      description: "renders with avatarName",
      props: {
        avatarName: "Wolfgang Pauli"
      }
    },
    {
      description: "renders with children and avatarName",
      props: {
        avatarName: "Hans Hellmann",
        children: <div className="logo" />
      }
    },
    {
      description: "renders with all props",
      props: {
        avatarName: "Richard Feynman",
        avatarImage: "richard_phillips_feynman.png",
        children: <div className="logo" />,
        onClick: () => {}
      }
    }
  ]);
});
