import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import IndicatorPresenter from "./IndicatorPresenter";

describe("notifications-flyout/presenters/IndicatorPresenter", () => {
  takeSnapshotsOf(IndicatorPresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        count: 3,
        onClick: () => {},
        showCount: true,
        title: "hello world",
      },
    },
  ]);
});
