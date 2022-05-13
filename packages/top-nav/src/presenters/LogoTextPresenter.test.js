import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

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
