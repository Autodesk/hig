import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import PointerWrapperPresenter from "./PointerWrapperPresenter";

describe("flyout/presenters/PointerWrapperPresenter", () => {
  takeSnapshotsOf(PointerWrapperPresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        children: "whoa there",
        innerRef: function handleRef() {},
        style: {
          top: "1px",
          left: "23px",
        },
      },
    },
  ]);
});
