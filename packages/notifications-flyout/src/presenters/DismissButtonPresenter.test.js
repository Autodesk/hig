import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import DismissButtonPresenter from "./DismissButtonPresenter";

describe("notifications-flyout/presenters/DismissButtonPresenter", () => {
  takeSnapshotsOf(DismissButtonPresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        onClick: () => {},
        title: "HELLO",
      },
    },
  ]);
});
