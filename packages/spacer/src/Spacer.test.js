import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import Spacer from "./Spacer";

describe("spacer/Spacer", () => {
  takeSnapshotsOf(Spacer, [
    {
      desc: "renders with no props",
      props: {},
    },
    {
      desc: "renders with spacing",
      props: { spacing: "m" },
    },
    {
      desc: "renders with size",
      props: { size: "40px" },
    },
    {
      desc: "renders with size and spacing",
      props: { size: "40px", spacing: "m" },
    },
  ]);
});
