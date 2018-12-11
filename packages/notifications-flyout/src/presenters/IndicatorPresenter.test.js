import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import IndicatorPresenter from "./IndicatorPresenter";

describe("notifications-flyout/presenters/IndicatorPresenter", () => {
  takeSnapshotsOf(IndicatorPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        count: 3,
        onClick: () => {},
        showCount: true,
        title: "hello world"
      }
    }
  ]);
});
