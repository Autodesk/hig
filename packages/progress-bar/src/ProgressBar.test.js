import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import ProgressBar from "./ProgressBar";

describe("progress-bar/ProgressBar", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(ProgressBar, [
      {
        desc: "indeterminate"
      },
      {
        desc: "determinate",
        props: { percentComplete: 33 }
      },
      {
        desc: "passing className",
        props: { className: "myClass-a myClass-b" }
      },
      {
        desc: "custom stylesheet",
        props: {
          stylesheet: styles => ({
            ...styles,
            wrapper: {
              ...styles.wrapper,
              backgroundColor: "red"
            }
          })
        }
      }
    ]);
  });
});
