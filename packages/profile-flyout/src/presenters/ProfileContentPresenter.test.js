import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import ProfileContentPresenter from "./ProfileContentPresenter";

describe("profile-flyout/presenters/ProfileContentPresenter", () => {
  takeSnapshotsOf(ProfileContentPresenter, [
    {
      desc: "renders with no props",
      props: {},
    },
    {
      desc: "renders with a name",
      props: {
        profileName: "Pete Parker",
      },
    },
    {
      desc: "renders with an email",
      props: {
        profileEmail: "spyder-man@autodesk.com",
      },
    },
    {
      desc: "renders with all props",
      props: {
        profileName: "Pete Parker",
        profileEmail: "spyder-man@autodesk.com",
        children: <span />,
      },
    },
  ]);
});
