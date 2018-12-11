import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import DismissButtonPresenter from "./DismissButtonPresenter";

describe("notifications-flyout/presenters/DismissButtonPresenter", () => {
  takeSnapshotsOf(DismissButtonPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        onClick: () => {},
        title: "HELLO"
      }
    }
  ]);
});
