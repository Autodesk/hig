import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import LogoText from "./LogoText";

describe("top-nav/presenters/LogoText", () => {
  takeSnapshotsOf(LogoText, [
    {
      description: "renders with children",
      props: {
        children: <span>Autodesk HIG</span>
      }
    }
  ]);
});
