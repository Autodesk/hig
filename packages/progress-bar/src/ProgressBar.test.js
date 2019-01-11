import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import ProgressBar from "./ProgressBar";

describe("progress-bar/ProgressBar", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(ProgressBar, [
      {
        description: "indeterminate"
      },
      {
        description: "determinate",
        props: { percentComplete: 33 }
      }
    ]);
  });
});
