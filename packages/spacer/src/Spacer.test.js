import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Spacer from "./Spacer";

describe("spacer/Spacer", () => {
  takeSnapshotsOf(Spacer, [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with spacing",
      props: { spacing: "m" }
    },
    {
      description: "renders with size",
      props: { size: "40px" }
    },
    {
      description: "renders with size and spacing",
      props: { size: "40px", spacing: "m" }
    }
  ]);
});
