import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import PointerPresenter from "./PointerPresenter";

describe("flyout/presenters/PointerPresenter", () => {
  takeSnapshotsOf(PointerPresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        borderWidth: 10,
        size: 100,
      },
    },
  ]);
});
