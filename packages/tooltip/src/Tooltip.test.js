import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Tooltip from "./Tooltip";

describe("tooltip/Tooltip", () => {
  takeSnapshotsOf(Tooltip, [
    {
      desc: "renders",
      props: {}
    }
  ]);
});
