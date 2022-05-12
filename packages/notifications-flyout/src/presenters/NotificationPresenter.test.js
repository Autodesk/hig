import { ENTERED } from "react-transition-group/Transition";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import NotificationPresenter from "./NotificationPresenter";
import { types } from "../types";

describe("notifications-flyout/presenters/NotificationPresenter", () => {
  takeSnapshotsOf(NotificationPresenter, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props",
      props: {
        children: "foobar",
        dismissButtonTitle: "hello world",
        featured: true,
        height: "3000px",
        innerRef: () => {},
        onDismissButtonClick: () => {},
        showDismissButton: true,
        timestamp: "2018-08-17",
        transitionStatus: ENTERED,
        type: types.SUCCESS,
        unread: true,
      },
    },
  ]);
});
