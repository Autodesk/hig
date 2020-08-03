import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import SpinnerPresenter from "./SpinnerPresenter";

describe("spinner/SpinnerPresenter/SpinnerPresenter", () => {
  takeSnapshotsOf(SpinnerPresenter, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with disabled",
      props: {
        disabled: true
      }
    },
    {
      desc: "renders with variant",
      props: {
        variant: "box"
      }
    },
    {
      desc: "renders with custom stylesheet",
      props: {
        stylesheet: styles => ({
          ...styles,
          spinner: {
            ...styles.spinner,
            backgroundColor: "pink"
          }
        })
      }
    },
    {
      desc: "renders with custom className",
      props: {
        className: "custom"
      }
    }
  ]);
});
