import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import EmptyStatePresenter from "./EmptyStatePresenter";

describe("notifications-flyout/presenters/EmptyStatePresenter", () => {
  takeSnapshotsOf(EmptyStatePresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        message: "hello world",
      },
    },
  ]);
});
