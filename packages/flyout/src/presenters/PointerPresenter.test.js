import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import PointerPresenter from "./PointerPresenter";

describe("flyout/presenters/PointerPresenter", () => {
  takeSnapshotsOf(PointerPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        borderWidth: 10,
        size: 100
      }
    }
  ]);
});
