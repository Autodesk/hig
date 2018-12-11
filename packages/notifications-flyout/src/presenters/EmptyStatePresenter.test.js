import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import EmptyStatePresenter from "./EmptyStatePresenter";

describe("notifications-flyout/presenters/EmptyStatePresenter", () => {
  takeSnapshotsOf(EmptyStatePresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        message: "hello world"
      }
    }
  ]);
});
