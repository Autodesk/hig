import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import LogoTextPresenter from "./LogoTextPresenter";

describe("top-nav/presenters/LogoTextPresenter", () => {
  takeSnapshotsOf(LogoTextPresenter, [
    {
      desc: "renders with children",
      props: {
        children: <span>Autodesk HIG</span>,
      },
    },
  ]);
});
